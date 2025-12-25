"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-strong border-b border-white/20 py-3 shadow-2xl"
          : "bg-transparent/80 backdrop-blur-sm py-4"
      )}
    >
      {/* Skip to content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="text-2xl font-bold text-gradient font-heading">
            OW
          </div>
          <span className="text-sm text-muted-foreground hidden sm:block group-hover:text-foreground transition-colors">
            Optimize the World
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <button
            className="hidden md:flex items-center space-x-1 text-sm text-foreground/80 hover:text-primary transition-colors"
            aria-label="Change language"
          >
            <Globe className="w-4 h-4" />
            <span>ENG</span>
          </button>

          {/* OW Suite Button */}
          <div className="hidden sm:flex items-center">
            <span className="px-3 py-1.5 text-sm font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 transition-colors">
              OW Suite
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/20 glass-strong backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Language Selector - Mobile */}
            <button
              className="flex items-center space-x-1 text-sm text-foreground/80 hover:text-primary transition-colors py-2"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span>ENG</span>
            </button>
            
            {/* OW Suite Button - Mobile */}
            <div className="mt-4">
              <span className="inline-block px-3 py-1.5 text-sm font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                OW Suite
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
