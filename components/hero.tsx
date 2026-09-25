import { ArrowUpRight, Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.zinc.800)_1px,transparent_0)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </span>

        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {profile.role}
          <span className="block text-zinc-500">crafting the modern web.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400">
          I&apos;m {profile.name}, a front-end developer specializing in fast,
          accessible interfaces built with React, TypeScript, and Tailwind CSS.
          I turn complex problems into clean, delightful user experiences.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            View Work
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
