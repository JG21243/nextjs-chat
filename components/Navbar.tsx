import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          NextJS Chat
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/chat" className="text-white hover:text-gray-300">
            Chat
          </Link>
          <Link href="/legal-prompt-library" className="text-white hover:text-gray-300">
            Legal Prompt Library
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
