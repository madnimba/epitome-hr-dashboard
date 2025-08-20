"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Users,
  TrendingUp,
  TrendingDown,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Globe,
  Heart,
  Settings,
} from "lucide-react"

export function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-sans font-bold text-foreground">Executive Overview</h1>
          <p className="text-muted-foreground mt-1">Key metrics and insights across all HR functions</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-sm">
            Last updated: 2 hours ago
          </Badge>
          <Button size="sm">Generate Report</Button>
        </div>
      </div>

      {/* Critical Alerts */}
      <Card className="border-destructive/50 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Critical Attention Required
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm">Attrition rate at 8.4% (Target: &lt;7%)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm">CodexHub visa expirations flagged</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm">Time-to-hire exceeds target (32 vs 30 days)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm">Gender pay gap at -7% (Goal: &lt;3%)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Workforce</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,250</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +2.3% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attrition Rate</CardTitle>
            <TrendingDown className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">8.4%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive">⚠ Above target of 7%</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Score</CardTitle>
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
            <CardTitle className="text-sm font-medium">HR ROI Savings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5.5M</div>
            <p className="text-xs text-muted-foreground">Annual OPEX savings</p>
          </CardContent>
        </Card>
      </div>

      {/* Department Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Subsidiary Performance</CardTitle>
            <CardDescription>Key metrics across all subsidiaries</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Core Company</span>
                  <Badge variant="secondary" className="text-xs">
                    2,200
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">Healthy</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">CodexHub</span>
                  <Badge variant="secondary" className="text-xs">
                    750
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <span className="text-sm text-destructive">At Risk</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">MindNest AI</span>
                  <Badge variant="secondary" className="text-xs">
                    500
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">Healthy</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Triluxe</span>
                  <Badge variant="secondary" className="text-xs">
                    450
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">Healthy</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">GridWave</span>
                  <Badge variant="secondary" className="text-xs">
                    350
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">Healthy</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recruitment Pipeline</CardTitle>
            <CardDescription>Current hiring status and metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Applications</span>
                <span className="text-sm font-bold">1,234</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Screening</span>
                <span className="text-sm font-bold">456 (37%)</span>
              </div>
              <Progress value={37} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Interviews</span>
                <span className="text-sm font-bold">189 (41%)</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Hires</span>
                <span className="text-sm font-bold">75</span>
              </div>
              <Progress value={6} className="h-2" />
            </div>

            <div className="pt-2 border-t">
              <div className="flex items-center justify-between text-sm">
                <span>Time-to-Hire:</span>
                <span className="font-semibold text-destructive">32 days (⚠ Target: 30)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions and System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Distribution</CardTitle>
            <CardDescription>Current workforce performance levels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">High Performers</span>
                <span className="text-sm font-bold text-green-600">25%</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Meets Expectations</span>
                <span className="text-sm font-bold">60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Low Performers</span>
                <span className="text-sm font-bold text-destructive">15%</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Automation Status</CardTitle>
            <CardDescription>HR process automation levels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Payroll</span>
              <span className="text-sm font-bold text-green-600">95%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Onboarding</span>
              <span className="text-sm font-bold">70%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Recruitment</span>
              <span className="text-sm font-bold">60%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Exit Process</span>
              <span className="text-sm font-bold text-destructive">50%</span>
            </div>

            <div className="pt-2 border-t">
              <div className="text-sm text-center">
                <span className="font-semibold">3-Year ROI: </span>
                <span className="text-green-600 font-bold">350-450%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Culture & ESG</CardTitle>
            <CardDescription>Integration and sustainability metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Gender Ratio (M/F)</span>
              <span className="text-sm font-bold">58% / 42%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Leadership Diversity</span>
              <span className="text-sm font-bold">28% women</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Paperless Transactions</span>
              <span className="text-sm font-bold text-green-600">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Open Grievances</span>
              <span className="text-sm font-bold text-destructive">122</span>
            </div>

            <div className="pt-2 border-t">
              <div className="text-sm text-center">
                <span className="font-semibold">CO₂ Savings: </span>
                <span className="text-green-600 font-bold">2,300 tons/year</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Navigation */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Navigation</CardTitle>
          <CardDescription>Jump to specific dashboard sections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center gap-2 bg-transparent">
              <Globe className="h-5 w-5" />
              <span className="text-xs">Workforce</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center gap-2 bg-transparent">
              <Users className="h-5 w-5" />
              <span className="text-xs">Lifecycle</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center gap-2 bg-transparent">
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs">Performance</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center gap-2 bg-transparent">
              <DollarSign className="h-5 w-5" />
              <span className="text-xs">Compensation</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center gap-2 bg-transparent">
              <Settings className="h-5 w-5" />
              <span className="text-xs">Systems</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center gap-2 bg-transparent">
              <Heart className="h-5 w-5" />
              <span className="text-xs">Culture</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
