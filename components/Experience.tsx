"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Work Experience</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">My professional journey and experiences</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Machine Learning Intern</h3>
                <span className="text-sm text-foreground/60 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> Oct 2024 - Dec 2024
                </span>
              </div>
              <h4 className="text-lg text-primary mb-4 flex items-center">
                <Briefcase className="h-4 w-4 mr-2" /> Infosys Springboard
              </h4>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Engineered a robust real-time face recognition system to address accuracy challenges, attaining 90%
                    precision using CNN.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Enhanced user experience by integrating MTCNN for face detection, achieving 5 simultaneous
                    recognitions with high accuracy.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Streamlined a scalable SQLite3 database, addressing the challenge of managing 100 user records while
                    enhancing retrieval efficiency by 60%.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Addressed low user engagement by developing a Streamlit UI, achieving 100 new registrations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Boosted face recognition accuracy by 70% in low-light conditions through ML model development.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

