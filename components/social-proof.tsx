import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function SocialProof() {
  const avatars = [
    { src: "/placeholder.svg?height=40&width=40", fallback: "JD" },
    { src: "/placeholder.svg?height=40&width=40", fallback: "AS" },
    { src: "/placeholder.svg?height=40&width=40", fallback: "MK" },
    { src: "/placeholder.svg?height=40&width=40", fallback: "LR" },
    { src: "/placeholder.svg?height=40&width=40", fallback: "TC" },
  ]

  return (
    <section className="py-12 border-b border-border/40">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <Avatar key={index} className="border-2 border-background">
                  <AvatarImage src={avatar.src || "/placeholder.svg"} />
                  <AvatarFallback>{avatar.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Join 10,000+ developers</span> who are already building
            amazing things
          </p>

          {/* Brand logos */}
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 opacity-60">
            {["GitHub", "Vercel", "Supabase", "Stripe", "Tailwind", "Next.js"].map((brand) => (
              <div key={brand} className="flex items-center justify-center">
                <span className="text-sm font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
