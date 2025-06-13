import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4">Sourasanta Dutta</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">Developer & Designer</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/iamsoura005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sourasanta-dutta-852345282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I'm Sourasanta Dutta — a passionate web developer with a keen interest in machine learning and UI/UX design. 
            I love combining technology and creativity to build user-friendly, impactful digital solutions. 
            Beyond coding, content creation is my way of telling stories and sharing ideas with the world.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Frontend Development</li>
                  <li>UI/UX Design</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>AI Concepts</li>
                  <li>Deep Learning</li>
                  <li>Computer Vision</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Experience & Achievements</h2>
            <div className="space-y-8">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Runner-up — HackingFlix Website UI Competition</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designed and developed an innovative, user-friendly interface that stood out for creativity and usability.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Finalist — CADC Delhi Visionary Hackathon</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Selected for Visionary AI: Hacking Blindness Before It Begins, a project focused on using AI to detect potential blindness at an early stage.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Prediction of Glaucoma by Fundus Image using CNN</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed a deep learning model to detect glaucoma from fundus images using Convolutional Neural Networks.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Fake News Detection</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Created a machine learning model to identify and classify fake news articles with high accuracy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <a
              href="mailto:sourasantadutta@gmail.com"
              className="inline-block px-8 py-3 bg-accent text-white rounded-full hover:bg-opacity-90 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 