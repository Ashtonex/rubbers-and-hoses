import { COMPANY_CONFIG } from "@/data/company-config";

export interface WhatsAppProductInquiry {
  productName: string;
  productCode: string;
  variantCode?: string;
  sizeOrSpec?: string;
  industryOrApplication?: string;
}

/**
 * Builds a properly URL-encoded WhatsApp deep-link tailored to the customer's exact context.
 */
export function buildProductWhatsAppLink(inquiry: WhatsAppProductInquiry): string {
  const cleanPhone = COMPANY_CONFIG.primaryWhatsAppNumber.replace(/[^\d+]/g, "").replace(/^\+/, "");
  
  const lines: string[] = [
    `Hello ${COMPANY_CONFIG.companyName} sales team,`,
    ``,
    `I am enquiring about: *${inquiry.productName}*`,
    `Product Code: ${inquiry.productCode}`,
  ];

  if (inquiry.variantCode) {
    lines.push(`Selected Variant / Part Code: ${inquiry.variantCode}`);
  }

  if (inquiry.sizeOrSpec) {
    lines.push(`Size / Spec: ${inquiry.sizeOrSpec}`);
  }

  if (inquiry.industryOrApplication) {
    lines.push(`Application: ${inquiry.industryOrApplication}`);
  }

  lines.push(``);
  lines.push(`Please assist with current depot availability, pricing, and a formal quotation.`);

  const messageText = lines.join("\n");
  const encodedMessage = encodeURIComponent(messageText);

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function buildGeneralWhatsAppLink(subject?: string): string {
  const cleanPhone = COMPANY_CONFIG.primaryWhatsAppNumber.replace(/[^\d+]/g, "").replace(/^\+/, "");
  
  const text = subject
    ? `Hello ${COMPANY_CONFIG.companyName} sales team, I would like to enquire regarding: ${subject}. Please assist.`
    : `Hello ${COMPANY_CONFIG.companyName} sales desk, I have an industrial supply requirement and would like to request technical assistance and a quotation.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function buildEmergencyBreakdownWhatsAppLink(): string {
  const cleanPhone = COMPANY_CONFIG.primaryWhatsAppNumber.replace(/[^\d+]/g, "").replace(/^\+/, "");
  const text = `URGENT BREAKDOWN ENQUIRY: We require immediate emergency replacement for an industrial hose / belt / conveyor component. Please connect me to the on-call technical desk.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
