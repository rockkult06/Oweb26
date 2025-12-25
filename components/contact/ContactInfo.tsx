import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    content: "info@optimizeworld.net",
    href: "mailto:info@optimizeworld.net",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+90 (XXX) XXX XX XX",
    href: "tel:+90XXXXXXXXX",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Istanbul, Turkey",
    href: "#",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    content: "Book a time slot",
    href: "https://calendly.com/optimizeworld",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-6">
          <h3 className="text-2xl font-semibold font-heading">
            Contact Information
          </h3>
          <div className="space-y-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold mb-1">{method.title}</h4>
                    {method.href !== "#" ? (
                      <Link
                        href={method.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {method.content}
                      </Link>
                    ) : (
                      <p className="text-sm text-muted-foreground">{method.content}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-semibold font-heading">
            Response Time
          </h3>
          <p className="text-sm text-muted-foreground">
            We typically respond to demo requests within 24 hours. For urgent
            matters, please call us directly.
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link href="https://calendly.com/optimizeworld">
              <Calendar className="mr-2 w-4 h-4" />
              Schedule a Meeting
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
