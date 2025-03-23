"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["C++", "C", "Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React.js", "Express.js", "Node.js", "Next.js", "TensorFlow", "Keras", "PyTorch"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite", "PostgreSQL"],
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Firebase", "Vercel"],
  },
  {
    name: "Core Competencies",
    skills: [
      "Database Management",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
      "UI/UX Design",
      "Data Structures & Algorithms",
    ],
  },
]

const technicalSkills = [
  { name: "HTML/CSS", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 75 },
  { name: "Python", level: 70 },
  { name: "Machine Learning", level: 65 },
  { name: "Database Management", level: 75 },
  { name: "UI/UX Design", level: 85 },
  { name: "Operating Systems", level: 65 },
  { name: "Data Structures", level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">My Skills</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Technologies and skills I've worked with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-subheading"
            >
              Technical Proficiency
            </motion.h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-foreground/90 font-medium">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full bg-primary rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-subheading"
            >
              Skill Categories
            </motion.h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-4 shadow-sm"
                >
                  <h4 className="text-lg font-medium text-primary mb-3">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

