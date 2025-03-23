import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold gradient-text">
              NM
            </Link>
            <p className="mt-2 text-foreground/70 max-w-md">
              Software Engineer specializing in web development, machine learning, and UI/UX design.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/NAKULMAK05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nakul-makode15/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/NakulMakode15"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} Nakul Makode. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

