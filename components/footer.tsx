import { Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { GithubIcon, LinkedinIcon } from "@/components/social-icons"

const socials = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 font-mono text-xs font-semibold text-emerald-400">
            {profile.monogram}
          </span>
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-1">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={social.label}
              className="rounded-md p-2 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              <social.icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
