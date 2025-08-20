"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  TrendingUp,
  Target,
  Star,
  Award,
  BookOpen,
  MessageSquare,
  DollarSign,
  Heart,
  BarChart3,
  PieChart,
} from "lucide-react"

export function PerformancePage() {
  const [engagementBudget, setEngagementBudget] = useState([500])

  const calculateEngagementImpact = (budget: number) => {
    const engagementIncrease = (budget / 1000) * 4 // 4% per $1000K
    const attritionDecrease = (budget / 1000) * 1.2 // 1.2% per $1000K
    return {
      engagementIncrease: engagementIncrease.toFixed(1),
      attritionDecrease: attritionDecrease.toFixed(1),
      totalBudget: budget,
    }
  }

  const impact = calculateEngagementImpact(engagementBudget[0])

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-3xl font-sans font-bold text-foreground">Performance, Engagement & Development</h1>
          <p className="text-muted-foreground mt-1">Track workforce effectiveness and leadership accountability</p>
        </div>
        <Badge variant="outline" className="text-sm w-fit">
          Last updated: 30 minutes ago
        </Badge>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Performers</CardTitle>
            <Star className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">25%</div>
            <p className="text-xs text-muted-foreground">1,063 employees</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Index</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">81%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +2% from Q3
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">HiPo Identified</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">300</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive">45 at-risk (15%)</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Training Hours</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive">Target: 50 hrs</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Performance Distribution
            </CardTitle>
            <CardDescription>Current workforce performance levels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    High Performers
                  </span>
                  <span className="text-sm font-bold">25% (1,063)</span>
                </div>
                <Progress value={25} className="h-3" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    Meets Expectations
                  </span>
                  <span className="text-sm font-bold">60% (2,550)</span>
                </div>
                <Progress value={60} className="h-3" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    Low Performers
                  </span>
                  <span className="text-sm font-bold">15% (638)</span>
                </div>
                <Progress value={15} className="h-3" />
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="text-sm font-medium mb-2">Performance Insights</div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>• 73% of employees are on track or exceeding expectations</div>
                <div>• Average performance rating: 8.2/10</div>
                <div>• 15% improvement needed for low performers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* HiPo Talent Tracker */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              HiPo Talent Tracker
            </CardTitle>
            <CardDescription>High-potential employee status and risk assessment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">255</div>
                <div className="text-sm text-green-700">Stable HiPo</div>
                <div className="text-xs text-muted-foreground">85% of total</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">45</div>
                <div className="text-sm text-red-700">At-Risk HiPo</div>
                <div className="text-xs text-muted-foreground">15% of total</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium">Risk Factors for At-Risk HiPo:</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Limited Growth Opportunities</span>
                  <span className="font-semibold">40%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Compensation Below Market</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Poor Manager Relationship</span>
                  <span className="font-semibold">25%</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t">
              <Button size="sm" className="w-full">
                View HiPo Development Plans
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback & Leadership + Engagement Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feedback & Leadership */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Feedback & Leadership
            </CardTitle>
            <CardDescription>360° feedback completion and leadership accountability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <div className="text-sm font-medium">360° Feedback Completion</div>
                  <div className="text-xs text-muted-foreground">Target: 90%</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-600">78%</div>
                  <div className="text-xs text-destructive">⚠ Below target</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <div className="text-sm font-medium">Leadership Accountability Index</div>
                  <div className="text-xs text-muted-foreground">Correlation with team attrition</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">7.5/10</div>
                  <div className="text-xs text-green-600">Above threshold (7.0)</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium">Leadership Impact Analysis:</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Teams with Index &gt;7:</span>
                  <span className="font-semibold text-green-600">Lower attrition (-2.3%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Teams with Index &lt;7:</span>
                  <span className="font-semibold text-red-600">Higher attrition (+4.1%)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Engagement Budget Simulator */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Engagement Budget Simulator
            </CardTitle>
            <CardDescription>Adjust wellness spend to see engagement impact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Additional Wellness Budget</span>
                <span className="text-2xl font-bold">${engagementBudget[0]}K</span>
              </div>
              <Slider
                value={engagementBudget}
                onValueChange={setEngagementBudget}
                max={2000}
                min={0}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$0K</span>
                <span>$2,000K</span>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm font-medium mb-3">Projected Impact</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Engagement Increase:</span>
                  <span className="text-sm font-semibold text-green-600">+{impact.engagementIncrease}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Attrition Decrease:</span>
                  <span className="text-sm font-semibold text-green-600">-{impact.attritionDecrease}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Investment:</span>
                  <span className="text-sm font-semibold">${impact.totalBudget}K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">ROI (12 months):</span>
                  <span className="text-sm font-semibold text-green-600">
                    {(((Number.parseFloat(impact.attritionDecrease) * 250) / impact.totalBudget) * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning & Growth + Engagement Pulse */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Learning & Growth Heatmap */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Learning & Growth
            </CardTitle>
            <CardDescription>Training hours, certifications, and upskilling coverage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">42</div>
                <div className="text-sm text-blue-700">Avg Training Hours</div>
                <div className="text-xs text-muted-foreground">Target: 50 hrs</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">156</div>
                <div className="text-sm text-green-700">Certifications</div>
                <div className="text-xs text-muted-foreground">Completed this quarter</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium">Upskilling Coverage by Department:</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Engineering</span>
                  <div className="flex items-center gap-2">
                    <Progress value={78} className="w-20 h-2" />
                    <span className="text-sm font-semibold">78%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sales</span>
                  <div className="flex items-center gap-2">
                    <Progress value={65} className="w-20 h-2" />
                    <span className="text-sm font-semibold">65%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Marketing</span>
                  <div className="flex items-center gap-2">
                    <Progress value={72} className="w-20 h-2" />
                    <span className="text-sm font-semibold">72%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Operations</span>
                  <div className="flex items-center gap-2">
                    <Progress value={58} className="w-20 h-2" />
                    <span className="text-sm font-semibold">58%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t text-center">
              <div className="text-sm">
                <span className="font-semibold">Overall Coverage: </span>
                <span className="text-lg font-bold text-primary">65%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Engagement Pulse */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Engagement Pulse
            </CardTitle>
            <CardDescription>Quarterly engagement trends and insights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Q1 2024</span>
                <span className="text-lg font-bold">84%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Q2 2024</span>
                <span className="text-lg font-bold">82%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Q3 2024</span>
                <span className="text-lg font-bold">79%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-2 border-green-200">
                <span className="text-sm font-medium">Q4 2024</span>
                <span className="text-lg font-bold text-green-600">81%</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium">Key Engagement Drivers:</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Career Development</span>
                  <span className="font-semibold">8.3/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Work-Life Balance</span>
                  <span className="font-semibold">7.9/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Recognition</span>
                  <span className="font-semibold">7.6/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Manager Support</span>
                  <span className="font-semibold">8.1/10</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t">
              <div className="text-xs text-center text-muted-foreground">Next pulse survey: January 15, 2025</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
