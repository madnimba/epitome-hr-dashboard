"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Users,
  UserPlus,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Clock,
  Target,
  AlertTriangle,
  CheckCircle,
  Calendar,
  FileText,
  Award,
  UserX,
} from "lucide-react"

export function EmployeeLifecyclePage() {
  const [onboardingDays, setOnboardingDays] = useState([67])

  const calculateProductivityImpact = (days: number) => {
    const earlyAttritionRisk = Math.max(0, (days - 45) * 0.5)
    return {
      timeToProductivity: days,
      earlyAttritionRisk: earlyAttritionRisk.toFixed(1),
    }
  }

  const impact = calculateProductivityImpact(onboardingDays[0])

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-3xl font-sans font-bold text-foreground">Employee Lifecycle Navigator</h1>
          <p className="text-muted-foreground mt-1">Journey overview from hire to exit</p>
        </div>
        <Badge variant="outline" className="text-sm w-fit">
          Last updated: 1 hour ago
        </Badge>
      </div>

      {/* Journey Flow Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <Card className="relative">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-primary" />
              <CardTitle className="text-sm">Recruit</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Applications</p>
            <div className="mt-2 text-xs">
              <span className="text-destructive">⚠ 32 days avg</span>
            </div>
          </CardContent>
          <ArrowRight className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground bg-background" />
        </Card>

        <Card className="relative">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-secondary" />
              <CardTitle className="text-sm">Onboard</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">Completion</p>
            <div className="mt-2 text-xs">
              <span className="text-muted-foreground">67 days avg</span>
            </div>
          </CardContent>
          <ArrowRight className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground bg-background" />
        </Card>

        <Card className="relative">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-accent" />
              <CardTitle className="text-sm">Develop</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">Training hrs</p>
            <div className="mt-2 text-xs">
              <span className="text-green-600">156 certs</span>
            </div>
          </CardContent>
          <ArrowRight className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground bg-background" />
        </Card>

        <Card className="relative">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-chart-1" />
              <CardTitle className="text-sm">Perform</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">73%</div>
            <p className="text-xs text-muted-foreground">On track</p>
            <div className="mt-2 text-xs">
              <span className="text-muted-foreground">8.2/10 avg</span>
            </div>
          </CardContent>
          <ArrowRight className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground bg-background" />
        </Card>

        <Card className="relative">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-chart-2" />
              <CardTitle className="text-sm">Mobility</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34%</div>
            <p className="text-xs text-muted-foreground">Internal fill</p>
            <div className="mt-2 text-xs">
              <span className="text-green-600">89 moves</span>
            </div>
          </CardContent>
          <ArrowRight className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground bg-background" />
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <UserX className="h-5 w-5 text-destructive" />
              <CardTitle className="text-sm">Exit</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">8.4%</div>
            <p className="text-xs text-muted-foreground">Attrition</p>
            <div className="mt-2 text-xs">
              <span className="text-destructive">$2.1M cost</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recruitment Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>Recruitment Funnel</CardTitle>
            <CardDescription>Application to hire conversion rates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Applications</span>
                <span className="text-sm font-bold">1,234</span>
              </div>
              <Progress value={100} className="h-3" />
              <div className="text-xs text-muted-foreground text-right">100% baseline</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Screening</span>
                <span className="text-sm font-bold">456 (37%)</span>
              </div>
              <Progress value={37} className="h-3" />
              <div className="text-xs text-muted-foreground text-right">37% conversion rate</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Interviews</span>
                <span className="text-sm font-bold">189 (41%)</span>
              </div>
              <Progress value={15} className="h-3" />
              <div className="text-xs text-muted-foreground text-right">41% of screened</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Hires</span>
                <span className="text-sm font-bold">75</span>
              </div>
              <Progress value={6} className="h-3" />
              <div className="text-xs text-muted-foreground text-right">Final conversion</div>
            </div>

            <div className="pt-4 border-t space-y-2">
              <div className="flex justify-between text-sm">
                <span>Time-to-Hire:</span>
                <span className="font-semibold text-destructive">32 days (⚠ Target: 30)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Quality-of-Hire:</span>
                <span className="font-semibold">8.2/10 (Target: 8.5)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Onboarding Duration Simulator */}
        <Card>
          <CardHeader>
            <CardTitle>Onboarding Duration Simulator</CardTitle>
            <CardDescription>Adjust onboarding time to see productivity impact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Onboarding Duration</span>
                <span className="text-2xl font-bold">{onboardingDays[0]} days</span>
              </div>
              <Slider
                value={onboardingDays}
                onValueChange={setOnboardingDays}
                max={90}
                min={30}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>30 days</span>
                <span>90 days</span>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm font-medium mb-3">Impact Analysis</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Time-to-Productivity:</span>
                  <span className="text-sm font-semibold">{impact.timeToProductivity} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Early Attrition Risk:</span>
                  <span
                    className={`text-sm font-semibold ${Number.parseFloat(impact.earlyAttritionRisk) > 10 ? "text-destructive" : "text-green-600"}`}
                  >
                    {impact.earlyAttritionRisk}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">vs Target (45 days):</span>
                  <span
                    className={`text-sm font-semibold ${onboardingDays[0] > 45 ? "text-destructive" : "text-green-600"}`}
                  >
                    {onboardingDays[0] > 45 ? "+" : ""}
                    {onboardingDays[0] - 45} days
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button size="sm" className="w-full" disabled={onboardingDays[0] === 45}>
                Optimize to 45 Days
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recruitment Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Recruitment Metrics</CardTitle>
            <CardDescription>Key hiring performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Time-to-Hire</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-destructive">32 days</div>
                <div className="text-xs text-muted-foreground">Target: 30 days</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Quality-of-Hire</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">8.2/10</div>
                <div className="text-xs text-muted-foreground">Target: 8.5/10</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Offer Acceptance</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">87%</div>
                <div className="text-xs text-muted-foreground">Above industry avg</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Source Effectiveness</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">73%</div>
                <div className="text-xs text-muted-foreground">Internal referrals</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Onboarding Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Onboarding Metrics</CardTitle>
            <CardDescription>New employee integration success</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Completion Rate</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">89%</div>
                <div className="text-xs text-muted-foreground">Within 90 days</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Avg Duration</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">67 days</div>
                <div className="text-xs text-muted-foreground">Target: 45 days</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">90-Day Retention</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">94%</div>
                <div className="text-xs text-muted-foreground">Strong retention</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Satisfaction Score</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">8.7/10</div>
                <div className="text-xs text-muted-foreground">New hire feedback</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exit Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Exit Analysis</CardTitle>
            <CardDescription>Attrition patterns and costs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <span className="text-sm font-medium">Current Attrition</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-destructive">8.4%</div>
                <div className="text-xs text-muted-foreground">Target: ≤7%</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Top Exit Reasons:</div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Career Growth</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Compensation</span>
                  <span className="font-semibold">28%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Work-Life Balance</span>
                  <span className="font-semibold">22%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Management</span>
                  <span className="font-semibold">15%</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t">
              <div className="flex justify-between text-sm">
                <span>Annual Cost Impact:</span>
                <span className="font-semibold text-destructive">$2.1M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Avg Replacement Cost:</span>
                <span className="font-semibold">$58K</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
