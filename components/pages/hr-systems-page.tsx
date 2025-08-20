"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { useState } from "react"
import { AlertTriangle, CheckCircle, Clock, DollarSign, Zap, Shield, TrendingUp, Settings } from "lucide-react"

const automationData = [
  { process: "Recruitment", current: 60, target: 80 },
  { process: "Payroll", current: 95, target: 98 },
  { process: "Onboarding", current: 70, target: 85 },
  { process: "Exit Management", current: 50, target: 75 },
]

const roiData = [
  { year: "2022", savings: 2.1 },
  { year: "2023", savings: 3.8 },
  { year: "2024", savings: 5.5 },
  { year: "2025 (Proj)", savings: 7.2 },
  { year: "2026 (Proj)", savings: 8.9 },
]

const complianceRisks = [
  { region: "North America", risk: "Low", score: 95, issues: 2 },
  { region: "Bangladesh", risk: "Low", score: 92, issues: 3 },
  { region: "Southland", risk: "Medium", score: 78, issues: 8 },
  { region: "CodexHub", risk: "High", score: 65, issues: 15 },
]

const payrollAccuracy = [
  { month: "Jan", onTime: 98, delayed: 2 },
  { month: "Feb", onTime: 97, delayed: 3 },
  { month: "Mar", onTime: 99, delayed: 1 },
  { month: "Apr", onTime: 98, delayed: 2 },
  { month: "May", onTime: 96, delayed: 4 },
  { month: "Jun", onTime: 98, delayed: 2 },
]

export function HRSystemsPage() {
  const [automationLevel, setAutomationLevel] = useState([75])
  const [projectedROI, setProjectedROI] = useState(350)

  const handleAutomationChange = (value: number[]) => {
    setAutomationLevel(value)
    // Calculate ROI based on automation level
    const newROI = Math.round(250 + value[0] * 2.5)
    setProjectedROI(newROI)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-sans font-bold text-foreground">HR Systems, Automation & Compliance</h1>
        <p className="text-muted-foreground mt-1">Digital adoption, automation ROI, and compliance risk management</p>
      </div>

      <Tabs defaultValue="automation" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="automation">Automation Status</TabsTrigger>
          <TabsTrigger value="roi">ROI & Savings</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Risk</TabsTrigger>
          <TabsTrigger value="tools">Interactive Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="automation" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationData.map((item) => (
              <Card key={item.process}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">{item.process}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-foreground">{item.current}%</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={item.current} className="mb-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Current</span>
                    <span>Target: {item.target}%</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                Automation Efficiency Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={automationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="process" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="current" fill="#3b82f6" name="Current %" />
                  <Bar dataKey="target" fill="#e5e7eb" name="Target %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roi" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Annual HR OPEX Savings</CardTitle>
                <CardDescription className="text-2xl font-bold text-green-600">$5.5M</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  +45% vs last year
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">3-Year Projected ROI</CardTitle>
                <CardDescription className="text-2xl font-bold text-blue-600">350-450%</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4 text-blue-500" />
                  Break-even: 18 months
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Efficiency Gains</CardTitle>
                <CardDescription className="text-2xl font-bold text-purple-600">67%</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-purple-500" />
                  Time saved annually
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>ROI Savings Trend</CardTitle>
              <CardDescription>Annual HR operational expense savings through automation</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}M`, "Savings"]} />
                  <Line type="monotone" dataKey="savings" stroke="#10b981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceRisks.map((region) => (
              <Card key={region.region}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">{region.region}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        region.risk === "Low" ? "default" : region.risk === "Medium" ? "secondary" : "destructive"
                      }
                    >
                      {region.risk} Risk
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Compliance Score</span>
                      <span className="font-medium">{region.score}%</span>
                    </div>
                    <Progress value={region.score} />
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <AlertTriangle className="h-3 w-3" />
                      {region.issues} open issues
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Payroll Accuracy</CardTitle>
                <CardDescription>Monthly on-time vs delayed payroll processing</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={payrollAccuracy}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="onTime" fill="#10b981" name="On-Time %" />
                    <Bar dataKey="delayed" fill="#ef4444" name="Delayed %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  Compliance Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Payroll Accuracy</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-medium">98%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Data Privacy Compliance</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-medium">GDPR Certified</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Audit Readiness</span>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">CodexHub Review</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Work Permit Tracking</span>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <span className="font-medium">15 Expiring</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-500" />
                Automation ROI Selector
              </CardTitle>
              <CardDescription>Adjust automation levels to see projected ROI and efficiency gains</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Automation Level</span>
                  <span className="text-lg font-bold text-blue-600">{automationLevel[0]}%</span>
                </div>
                <Slider
                  value={automationLevel}
                  onValueChange={handleAutomationChange}
                  max={100}
                  min={50}
                  step={5}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{projectedROI}%</div>
                      <div className="text-sm text-muted-foreground">3-Year ROI</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{Math.round(automationLevel[0] * 0.12)}%</div>
                      <div className="text-sm text-muted-foreground">Efficiency Gain</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        -{Math.round((100 - automationLevel[0]) * 0.15)}%
                      </div>
                      <div className="text-sm text-muted-foreground">Compliance Errors</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Recommendation</h4>
                <p className="text-sm text-blue-800">
                  {automationLevel[0] >= 80
                    ? "Excellent automation level! Focus on fine-tuning existing processes."
                    : automationLevel[0] >= 70
                      ? "Good progress. Consider automating exit management for additional ROI."
                      : "Significant opportunity for improvement. Prioritize recruitment and onboarding automation."}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
