"use client"

import { motion } from "framer-motion"
import { FaCode, FaPaintBrush, FaMobileAlt, FaShoppingCart, FaCloud } from "react-icons/fa"

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "I have an in-depth knowledge in development of websites, including front-end and back-end development, responsive design, and optimization for performance and user experience.",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description:
      "I can help with designing user interfaces and experiences, ensuring that websites and applications are visually appealing, intuitive to use, and optimized for user engagement.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "I provide service related to developing mobile applications for Android platforms, development using frameworks like React Native and Flutter.",
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Solutions",
    description:
      "I provide service for creating e-commerce websites or integrating e-commerce functionality into existing platforms, including online stores, payment gateways, and inventory management systems.",
  },
  {
    icon: FaCode,
    title: "Custom Software Development",
    description:
      "I provide service for developing custom software solutions to tailor specific needs and requirements of clients. This involves designing and building web applications, mobile apps.",
  },
  {
    icon: FaCloud,
    title: "Cloud Migration and Integration",
    description:
      "I offer service to help businesses migrate their existing applications and infrastructure to the cloud. This could involve assessing their current setup, planning and implementing solutions on cloud platforms like AWS or Google Cloud.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-2">My Services</h2>
          <p className="text-xl text-gray-300">What I can do for you</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <service.icon className="text-4xl text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

