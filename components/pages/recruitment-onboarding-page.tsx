"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  UserPlus,
  Clock,
  Target,
  TrendingUp,
  Users,
  FileText,
  CheckCircle,
  AlertTriangle,
  Award,
  Search,
  Building,
  Globe,
} from "lucide-react"

export function RecruitmentOnboardingPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-sans font-bold text-foreground">Recruitment & Onboarding</h1>
          <p className="text-muted-foreground mt-1">Comprehensive talent acquisition and integration analytics</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-sm">
            Last updated: 15 minutes ago
          </Badge>
          <Button size="sm">Export Report</Button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +18% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time-to-Hire</CardTitle>
            <Clock className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">32 days</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive">⚠ Target: 30 days</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Offer Acceptance</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">87%</div>
            <p className="text-xs text-muted-foreground">Above industry average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Onboarding Score</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7/10</div>
            <p className="text-xs text-muted-foreground">New hire satisfaction</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="recruitment" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="recruitment">Recruitment Analytics</TabsTrigger>
          <TabsTrigger value="onboarding">Onboarding Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="recruitment" className="space-y-6">
          {/* Recruitment Funnel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recruitment Funnel</CardTitle>
                <CardDescription>Application to hire conversion pipeline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Applications Received</span>
                    <span className="text-sm font-bold">1,234</span>
                  </div>
                  <Progress value={100} className="h-4" />
                  <div className="text-xs text-muted-foreground text-right">100% baseline</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Initial Screening</span>
                    <span className="text-sm font-bold">456 (37%)</span>
                  </div>
                  <Progress value={37} className="h-4" />
                  <div className="text-xs text-muted-foreground text-right">37% pass rate</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Phone/Video Interviews</span>
                    <span className="text-sm font-bold">189 (41%)</span>
                  </div>
                  <Progress value={15} className="h-4" />
                  <div className="text-xs text-muted-foreground text-right">41% of screened</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Final Interviews</span>
                    <span className="text-sm font-bold">98 (52%)</span>
                  </div>
                  <Progress value={8} className="h-4" />
                  <div className="text-xs text-muted-foreground text-right">52% advance rate</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Offers Extended</span>
                    <span className="text-sm font-bold">86 (88%)</span>
                  </div>
                  <Progress value={7} className="h-4" />
                  <div className="text-xs text-muted-foreground text-right">88% offer rate</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Hires Completed</span>
                    <span className="text-sm font-bold text-green-600">75 (87%)</span>
                  </div>
                  <Progress value={6} className="h-4" />
                  <div className="text-xs text-muted-foreground text-right">87% acceptance rate</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Source Effectiveness</CardTitle>
                <CardDescription>Recruitment channel performance and ROI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Employee Referrals</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">73%</div>
                      <div className="text-xs text-muted-foreground">Quality score</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Job Boards</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">58%</div>
                      <div className="text-xs text-muted-foreground">Quality score</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium">Recruitment Agencies</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">45%</div>
                      <div className="text-xs text-muted-foreground">Quality score</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium">Social Media</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-orange-600">41%</div>
                      <div className="text-xs text-muted-foreground">Quality score</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm font-medium mb-2">Cost per Hire by Source:</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Employee Referrals</span>
                      <span className="font-semibold text-green-600">$2,100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Job Boards</span>
                      <span className="font-semibold">$3,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recruitment Agencies</span>
                      <span className="font-semibold text-red-600">$8,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Social Media</span>
                      <span className="font-semibold">$2,900</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recruitment Performance by Department */}
          <Card>
            <CardHeader>
              <CardTitle>Recruitment Performance by Department</CardTitle>
              <CardDescription>Hiring metrics across different business units</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Engineering</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Open Positions</span>
                      <span className="font-semibold">28</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Time-to-Hire</span>
                      <span className="font-semibold text-destructive">45 days</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Fill Rate</span>
                      <span className="font-semibold">68%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Sales</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Open Positions</span>
                      <span className="font-semibold">15</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Time-to-Hire</span>
                      <span className="font-semibold text-green-600">22 days</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Fill Rate</span>
                      <span className="font-semibold text-green-600">89%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Marketing</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Open Positions</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Time-to-Hire</span>
                      <span className="font-semibold">28 days</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Fill Rate</span>
                      <span className="font-semibold">75%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Operations</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Open Positions</span>
                      <span className="font-semibold">8</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Time-to-Hire</span>
                      <span className="font-semibold text-green-600">19 days</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Fill Rate</span>
                      <span className="font-semibold text-green-600">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="onboarding" className="space-y-6">
          {/* Onboarding Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Onboarding Completion Tracking</CardTitle>
                <CardDescription>New hire integration progress and milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Documentation Complete</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">96%</div>
                      <div className="text-xs text-muted-foreground">Within 3 days</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Training Modules</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">89%</div>
                      <div className="text-xs text-muted-foreground">Within 30 days</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium">Team Integration</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-yellow-600">78%</div>
                      <div className="text-xs text-muted-foreground">Within 45 days</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium">Performance Goals Set</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">85%</div>
                      <div className="text-xs text-muted-foreground">Within 60 days</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm font-medium mb-2">Overall Completion Rate:</div>
                  <div className="flex items-center gap-2">
                    <Progress value={89} className="flex-1 h-3" />
                    <span className="text-lg font-bold text-green-600">89%</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Average completion within 67 days</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>New Hire Experience</CardTitle>
                <CardDescription>Satisfaction scores and feedback analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">8.7/10</div>
                  <div className="text-sm font-medium">Overall Satisfaction Score</div>
                  <div className="text-xs text-muted-foreground">Based on 30-day feedback</div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-medium">Satisfaction Breakdown:</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Pre-boarding Communication</span>
                      <div className="flex items-center gap-2">
                        <Progress value={92} className="w-20 h-2" />
                        <span className="text-sm font-semibold">9.2/10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">First Day Experience</span>
                      <div className="flex items-center gap-2">
                        <Progress value={88} className="w-20 h-2" />
                        <span className="text-sm font-semibold">8.8/10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Training Quality</span>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="w-20 h-2" />
                        <span className="text-sm font-semibold">8.5/10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Manager Support</span>
                      <div className="flex items-center gap-2">
                        <Progress value={87} className="w-20 h-2" />
                        <span className="text-sm font-semibold">8.7/10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Resource Availability</span>
                      <div className="flex items-center gap-2">
                        <Progress value={82} className="w-20 h-2" />
                        <span className="text-sm font-semibold">8.2/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Onboarding Timeline Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Onboarding Timeline Analysis</CardTitle>
              <CardDescription>Time-to-productivity metrics and milestone tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">67 days</div>
                  <div className="text-sm font-medium mb-1">Average Time-to-Productivity</div>
                  <div className="text-xs text-muted-foreground">Target: 45 days</div>
                  <div className="mt-2">
                    <Badge variant="destructive" className="text-xs">
                      22 days over target
                    </Badge>
                  </div>
                </div>

                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">94%</div>
                  <div className="text-sm font-medium mb-1">90-Day Retention Rate</div>
                  <div className="text-xs text-muted-foreground">Industry avg: 89%</div>
                  <div className="mt-2">
                    <Badge variant="secondary" className="text-xs">
                      Above average
                    </Badge>
                  </div>
                </div>

                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">156</div>
                  <div className="text-sm font-medium mb-1">New Hires (Last 90 Days)</div>
                  <div className="text-xs text-muted-foreground">+23% vs previous quarter</div>
                  <div className="mt-2">
                    <Badge variant="secondary" className="text-xs">
                      Strong growth
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-sm font-medium mb-4">Onboarding Improvement Opportunities:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium">Process Optimization</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Reduce time-to-productivity by streamlining training modules and implementing mentorship programs
                    </div>
                  </div>
                  <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Technology Enhancement</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Implement digital onboarding platform to automate documentation and track progress
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
