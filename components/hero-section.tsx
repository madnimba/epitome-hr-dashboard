"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Users, TrendingUp } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-foreground leading-tight">
                Transform Your
                <span className="text-accent block">HR Operations</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive HR Executive Dashboard and Workforce Management Solutions for global enterprises.
                Streamline operations, boost engagement, and drive strategic growth with our cutting-edge platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => scrollToSection("services")}
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Schedule Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-sans font-bold text-accent">4,250+</div>
                <div className="text-sm text-muted-foreground">Global Employees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-sans font-bold text-accent">8.4%</div>
                <div className="text-sm text-muted-foreground">Attrition Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-sans font-bold text-accent">350%</div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hero-gradient rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-sans font-bold">Live Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-5 w-5" />
                      <span className="text-sm">Workforce</span>
                    </div>
                    <div className="text-2xl font-bold">4,250</div>
                    <div className="text-sm opacity-80">+12% this quarter</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-sm">Performance</span>
                    </div>
                    <div className="text-2xl font-bold">8.2/10</div>
                    <div className="text-sm opacity-80">Avg. rating</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="h-5 w-5" />
                      <span className="text-sm">Engagement</span>
                    </div>
                    <div className="text-2xl font-bold">81%</div>
                    <div className="text-sm opacity-80">Employee satisfaction</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-5 w-5" />
                      <span className="text-sm">Retention</span>
                    </div>
                    <div className="text-2xl font-bold">91.6%</div>
                    <div className="text-sm opacity-80">Annual retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
