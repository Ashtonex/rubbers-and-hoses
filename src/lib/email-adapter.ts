import { RFQSubmissionPayload } from "@/types/industrial";
import { COMPANY_CONFIG } from "@/data/company-config";

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface IEmailAdapter {
  sendRfqNotification(payload: RFQSubmissionPayload): Promise<EmailSendResult>;
}

/**
 * Production-ready mock adapter that logs formatted procurement notices to console
 * and provides structured simulation. Replace with Nodemailer, Resend, or SendGrid adapter
 * using process.env.SMTP_* or process.env.RESEND_API_KEY.
 */
export class ConsoleEmailAdapter implements IEmailAdapter {
  async sendRfqNotification(payload: RFQSubmissionPayload): Promise<EmailSendResult> {
    const timestamp = new Date().toISOString();
    const reference = `RFQ-${Date.now().toString(36).toUpperCase()}`;

    // Format professional plain text notification for sales desk
    const salesNotification = `
======================================================
NEW B2B INDUSTRIAL RFQ RECEIVED [${reference}]
======================================================
Timestamp: ${timestamp}
Urgency Level: ${payload.urgency.toUpperCase()}
Company: ${payload.companyName}
Contact Person: ${payload.contactName}
Email: ${payload.email}
Phone: ${payload.phone}
WhatsApp: ${payload.whatsapp || "Not provided"}
Delivery Destination: ${payload.deliveryCityOrRegion}
Application Environment: ${payload.applicationEnvironment || "Not specified"}

BILL OF MATERIALS / PRODUCTS (${payload.items.length} line items):
------------------------------------------------------
${payload.items
  .map(
    (item, index) =>
      `${index + 1}. [${item.selectedVariantCode || "STD-SPEC"}] ${item.productName}\n` +
      `   Spec/Size: ${item.sizeOrSpec || "Standard"}\n` +
      `   Quantity: ${item.quantity} ${item.unit}\n` +
      `   Notes: ${item.notes || "None"}`
  )
  .join("\n\n")}

ADDITIONAL PROCUREMENT NOTES:
${payload.additionalNotes || "No additional comments"}
======================================================
    `.trim();

    console.log(salesNotification);

    return {
      success: true,
      messageId: reference,
    };
  }
}

/**
 * Active adapter instance. Change to SMTP or Resend when client supplies API keys.
 */
export const defaultEmailAdapter: IEmailAdapter = new ConsoleEmailAdapter();
