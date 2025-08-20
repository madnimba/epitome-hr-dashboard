"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from "lucide-react"

const footerLinks = {
  solutions: [
    { name: "Workforce Management", href: "#" },
    { name: "Performance Analytics", href: "#" },
    { name: "Compensation Analysis", href: "#" },
    { name: "HR Automation", href: "#" },
    { name: "Culture Integration", href: "#" },
    { name: "ESG & Compliance", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Leadership Team", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "News & Press", href: "#" },
    { name: "Partner Program", href: "#" },
    { name: "Investor Relations", href: "#" },
  ],
  resources: [
    { name: "Case Studies", href: "#portfolio" },
    { name: "White Papers", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Support Center", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" },
    { name: "Compliance", href: "#" },
    { name: "GDPR", href: "#" },
  ],
}

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("#")) {
      const element = document.getElementById(sectionId.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-sans font-bold mb-4">FutureTech</h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Transforming HR operations for global enterprises through innovative workforce management solutions,
                advanced analytics, and strategic insights.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">sales@futuretech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">123 Innovation Drive, San Francisco, CA 94105</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="font-sans font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 FutureTech. All rights reserved. | Transforming HR for the future.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-primary-foreground/80">ISO 27001 Certified</span>
            <span className="text-primary-foreground/80">SOC 2 Type II</span>
            <span className="text-primary-foreground/80">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
