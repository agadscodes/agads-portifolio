import { FileText } from "lucide-react"
import { navLinks, profile } from "@/lib/portfolio-data"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2"
          aria-label={`${profile.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 font-mono text-sm font-semibold text-emerald-400 transition-colors group-hover:border-emerald-500/60">
            {profile.monogram}
          </span>
          <span className="hidden text-sm font-medium text-zinc-300 sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-500/60 hover:text-white"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Resume
        </a>
      </nav>
    </header>
  )
}
