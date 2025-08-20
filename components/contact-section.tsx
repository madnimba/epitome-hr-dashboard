"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    employees: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      employees: "",
      interest: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">Get Started Today</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your HR operations? Contact our team to schedule a personalized demo and discover how
            FutureTech can drive your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-sans font-bold text-foreground">Schedule Your Demo</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will contact you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Enter your company name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role *</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                        placeholder="e.g., CHRO, VP of HR"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="employees">Company Size</Label>
                      <Select onValueChange={(value) => handleInputChange("employees", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-100">1-100 employees</SelectItem>
                          <SelectItem value="101-500">101-500 employees</SelectItem>
                          <SelectItem value="501-1000">501-1,000 employees</SelectItem>
                          <SelectItem value="1001-5000">1,001-5,000 employees</SelectItem>
                          <SelectItem value="5000+">5,000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Primary Interest</Label>
                      <Select onValueChange={(value) => handleInputChange("interest", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="workforce-management">Workforce Management</SelectItem>
                          <SelectItem value="performance-analytics">Performance Analytics</SelectItem>
                          <SelectItem value="compensation-analysis">Compensation Analysis</SelectItem>
                          <SelectItem value="hr-automation">HR Automation</SelectItem>
                          <SelectItem value="culture-integration">Culture Integration</SelectItem>
                          <SelectItem value="full-platform">Full Platform Demo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your HR challenges and goals..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                    Schedule Demo
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-foreground">Email Us</div>
                    <div className="text-muted-foreground">sales@futuretech.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-foreground">Call Us</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-foreground">Visit Us</div>
                    <div className="text-muted-foreground">
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94105
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-foreground">Business Hours</div>
                    <div className="text-muted-foreground">Mon-Fri: 9AM-6PM PST</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-accent text-accent-foreground">
              <CardContent className="p-6">
                <h3 className="font-sans font-bold text-lg mb-2">Ready to Get Started?</h3>
                <p className="text-accent-foreground/90 mb-4 text-sm">
                  Join 500+ enterprise clients who trust FutureTech for their HR transformation.
                </p>
                <Button variant="secondary" className="w-full">
                  Download Brochure
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
