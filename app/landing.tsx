/**
 * v0 by Vercel.
 * @see https://v0.dev/t/p3mgQpp498x
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 flex flex-col items-center gap-6">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tighter">Beautiful websites, built by you</h1>
          <p className="text-gray-500 dark:text-gray-400">
            The easiest way to build, deploy, and collaborate on web apps.
          </p>
        </div>
        <div className="w-full max-w-[400px] space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <Input placeholder="Enter your email" required type="email" />
            <Button className="w-full" type="submit">
              Sign up for early access
            </Button>
          </div>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Sign up to get notified when we launch. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  )
}

