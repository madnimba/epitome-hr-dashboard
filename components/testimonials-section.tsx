"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer Walsh",
    role: "Chief Human Resources Officer",
    company: "TechGlobal Industries",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "FutureTech transformed our HR operations completely. The unified dashboard gives us real-time insights across our 12,000+ employee base. We've seen a 40% improvement in decision-making speed and 25% increase in employee satisfaction.",
    rating: 5,
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Michael Chen",
    role: "VP of People Operations",
    company: "Global Financial Services",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The predictive analytics and automation features have revolutionized our recruitment process. We've reduced time-to-hire by 50% while improving candidate quality by 35%. The ROI has been exceptional.",
    rating: 5,
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Dr. Sarah Martinez",
    role: "Director of Organizational Development",
    company: "Healthcare Innovations Corp",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The culture integration tools were crucial during our merger. FutureTech helped us achieve 85% successful integration across 8,000 employees. The engagement tracking and ESG metrics are outstanding.",
    rating: 5,
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Robert Kim",
    role: "Chief Technology Officer",
    company: "Manufacturing Excellence Ltd",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The automation suite has saved us over $2M annually while improving accuracy to 95%. The compliance management and risk assessment features give us complete confidence in our HR operations.",
    rating: 5,
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Lisa Thompson",
    role: "Head of Talent Management",
    company: "Retail Network Solutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "FutureTech's performance management system has transformed how we develop our people. The 360° feedback and HiPo identification features have improved our leadership pipeline significantly.",
    rating: 5,
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "David Rodriguez",
    role: "Senior VP Human Resources",
    company: "Energy Solutions International",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The compensation analytics and pay equity monitoring have been game-changers. We've improved our market positioning by 25% and achieved better pay equity across all demographics.",
    rating: 5,
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from HR leaders who have transformed their operations with our solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="h-12 w-12 text-accent/30" />
                <div className="flex">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-sans font-bold text-foreground text-lg">{currentTestimonial.name}</div>
                    <div className="text-accent font-medium">{currentTestimonial.role}</div>
                    <div className="text-muted-foreground">{currentTestimonial.company}</div>
                  </div>
                </div>

                <img
                  src={currentTestimonial.companyLogo || "/placeholder.svg"}
                  alt={`${currentTestimonial.company} logo`}
                  className="h-10 opacity-60"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 p-0 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 p-0 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-sans font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-sans font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-sans font-bold text-accent mb-2">2M+</div>
            <div className="text-muted-foreground">Employees Managed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
