"use client"

import { motion } from "framer-motion"
import { Award, Code, Github, Target } from "lucide-react"

const achievements = [
  {
    icon: Code,
    title: "LeetCode Problem Solving",
    description: "Enhanced coding skills by tackling 300+ LeetCode problems, achieving a rating of 1500+.",
  },
  {
    icon: Target,
    title: "CodeChef Ranking",
    description:
      "Secured a global rank of 118 on CodeChef by overcoming challenges and maintaining a 300-day coding streak to boost skills.",
  },
  {
    icon: Github,
    title: "GitHub Contributions",
    description: "Improved collaboration and project visibility by making more than 250 contributions on GitHub.",
  },
  {
    icon: Award,
    title: "GenAI Hackathon Finalist",
    description:
      "Secured finalist position in GenAI hackathon organized by Level Supermind, overcoming intense competition with innovative AI solutions.",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Achievements</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Recognitions and milestones in my professional journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm text-center card-hover"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <achievement.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-foreground/70">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

