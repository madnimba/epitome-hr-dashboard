import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target, Users, Zap } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Chief HR Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading HR transformation with 15+ years in global workforce management.",
  },
  {
    name: "Marcus Rodriguez",
    role: "VP of People Analytics",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Data-driven HR insights specialist with expertise in predictive analytics.",
  },
  {
    name: "Dr. Priya Patel",
    role: "Director of Organizational Development",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Organizational psychology expert focused on culture and engagement.",
  },
  {
    name: "James Thompson",
    role: "Head of HR Technology",
    image: "/placeholder.svg?height=300&width=300",
    bio: "HR tech innovator specializing in automation and digital transformation.",
  },
]

const values = [
  {
    icon: Target,
    title: "Strategic Focus",
    description: "Aligning HR initiatives with business objectives for maximum impact.",
  },
  {
    icon: Users,
    title: "People-Centric",
    description: "Putting employees at the center of everything we do.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging cutting-edge technology to solve HR challenges.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering exceptional results through continuous improvement.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                About FutureTech
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-6">
                Transforming HR Through Innovation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                FutureTech is a leading provider of comprehensive HR solutions, specializing in unified executive
                dashboards and workforce management systems for global enterprises. We serve organizations managing
                complex, multi-subsidiary operations with thousands of employees.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform integrates workforce analytics, performance management, compensation optimization, and
                cultural transformation tools to deliver measurable business impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-sans font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-sans font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-sans font-bold text-accent mb-2">2M+</div>
                <div className="text-muted-foreground">Employees Managed</div>
              </div>
              <div>
                <div className="text-3xl font-sans font-bold text-accent mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="FutureTech team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-sans font-bold text-foreground text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border hover:border-accent/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-sans font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-sans font-bold text-foreground text-center mb-12">Meet Our Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-lg font-sans font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
