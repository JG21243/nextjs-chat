// app/landing/page.tsx

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle, Zap, Shield } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MessageCircle className="size-6 mr-2" />
          <span className="font-bold">AI Chatbot</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Experience the Future of Conversation
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Engage with our AI-powered chatbot for intelligent, responsive, and personalized interactions.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/chat">
                  <Button>
                    Get Started
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="size-10" />
                <h2 className="text-xl font-bold">Lightning Fast</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Powered by Next.js and Vercel for optimal performance and speed.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <MessageCircle className="size-10" />
                <h2 className="text-xl font-bold">Intelligent Conversations</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Leveraging OpenAI&apos;s GPT models for natural and context-aware interactions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Shield className="size-10" />
                <h2 className="text-xl font-bold">Secure & Scalable</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Built with NextAuth.js and Vercel KV for robust authentication and data storage.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Chatbot. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
