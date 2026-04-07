"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  { value: "residential-repair", label: "Residential Repair" },
  { value: "residential-install", label: "New System Installation" },
  { value: "maintenance", label: "Maintenance / Tune-Up" },
  { value: "commercial", label: "Commercial HVAC" },
  { value: "indoor-air-quality", label: "Indoor Air Quality" },
  { value: "emergency", label: "Emergency Service" },
  { value: "other", label: "Other / Not Sure" },
];

const TIME_OPTIONS = [
  { value: "morning", label: "Morning (7am–12pm)" },
  { value: "afternoon", label: "Afternoon (12pm–6pm)" },
  { value: "anytime", label: "Anytime" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      preferredTime: "anytime",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      // Validate client-side
      const parsed = contactFormSchema.safeParse(data);
      if (!parsed.success) {
        setStatus("error");
        return;
      }
      // TODO: Replace with your form endpoint (e.g., Formspree, EmailJS, or custom API)
      console.log("Contact form submission:", parsed.data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card" role="alert">
        <CheckCircle2 className="mx-auto h-16 w-16 text-success" />
        <h3 className="mt-4 text-2xl font-bold text-ocean">Thank You!</h3>
        <p className="mt-2 text-ocean/70">
          We&apos;ve received your request and will contact you within 1 business
          hour. For immediate assistance, please call us.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          className="mt-6 bg-teal-500 hover:bg-teal-600"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl bg-white p-6 shadow-card lg:p-8 space-y-5"
    >
      <h3 className="text-2xl font-bold text-ocean">Request Service</h3>

      {status === "error" && (
        <div
          className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700"
          role="alert"
          aria-live="polite"
        >
          <AlertCircle className="h-5 w-5 shrink-0" />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      {/* Name */}
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Your full name"
          className={cn("mt-1.5 h-12 text-base", errors.name && "border-red-500")}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email + Phone Row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your@email.com"
            className={cn("mt-1.5 h-12 text-base", errors.email && "border-red-500")}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="(941) 555-0123"
            className={cn("mt-1.5 h-12 text-base", errors.phone && "border-red-500")}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Service Type */}
      <div>
        <Label htmlFor="serviceType">Service Needed</Label>
        <Select
          onValueChange={(value) =>
            setValue("serviceType", value as ContactFormValues["serviceType"])
          }
        >
          <SelectTrigger className={cn("mt-1.5 h-12 text-base", errors.serviceType && "border-red-500")}>
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
        )}
      </div>

      {/* Date + Time Row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="preferredDate">Preferred Date (optional)</Label>
          <Input
            id="preferredDate"
            type="date"
            {...register("preferredDate")}
            className="mt-1.5 h-12 text-base"
          />
        </div>
        <div>
          <Label htmlFor="preferredTime">Preferred Time</Label>
          <Select
            onValueChange={(value) =>
              setValue("preferredTime", value as ContactFormValues["preferredTime"])
            }
            defaultValue="anytime"
          >
            <SelectTrigger className="mt-1.5 h-12 text-base">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TIME_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">How Can We Help?</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your HVAC needs..."
          rows={4}
          className={cn("mt-1.5 text-base resize-none", errors.message && "border-red-500")}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-14 text-lg font-bold bg-terracotta-400 hover:bg-terracotta-500 text-white rounded-xl"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </span>
        ) : (
          "Send Request"
        )}
      </Button>

      <p className="text-center text-xs text-ocean/50">
        We respect your privacy. Your information is never shared with third parties.
      </p>
    </form>
  );
}
