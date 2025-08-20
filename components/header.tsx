"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-sans font-bold text-primary">FutureTech</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90">
              Contact Us
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Testimonials
              </button>
              <Button onClick={() => scrollToSection("contact")} className="w-full mt-2 bg-accent hover:bg-accent/90">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
