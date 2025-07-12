import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer at Stripe",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "This toolkit has completely transformed how we build and deploy applications. The developer experience is unmatched.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO at TechFlow",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Finally, a development suite that doesn't compromise on performance or developer happiness. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Full Stack Engineer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The attention to detail and thoughtful architecture makes this a joy to work with. Our team productivity has increased 3x.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Loved by developers worldwide</h2>
          <p className="text-lg text-muted-foreground">
            See what developers are saying about their experience with our tools.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/40">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm mb-4">"{testimonial.content}"</blockquote>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
