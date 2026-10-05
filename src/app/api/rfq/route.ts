import { NextRequest, NextResponse } from "next/server";
import { rfqSubmissionSchema } from "@/lib/rfq-schema";
import { defaultEmailAdapter } from "@/lib/email-adapter";
import { RFQSubmissionPayload } from "@/types/industrial";

// Rate limiting in-memory store (for basic edge flood prevention)
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 10; // Max 10 submissions per minute per IP

  const timestamps = requestLog.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < windowMs);

  if (recent.length >= maxRequests) {
    return true;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const clientIp = request.headers.get("x-forwarded-for") || "unknown-ip";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please wait a moment before submitting another quotation request.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 1. Zod Validation & Honeypot Check
    const validationResult = rfqSubmissionSchema.safeParse(body);

    if (!validationResult.success) {
      const errorMap = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed on submitted fields",
          details: errorMap,
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // 2. Honeypot Bot Trap Check
    if (validatedData.honeypot && validatedData.honeypot.trim() !== "") {
      // Silently return success to bot without executing work
      return NextResponse.json({
        success: true,
        reference: "REQ-SPAM-PREVENTED",
        message: "Quotation request registered",
      });
    }

    // 3. Dispatch to Email / CRM Adapter
    const result = await defaultEmailAdapter.sendRfqNotification(validatedData as RFQSubmissionPayload);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Unable to dispatch quotation notification. Please contact trade desk directly.",
        },
        { status: 500 }
      );
    }

    const referenceNumber = result.messageId || `RH-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      reference: referenceNumber,
      message: "Formal RFQ successfully submitted to the technical trade desk.",
      slaNotice: "Our commercial sales team typically responds within 2 business hours with an itemized proforma.",
    });
  } catch (error) {
    console.error("RFQ submission processing error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred while processing your RFQ.",
      },
      { status: 500 }
    );
  }
}
