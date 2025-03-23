"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl text-primary mb-2 font-medium">Hello, I'm</h3>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Nakul <br />
              <span className="gradient-text">Makode</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6">Software Engineer & ML Enthusiast</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-lg">
              I build exceptional digital experiences with modern technologies, focusing on creating intuitive and
              efficient solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex mt-8 gap-6 justify-center md:justify-start">
              <motion.a
                href="https://github.com/NAKULMAK05"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/nakul-makode15/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com/NakulMakode15"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
              <img
                src= "/profile.png" 
                alt="Nakul Makode"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

