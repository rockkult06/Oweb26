import Link from "next/link";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Solutions", href: "/solutions" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Security", href: "/security" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/optimizeworld" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/optimizeworld" },
  { name: "GitHub", icon: Github, href: "https://github.com/optimizeworld" },
  { name: "Email", icon: Mail, href: "mailto:info@optimizeworld.net" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/20">
      <div className="absolute inset-0 glass-strong backdrop-blur-xl" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient font-heading">
              OW
            </div>
            <p className="text-sm text-muted-foreground">
              Optimize the World - Transforming urban data into actionable insights for smart cities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OW - Optimize the World. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for scientific decision-makers
          </p>
        </div>
      </div>
    </footer>
  );
}
