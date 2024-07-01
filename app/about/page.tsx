// app/about/page.tsx

import Link from "next/link"

export default function AboutPage() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container flex flex-col items-center space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Lexi – Your AI Legal Assistant</h1>
          <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Empowering legal professionals with AI-driven insights and automation. Spend less time on research and more
            time winning cases.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/new"
          >
            Try the Assistant
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
