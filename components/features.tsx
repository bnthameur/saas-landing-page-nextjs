import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Zap, Shield, Palette, Globe, Rocket } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Modern Development",
    description: "Built with Next.js 14, TypeScript, and the latest web technologies for optimal performance.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with server-side rendering, edge functions, and intelligent caching.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with authentication, authorization, and data encryption built-in.",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Carefully crafted UI components with dark mode support and accessibility in mind.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with edge computing and CDN integration for maximum performance.",
  },
  {
    icon: Rocket,
    title: "Deploy Anywhere",
    description: "One-click deployment to Vercel, Netlify, or any cloud provider with Docker support.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to build modern applications
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit designed for developers who want to ship fast without compromising on quality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/40 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
