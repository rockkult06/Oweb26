"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization name is required"),
  role: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  nda: z.boolean().refine((val) => val === true, "NDA acceptance is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nda: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
            <Send className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold">Thank You!</h3>
          <p className="text-muted-foreground">
            We've received your message and will get back to you within 24 hours.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              {...register("name")}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium mb-2">
              Organization *
            </label>
            <Input
              id="organization"
              {...register("organization")}
              placeholder="City Municipality"
            />
            {errors.organization && (
              <p className="text-sm text-destructive mt-1">
                {errors.organization.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              Role (Optional)
            </label>
            <Input
              id="role"
              {...register("role")}
              placeholder="Transportation Director"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={5}
              className="flex w-full rounded-xl border border-white/10 bg-background-secondary/40 backdrop-blur-md px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:border-primary/50 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 hover:border-white/20 hover:bg-background-secondary/60"
              placeholder="Tell us about your city's optimization needs..."
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="nda"
              {...register("nda")}
              className="mt-1 w-4 h-4 rounded border-border"
            />
            <label htmlFor="nda" className="text-sm text-muted-foreground">
              I agree to the NDA and privacy policy *
            </label>
          </div>
          {errors.nda && (
            <p className="text-sm text-destructive">{errors.nda.message}</p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 w-4 h-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
