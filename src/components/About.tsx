import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaTrophy } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
          <div className="w-12 h-1 bg-blue-500 rounded mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-6"></div>
              
              {/* Profile Image */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  {/* Replace with your actual image */}
                  <span className="text-gray-600 text-lg">Profile Photo</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Al-Fraskhan A. Jose</h3>
            <p className="text-secondary mb-6">
              As a committed IT student, I can't wait to use my abilities and expertise in a stimulating workplace. 
              I have a strong desire to learn, am flexible enough to take on new challenges, and promise to keep going 
              until my objectives are met. I look for chances to develop and make a significant contribution to the team's success.
            </p>

            {/* Personal Information */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-500 mr-3" />
                <span className="text-secondary">Kasanyangan, Zamboanga City</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-500 mr-3" />
                <span className="text-secondary">09650348702</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3" />
                <span className="text-secondary">alfraskhanj@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="text-blue-500 mr-3" />
                <span className="text-secondary">alfraskhan-jose-22b6b6358</span>
              </div>
            </div>

            {/* Fun Facts */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Fun Facts</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaTrophy className="text-yellow-500 mr-3" />
                  <span className="text-secondary">Champion – Chess Competition, Palaro SY 2023–2024</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-500 rounded-full mr-3">
                    <span className="font-bold text-white">ED</span>
                  </div>
                  <span className="text-secondary">Executive Director of Zamboanga Youth Movement Association (SPORTS)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 