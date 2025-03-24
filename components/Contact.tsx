"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Feel free to contact me for any project or collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-subheading">Contact Information</h3>
            <p className="text-foreground/70 mb-8">
              Feel free to reach out to me through any of the channels listed below. Whether you prefer a quick email, a
              direct call, or connecting through social media, I'm here to assist you. Your inquiries, feedback, or
              collaboration proposals are always welcome.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className="text-foreground/70">+91 8485009123</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-foreground/70">nakulmakode15@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-foreground/70">Nagpur, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-subheading">Send Me a Message</h3>
            <form action="https://formsubmit.co/48c49ac9f1fc3407bd0c6b5e06b32dda" method="POST" className="space-y-4">
              <div>
                <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
              </div>
              <div>
                <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
              </div>
              <div>
                <input type="text" name="subject" placeholder="Subject" className="contact-input" />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="contact-input resize-none"
                ></textarea>
              </div>

              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://nakulmak05.github.io/old_port/thank-you.html" />

              <Button type="submit" className="w-full rounded-md">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

