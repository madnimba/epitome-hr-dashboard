"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Award,
  TrendingUp,
  Users,
  Target,
  Clock,
  GraduationCap,
  Briefcase,
  Brain,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"

export function LearningDevelopmentPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-3xl font-sans font-bold text-foreground">Learning & Development</h1>
          <p className="text-muted-foreground mt-1">Employee growth, skills development, and career advancement</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <Badge variant="outline" className="text-sm">
            Last updated: 45 minutes ago
          </Badge>
          <Button size="sm">Generate L&D Report</Button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Training Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive">Target: 50 hrs/employee</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certifications</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">156</div>
            <p className="text-xs text-muted-foreground">Completed this quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upskilling Coverage</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">Of total workforce</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">L&D Investment</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.8M</div>
            <p className="text-xs text-muted-foreground">Annual L&D budget</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="training-overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="training-overview">Training Overview</TabsTrigger>
          <TabsTrigger value="skills-development">Skills Development</TabsTrigger>
          <TabsTrigger value="career-paths">Career Paths</TabsTrigger>
        </TabsList>

        <TabsContent value="training-overview" className="space-y-6">
          {/* Training Participation by Department */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Training Participation by Department
                </CardTitle>
                <CardDescription>Employee engagement with learning programs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium">Engineering</span>
                      <div className="text-xs text-muted-foreground">1,200 employees</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">78%</div>
                      <div className="text-xs text-muted-foreground">Participation</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium">Marketing</span>
                      <div className="text-xs text-muted-foreground">450 employees</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">72%</div>
                      <div className="text-xs text-muted-foreground">Participation</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium">Sales</span>
                      <div className="text-xs text-muted-foreground">680 employees</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">65%</div>
                      <div className="text-xs text-muted-foreground">Participation</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium">Operations</span>
                      <div className="text-xs text-muted-foreground">520 employees</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-yellow-600">58%</div>
                      <div className="text-xs text-muted-foreground">Participation</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm font-medium mb-2">Training Hours Distribution:</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Technical Skills</span>
                      <span className="font-semibold">18 hrs avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Leadership Development</span>
                      <span className="font-semibold">12 hrs avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Compliance Training</span>
                      <span className="font-semibold">8 hrs avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Soft Skills</span>
                      <span className="font-semibold">4 hrs avg</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certification Progress
                </CardTitle>
                <CardDescription>Professional certifications and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
                  <div className="text-sm font-medium">Certifications Completed</div>
                  <div className="text-xs text-muted-foreground">This quarter</div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-medium">Popular Certifications:</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">AWS Cloud Practitioner</span>
                      <div className="flex items-center gap-2">
                        <Progress value={75} className="w-20 h-2" />
                        <span className="text-sm font-semibold">45</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Google Analytics</span>
                      <div className="flex items-center gap-2">
                        <Progress value={60} className="w-20 h-2" />
                        <span className="text-sm font-semibold">32</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Project Management</span>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="w-20 h-2" />
                        <span className="text-sm font-semibold">28</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Salesforce Admin</span>
                      <div className="flex items-center gap-2">
                        <Progress value={35} className="w-20 h-2" />
                        <span className="text-sm font-semibold">21</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span>Certification ROI:</span>
                    <span className="font-semibold text-green-600">285%</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Based on productivity gains and retention</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Program Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Learning Program Performance</CardTitle>
              <CardDescription>Effectiveness and engagement metrics for training programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Technical Training</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Completion Rate</span>
                      <span className="font-semibold text-green-600">89%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Satisfaction Score</span>
                      <span className="font-semibold">4.6/5</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Knowledge Retention</span>
                      <span className="font-semibold">82%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Leadership Development</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Completion Rate</span>
                      <span className="font-semibold text-green-600">94%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Satisfaction Score</span>
                      <span className="font-semibold">4.8/5</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Knowledge Retention</span>
                      <span className="font-semibold">87%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Compliance Training</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Completion Rate</span>
                      <span className="font-semibold text-green-600">98%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Satisfaction Score</span>
                      <span className="font-semibold">3.9/5</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Knowledge Retention</span>
                      <span className="font-semibold">75%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Soft Skills</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Completion Rate</span>
                      <span className="font-semibold">76%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Satisfaction Score</span>
                      <span className="font-semibold">4.4/5</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Knowledge Retention</span>
                      <span className="font-semibold">79%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills-development" className="space-y-6">
          {/* Skills Gap Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Skills Gap Analysis
                </CardTitle>
                <CardDescription>Critical skill gaps and development priorities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-medium text-red-700">Critical Gap</span>
                    </div>
                    <div className="text-sm font-medium mb-1">AI/Machine Learning</div>
                    <div className="text-xs text-muted-foreground mb-2">
                      Only 23% of engineers have required ML skills
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Current Proficiency:</span>
                      <span className="font-semibold text-red-600">23%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Target Proficiency:</span>
                      <span className="font-semibold">75%</span>
                    </div>
                  </div>

                  <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-700">Moderate Gap</span>
                    </div>
                    <div className="text-sm font-medium mb-1">Cloud Architecture</div>
                    <div className="text-xs text-muted-foreground mb-2">58% proficiency across technical teams</div>
                    <div className="flex justify-between text-xs">
                      <span>Current Proficiency:</span>
                      <span className="font-semibold text-yellow-600">58%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Target Proficiency:</span>
                      <span className="font-semibold">80%</span>
                    </div>
                  </div>

                  <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">On Track</span>
                    </div>
                    <div className="text-sm font-medium mb-1">Data Analytics</div>
                    <div className="text-xs text-muted-foreground mb-2">Strong proficiency across business teams</div>
                    <div className="flex justify-between text-xs">
                      <span>Current Proficiency:</span>
                      <span className="font-semibold text-green-600">82%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Target Proficiency:</span>
                      <span className="font-semibold">85%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Emerging Skills Development
                </CardTitle>
                <CardDescription>Investment in future-ready capabilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium">Artificial Intelligence</span>
                      <div className="text-xs text-muted-foreground">285 employees enrolled</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">67%</div>
                      <div className="text-xs text-muted-foreground">Progress</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium">Cybersecurity</span>
                      <div className="text-xs text-muted-foreground">198 employees enrolled</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">73%</div>
                      <div className="text-xs text-muted-foreground">Progress</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium">Blockchain Technology</span>
                      <div className="text-xs text-muted-foreground">124 employees enrolled</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">45%</div>
                      <div className="text-xs text-muted-foreground">Progress</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium">Sustainability & ESG</span>
                      <div className="text-xs text-muted-foreground">342 employees enrolled</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-orange-600">89%</div>
                      <div className="text-xs text-muted-foreground">Progress</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm font-medium mb-2">Investment Allocation:</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>AI/ML Training</span>
                      <span className="font-semibold">$680K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cloud Certifications</span>
                      <span className="font-semibold">$420K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Leadership Programs</span>
                      <span className="font-semibold">$350K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Other Skills</span>
                      <span className="font-semibold">$290K</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning ROI Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Learning ROI Analysis</CardTitle>
              <CardDescription>Return on investment for learning and development programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">285%</div>
                  <div className="text-sm font-medium mb-1">Overall L&D ROI</div>
                  <div className="text-xs text-muted-foreground">Based on productivity and retention gains</div>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$4.2M</div>
                  <div className="text-sm font-medium mb-1">Productivity Gains</div>
                  <div className="text-xs text-muted-foreground">Annual value from skill improvements</div>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$1.8M</div>
                  <div className="text-sm font-medium mb-1">Retention Savings</div>
                  <div className="text-xs text-muted-foreground">Reduced turnover from development programs</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="career-paths" className="space-y-6">
          {/* Career Development Programs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Career Development Programs
                </CardTitle>
                <CardDescription>Structured pathways for employee advancement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Leadership Pipeline</span>
                      <Badge variant="secondary">89 participants</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      18-month program for high-potential managers
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Completion Rate:</span>
                        <span className="font-semibold text-green-600">94%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Promotion Rate:</span>
                        <span className="font-semibold text-green-600">78%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Technical Excellence Track</span>
                      <Badge variant="secondary">156 participants</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      Advanced technical skills for senior engineers
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Completion Rate:</span>
                        <span className="font-semibold text-green-600">87%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Promotion Rate:</span>
                        <span className="font-semibold text-green-600">65%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Sales Mastery Program</span>
                      <Badge variant="secondary">67 participants</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      Advanced sales techniques and account management
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Completion Rate:</span>
                        <span className="font-semibold text-green-600">91%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Performance Improvement:</span>
                        <span className="font-semibold text-green-600">+23%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Internal Mobility Success
                </CardTitle>
                <CardDescription>Career advancement and role transitions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">34%</div>
                  <div className="text-sm font-medium">Internal Fill Rate</div>
                  <div className="text-xs text-muted-foreground">Positions filled internally</div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-medium">Recent Internal Moves:</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Promotions</span>
                      <div className="flex items-center gap-2">
                        <Progress value={75} className="w-20 h-2" />
                        <span className="text-sm font-semibold">89</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Lateral Moves</span>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="w-20 h-2" />
                        <span className="text-sm font-semibold">67</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Cross-Department</span>
                      <div className="flex items-center gap-2">
                        <Progress value={25} className="w-20 h-2" />
                        <span className="text-sm font-semibold">34</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">International Assignments</span>
                      <div className="flex items-center gap-2">
                        <Progress value={15} className="w-20 h-2" />
                        <span className="text-sm font-semibold">23</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm font-medium mb-2">Success Metrics:</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>90-Day Success Rate:</span>
                      <span className="font-semibold text-green-600">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Employee Satisfaction:</span>
                      <span className="font-semibold">8.4/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Manager Satisfaction:</span>
                      <span className="font-semibold">8.1/10</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mentorship and Coaching */}
          <Card>
            <CardHeader>
              <CardTitle>Mentorship and Coaching Programs</CardTitle>
              <CardDescription>Peer learning and professional guidance initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Formal Mentorship</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Active Pairs</span>
                      <span className="font-semibold">234</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Satisfaction Score</span>
                      <span className="font-semibold text-green-600">4.7/5</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Completion Rate</span>
                      <span className="font-semibold">89%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Executive Coaching</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Active Participants</span>
                      <span className="font-semibold">45</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Goal Achievement</span>
                      <span className="font-semibold text-green-600">87%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>ROI</span>
                      <span className="font-semibold text-green-600">420%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Peer Learning Groups</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Active Groups</span>
                      <span className="font-semibold">28</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Participants</span>
                      <span className="font-semibold">312</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Engagement Rate</span>
                      <span className="font-semibold">76%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Reverse Mentoring</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Active Pairs</span>
                      <span className="font-semibold">67</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Focus Areas</span>
                      <span className="font-semibold">Tech, Digital</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Success Rate</span>
                      <span className="font-semibold text-green-600">91%</span>
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
