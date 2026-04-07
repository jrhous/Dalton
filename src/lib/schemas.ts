import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.enum([
    "residential-repair",
    "residential-install",
    "maintenance",
    "commercial",
    "indoor-air-quality",
    "emergency",
    "other",
  ]),
  preferredDate: z.string().optional(),
  preferredTime: z.enum(["morning", "afternoon", "anytime"]).optional(),
  message: z.string().min(10, "Please describe how we can help (at least 10 characters)"),
});

export const maintenanceSignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your full address"),
  plan: z.enum(["bronze", "silver", "gold"]),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type MaintenanceSignupValues = z.infer<typeof maintenanceSignupSchema>;
