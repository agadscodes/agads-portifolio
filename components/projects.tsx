import { ExternalLink } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { GithubIcon } from "@/components/social-icons"

export function Projects() {
  return (
    <section id="work" className="border-t border-zinc-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-pretty text-zinc-400">
            A selection of work where thoughtful engineering met clean design.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-800 bg-zinc-950">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} interface preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-xs font-medium text-zinc-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
