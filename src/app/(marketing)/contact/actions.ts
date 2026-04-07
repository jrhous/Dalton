"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";

export async function submitContactForm(data: ContactFormValues) {
  // Server-side validation
  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." };
  }

  try {
    // TODO: In production, integrate with:
    // - Email service (Resend, SendGrid) to notify the company
    // - CRM or database to store the lead
    // - Slack/SMS webhook for instant notification
    console.log("Contact form submission:", parsed.data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
