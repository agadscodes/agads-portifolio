import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <FadeIn>
          <TechStack />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  )
}
