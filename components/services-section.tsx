import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BarChart3, Globe, Shield, TrendingUp, Settings, Heart, Target } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Global Workforce Management",
    description:
      "Comprehensive workforce tracking across 4,250+ employees with real-time mobility insights and attrition analysis.",
    features: ["Interactive headcount mapping", "Subsidiary breakdown analytics", "Mobility trend tracking"],
  },
  {
    icon: Users,
    title: "Employee Lifecycle Navigator",
    description: "End-to-end employee journey management from recruitment to exit with performance optimization.",
    features: ["Recruitment funnel analytics", "Onboarding automation", "Performance tracking"],
  },
  {
    icon: TrendingUp,
    title: "Performance & Development",
    description: "Advanced performance tracking with engagement metrics and leadership accountability systems.",
    features: ["360° feedback systems", "HiPo talent identification", "Learning & growth analytics"],
  },
  {
    icon: BarChart3,
    title: "Compensation & Rewards",
    description: "Comprehensive compensation analysis with pay equity monitoring and reward optimization.",
    features: ["Salary band management", "Pay equity analysis", "Reward mix optimization"],
  },
  {
    icon: Settings,
    title: "HR Systems Automation",
    description: "Streamlined HR operations with automation tools and compliance management systems.",
    features: ["Process automation", "Compliance monitoring", "ROI tracking"],
  },
  {
    icon: Heart,
    title: "Culture & ESG Integration",
    description: "Culture integration tracking with ESG metrics and diversity & inclusion analytics.",
    features: ["Culture integration index", "DEI metrics tracking", "ESG scorecard"],
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    description: "Comprehensive risk management with compliance tracking and grievance resolution systems.",
    features: ["Compliance risk assessment", "Grievance management", "Audit trail systems"],
  },
  {
    icon: Target,
    title: "Strategic Analytics",
    description: "Advanced analytics and predictive insights for strategic HR decision making.",
    features: ["Predictive analytics", "Strategic planning tools", "Executive reporting"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">Comprehensive HR Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your HR operations with our integrated suite of tools designed for modern enterprises managing
            global workforces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg font-sans font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
