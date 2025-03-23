"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Railway Navigator",
    description:
      "A web-based system for efficient station navigation that cut navigation time by 30% and achieved 95% route accuracy.",
    details: [
      "Designed an interactive map for 100 stations with Leaflet.js, addressing navigation challenges and enhancing real-time usability.",
      "Integrated Google Geocoding and AR.js, providing real-time directions via mobile camera.",
      "Developed a search tool addressing user navigation challenges, achieving routing under 3 seconds and boosting efficiency by 25%.",
    ],
    technologies: ["JavaScript", "Leaflet.js", "Google Geocoding API", "AR.js", "HTML/CSS"],
    github: "https://github.com/NAKULMAK05/Railway-Navigator",
    live: "#",
  },
  {
    title: "Face Recognition System",
    description:
      "A robust real-time face recognition system with 90% precision using CNN and MTCNN for face detection.",
    details: [
      "Achieved 5 simultaneous recognitions with high accuracy using MTCNN for face detection.",
      "Implemented a scalable SQLite3 database for managing user records with 60% improved retrieval efficiency.",
      "Developed a Streamlit UI that achieved 100 new registrations and boosted user engagement.",
      "Enhanced face recognition accuracy by 70% in low-light conditions through ML model optimization.",
    ],
    technologies: ["Python", "CNN", "MTCNN", "SQLite3", "Streamlit", "OpenCV"],
    github: "https://github.com/NAKULMAK05/Face-Recognition-System",
    live: "#",
  },
  {
    title: "Event Management System",
    description: "A comprehensive system for managing events, registrations, and attendee tracking.",
    details: [
      "Developed a full-stack application for event creation, registration, and management.",
      "Implemented user authentication and role-based access control for organizers and attendees.",
      "Created a dashboard for real-time analytics and reporting on event performance.",
      "Integrated payment processing for ticket sales and registration fees.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe API"],
    github: "https://github.com/NAKULMAK05/Event-Management-System",
    live: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">My Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-primary mb-2">
                  Key Features:
                </h4>
                <ul className="text-sm text-foreground/70 space-y-1 ml-4">
                  {project.details.map((detail, i) => (
                    <li key={i} className="list-disc list-outside">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-primary mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-auto">
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
