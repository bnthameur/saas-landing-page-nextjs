import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to build something amazing?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already using our tools to build the next generation of web
            applications.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base" asChild>
              <Link href="/dashboard">
                Start Building Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">Free forever • Open source • No credit card required</p>
        </div>
      </div>
    </section>
  )
}
