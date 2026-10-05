import { z } from "zod";

export const rfqItemSchema = z.object({
  productId: z.string().min(1, "Product ID is required"),
  productSlug: z.string().min(1, "Product slug is required"),
  productName: z.string().min(1, "Product name is required"),
  categorySlug: z.string().min(1, "Category slug is required"),
  selectedVariantCode: z.string().optional(),
  sizeOrSpec: z.string().optional(),
  quantity: z.string().min(1, "Quantity is required"),
  unit: z.string().default("unit"),
  notes: z.string().optional(),
});

export const rfqSubmissionSchema = z.object({
  contactName: z.string().min(2, "Contact person name is required (minimum 2 characters)"),
  companyName: z.string().min(2, "Company or Organization name is required"),
  email: z.string().email("Please provide a valid business email address"),
  phone: z.string().min(7, "Valid contact telephone number is required"),
  whatsapp: z.string().optional(),
  deliveryCityOrRegion: z.string().min(2, "Delivery site, mine, or city is required"),
  urgency: z.enum([
    "urgent_breakdown",
    "standard_quote",
    "project_planning",
    "tender"
  ], {
    required_error: "Please select quotation urgency",
  }),
  items: z.array(rfqItemSchema).min(1, "At least one product item or custom specification must be included in your RFQ"),
  additionalNotes: z.string().max(2000, "Notes must not exceed 2000 characters").optional(),
  applicationEnvironment: z.string().max(1000).optional(),
  honeypot: z.string().max(0, "Bot detection triggered").optional(), // Must be empty
});

export type RFQSubmissionInput = z.infer<typeof rfqSubmissionSchema>;
