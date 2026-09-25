import { techStack } from "@/lib/portfolio-data"
import { TechIcon } from "@/components/tech-icons"

export function TechStack() {
  return (
    <section id="stack" className="border-t border-zinc-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-pretty text-zinc-400">
            The tools I reach for every day to ship reliable, maintainable, and
            performant web applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-white">
                      <TechIcon
                        name={item.icon}
                        className="h-4 w-4 text-zinc-400"
                      />
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
