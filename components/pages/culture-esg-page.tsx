"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { useState } from "react"
import { Heart, Users, Leaf, Award, AlertCircle, TrendingUp, Target, Globe } from "lucide-react"

const cultureIntegrationData = [
  { quarter: "Q1 2024", MindNest: 65, CodexHub: 58, Triluxe: 72, GridWave: 61 },
  { quarter: "Q2 2024", MindNest: 70, CodexHub: 63, Triluxe: 78, GridWave: 66 },
  { quarter: "Q3 2024", MindNest: 73, CodexHub: 66, Triluxe: 80, GridWave: 69 },
  { quarter: "Q4 2024", MindNest: 75, CodexHub: 68, Triluxe: 82, GridWave: 71 },
]

const grievanceData = [
  { type: "Pay Disputes", count: 43, percentage: 35, trend: "up" },
  { type: "Harassment", count: 24, percentage: 20, trend: "down" },
  { type: "Career Growth", count: 18, percentage: 15, trend: "stable" },
  { type: "Work Environment", count: 15, percentage: 12, trend: "down" },
  { type: "Benefits", count: 12, percentage: 10, trend: "up" },
  { type: "Other", count: 10, percentage: 8, trend: "stable" },
]

const deiData = [
  { name: "Male Leadership", value: 72, color: "#3b82f6" },
  { name: "Female Leadership", value: 28, color: "#ec4899" },
  { name: "Male Workforce", value: 58, color: "#6366f1" },
  { name: "Female Workforce", value: 42, color: "#f59e0b" },
  { name: "Minority Representation", value: 12, color: "#10b981" },
]

const esgMetrics = [
  { category: "Engagement (SDG 8)", score: 81, target: 85, color: "#3b82f6" },
  { category: "Well-being (SDG 3)", score: 78, target: 80, color: "#10b981" },
  { category: "Equality (SDG 5)", score: 72, target: 85, color: "#ec4899" },
  { category: "Climate Action (SDG 13)", score: 85, target: 90, color: "#22c55e" },
]

export function CultureESGPage() {
  const [integrationSpeed, setIntegrationSpeed] = useState([75])
  const [projectedEngagement, setProjectedEngagement] = useState(81)
  const [grievanceRisk, setGrievanceRisk] = useState(15)

  const handleIntegrationChange = (value: number[]) => {
    setIntegrationSpeed(value)
    // Calculate engagement and grievance risk based on integration speed
    const baseEngagement = 81
    const engagementChange = (value[0] - 75) * 0.08
    setProjectedEngagement(Math.round(baseEngagement + engagementChange))

    const baseRisk = 15
    const riskChange = (value[0] - 75) * 0.13
    setGrievanceRisk(Math.round(baseRisk + riskChange))
  }

  return (
    <div className="space-y-6">
      <div className="min-w-0">
        <h1 className="text-3xl font-sans font-bold text-foreground">Culture, ESG & Strategic Alignment</h1>
        <p className="text-muted-foreground mt-1">Culture integration, inclusivity, and sustainability impact</p>
      </div>

      <Tabs defaultValue="culture" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="culture">Culture Integration</TabsTrigger>
          <TabsTrigger value="grievance">Grievance Management</TabsTrigger>
          <TabsTrigger value="dei">DEI Metrics</TabsTrigger>
          <TabsTrigger value="esg">ESG & Sustainability</TabsTrigger>
        </TabsList>

        <TabsContent value="culture" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">MindNest AI</CardTitle>
                <CardDescription className="text-2xl font-bold text-green-600">75%</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={75} className="mb-2" />
                <div className="text-xs text-muted-foreground">Integration Progress</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">CodexHub</CardTitle>
                <CardDescription className="text-2xl font-bold text-yellow-600">68%</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={68} className="mb-2" />
                <div className="text-xs text-muted-foreground">Needs Attention</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Triluxe</CardTitle>
                <CardDescription className="text-2xl font-bold text-green-600">82%</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={82} className="mb-2" />
                <div className="text-xs text-muted-foreground">Excellent Progress</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">GridWave</CardTitle>
                <CardDescription className="text-2xl font-bold text-blue-600">71%</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={71} className="mb-2" />
                <div className="text-xs text-muted-foreground">On Track</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Culture Integration Trend
              </CardTitle>
              <CardDescription>Quarterly progress across acquired companies</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={cultureIntegrationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="MindNest" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="CodexHub" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="Triluxe" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="GridWave" stroke="#8b5cf6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grievance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Open Cases</CardTitle>
                <CardDescription className="text-2xl font-bold text-red-600">122</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  +8% vs last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Resolved Cases</CardTitle>
                <CardDescription className="text-2xl font-bold text-green-600">97 (79%)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  Resolution rate improving
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Avg. Resolution Time</CardTitle>
                <CardDescription className="text-2xl font-bold text-yellow-600">14 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Target className="h-4 w-4 text-yellow-500" />
                  Target: ≤10 days
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Grievance Categories</CardTitle>
              <CardDescription>Top issues and trends across the organization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {grievanceData.map((item) => (
                  <div key={item.type} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">{item.type}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{item.count} cases</span>
                      <Badge
                        variant={item.trend === "up" ? "destructive" : item.trend === "down" ? "default" : "secondary"}
                      >
                        {item.percentage}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dei" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Gender Ratio</CardTitle>
                <CardDescription className="text-lg font-bold">58% M / 42% F</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={42} className="mb-2" />
                <div className="text-xs text-muted-foreground">Goal: 50/50 by 2030</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Leadership Diversity</CardTitle>
                <CardDescription className="text-lg font-bold text-yellow-600">28% Women</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={28} className="mb-2" />
                <div className="text-xs text-muted-foreground">Goal: 40% by 2027</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Minority Representation</CardTitle>
                <CardDescription className="text-lg font-bold text-green-600">12% Global</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={12} className="mb-2" />
                <div className="text-xs text-muted-foreground">Improving across regions</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Diversity Breakdown</CardTitle>
                <CardDescription>Workforce and leadership representation</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={deiData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {deiData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  DEI Initiatives Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Inclusive Leadership Training</span>
                  <div className="flex items-center gap-2">
                    <Progress value={85} className="w-20" />
                    <span className="text-sm font-medium">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Mentorship Programs</span>
                  <div className="flex items-center gap-2">
                    <Progress value={72} className="w-20" />
                    <span className="text-sm font-medium">72%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bias-Free Recruitment</span>
                  <div className="flex items-center gap-2">
                    <Progress value={91} className="w-20" />
                    <span className="text-sm font-medium">91%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Pay Equity Reviews</span>
                  <div className="flex items-center gap-2">
                    <Progress value={68} className="w-20" />
                    <span className="text-sm font-medium">68%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="esg" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-500" />
                  Green HR Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Paperless Transactions</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} />
                  <div className="text-xs text-muted-foreground">Goal: 100% by 2027</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Remote/Hybrid CO₂ Savings</span>
                    <span className="font-medium">2,300 tons/year</span>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="text-sm text-green-800">Equivalent to planting 52,000 trees annually</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  ISO Compliance Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">ISO 30400 (Human Capital)</span>
                  <Badge variant="default">Certified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">ISO 45001 (Health & Safety)</span>
                  <Badge variant="default">Certified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">ISO 26000 (Social Responsibility)</span>
                  <Badge variant="default">Certified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">B-Corp Certification</span>
                  <Badge variant="secondary">In Progress</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-500" />
                ESG Scorecard - HR-Linked SDG KPIs
              </CardTitle>
              <CardDescription>Progress toward UN Sustainable Development Goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {esgMetrics.map((metric) => (
                  <div key={metric.category} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{metric.category}</span>
                      <span>
                        {metric.score}% / {metric.target}%
                      </span>
                    </div>
                    <Progress value={metric.score} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      {metric.score >= metric.target ? "Target achieved" : `${metric.target - metric.score}% to target`}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Culture Integration Speed Simulator</CardTitle>
              <CardDescription>Adjust integration speed to see impact on engagement and grievance risk</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Integration Speed</span>
                  <span className="text-lg font-bold text-blue-600">{integrationSpeed[0]}%</span>
                </div>
                <Slider
                  value={integrationSpeed}
                  onValueChange={handleIntegrationChange}
                  max={100}
                  min={50}
                  step={5}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{projectedEngagement}%</div>
                      <div className="text-sm text-muted-foreground">Projected Engagement</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {projectedEngagement > 81 ? "+" : ""}
                        {projectedEngagement - 81}% vs current
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{grievanceRisk}%</div>
                      <div className="text-sm text-muted-foreground">Grievance Risk</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {grievanceRisk > 15 ? "+" : ""}
                        {grievanceRisk - 15}% vs current
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Impact Analysis</h4>
                <p className="text-sm text-blue-800">
                  {integrationSpeed[0] >= 85
                    ? "High integration speed may boost engagement but increases short-term grievance risk due to rapid change."
                    : integrationSpeed[0] >= 70
                      ? "Balanced approach - moderate engagement gains with manageable grievance risk."
                      : "Slower integration reduces grievance risk but may limit engagement improvements."}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
