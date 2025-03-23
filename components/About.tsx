"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="section-subheading">Who am I?</h3>
            <p className="text-foreground/70 mb-4">
              I am currently a Software Engineering student from Ramdeobaba University (RBU). My core expertise lies in
              front-end development, encompassing HTML, CSS, JavaScript, and React. I possess a deep understanding of
              UI/UX design principles, ensuring that the solutions I create not only function seamlessly but also offer
              an exceptional user experience.
            </p>
            <p className="text-foreground/70 mb-6">
              My programming skills encompass a diverse set of languages, including C, C++, Python, Java, and more. This
              versatile skill set equips me to tackle a variety of software development challenges and craft robust,
              efficient, and user-friendly applications.
            </p>
            <p className="text-foreground/70 mb-6">
              I am passionate about solving real-world problems through technology and continuously expanding my
              knowledge in emerging tech trends, particularly in machine learning and artificial intelligence.
            </p>
            <Button asChild className="rounded-full">
              <a href="/nakul_res.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="section-subheading">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-primary mb-1">Birthday</h4>
                <p className="text-foreground/70">May 15, 2004</p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-primary mb-1">Education</h4>
                <p className="text-foreground/70">B.Tech in CSE (2022-2026)</p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-primary mb-1">Email</h4>
                <p className="text-foreground/70">nakulmakode15@gmail.com</p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-primary mb-1">Phone</h4>
                <p className="text-foreground/70">+91 8485009123</p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-primary mb-1">Location</h4>
                <p className="text-foreground/70">Nagpur, Maharashtra</p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-primary mb-1">Freelance</h4>
                <p className="text-foreground/70">Available</p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-primary mb-1">Languages</h4>
                <p className="text-foreground/70">English, Hindi</p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-medium text-primary mb-1">Interests</h4>
                <p className="text-foreground/70">Coding, AI/ML, Problem Solving</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

