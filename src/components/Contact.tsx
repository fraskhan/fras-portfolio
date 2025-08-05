import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

// Form validation schema using zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { isDarkMode } = useAppContext();
  
  // React Hook Form setup with zod validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  // Social links
  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      label: 'GitHub',
      url: 'https://github.com/alfraskhanj',
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/alfraskhan-jose-22b6b6358',
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      label: 'Email',
      url: 'mailto:alfraskhanj@gmail.com',
    },
  ];

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-primary' : 'bg-primary-light'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Get In Touch</h2>
          <div className={`w-12 h-1 rounded mx-auto ${
            isDarkMode ? 'bg-accent' : 'bg-accent-light'
          }`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${
            isDarkMode ? 'text-secondary' : 'text-gray-600'
          }`}>
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me through this form or directly via email!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-xl p-8 ${
              isDarkMode ? 'bg-black-100' : 'bg-white'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${
                  isDarkMode 
                    ? 'bg-accent/20 text-accent'
                    : 'bg-accent-light/20 text-accent-light'
                }`}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>Location</h4>
                  <p className={isDarkMode ? 'text-secondary' : 'text-gray-600'}>Kasanyangan, Zamboanga City</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${
                  isDarkMode 
                    ? 'bg-accent/20 text-accent'
                    : 'bg-accent-light/20 text-accent-light'
                }`}>
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>Email Address</h4>
                  <a href="mailto:alfraskhanj@gmail.com" className={`transition-colors ${
                    isDarkMode ? 'text-secondary hover:text-accent' : 'text-gray-600 hover:text-accent-light'
                  }`}>
                    alfraskhanj@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${
                  isDarkMode 
                    ? 'bg-accent/20 text-accent'
                    : 'bg-accent-light/20 text-accent-light'
                }`}>
                  <FaPhone />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>Phone Number</h4>
                  <a href="tel:09650348702" className={`transition-colors ${
                    isDarkMode ? 'text-secondary hover:text-accent' : 'text-gray-600 hover:text-accent-light'
                  }`}>
                    09650348702
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-10">
              <h4 className={`text-xl font-medium mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full text-white transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-black-200 hover:bg-accent'
                        : 'bg-gray-200 hover:bg-accent-light text-gray-800 hover:text-white'
                    }`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-xl p-8 ${
              isDarkMode ? 'bg-black-100' : 'bg-white'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Send a Message</h3>
            
            {isSubmitSuccessful ? (
              <div className="bg-green-800/20 border border-green-600/30 rounded-lg p-4 text-center">
                <p className="text-green-400 font-medium">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 ${
                    isDarkMode ? 'text-secondary' : 'text-gray-700'
                  }`}>
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                      isDarkMode 
                        ? `bg-black-200 text-white focus:ring-accent ${errors.name ? 'border-red-500' : 'border-gray-700'}`
                        : `bg-gray-100 text-gray-900 focus:ring-accent-light ${errors.name ? 'border-red-500' : 'border-gray-300'}`
                    }`}
                    placeholder="John Doe"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className={`block mb-2 ${
                    isDarkMode ? 'text-secondary' : 'text-gray-700'
                  }`}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                      isDarkMode 
                        ? `bg-black-200 text-white focus:ring-accent ${errors.email ? 'border-red-500' : 'border-gray-700'}`
                        : `bg-gray-100 text-gray-900 focus:ring-accent-light ${errors.email ? 'border-red-500' : 'border-gray-300'}`
                    }`}
                    placeholder="your.email@example.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className={`block mb-2 ${
                    isDarkMode ? 'text-secondary' : 'text-gray-700'
                  }`}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                      isDarkMode 
                        ? `bg-black-200 text-white focus:ring-accent ${errors.message ? 'border-red-500' : 'border-gray-700'}`
                        : `bg-gray-100 text-gray-900 focus:ring-accent-light ${errors.message ? 'border-red-500' : 'border-gray-300'}`
                    }`}
                    placeholder="I'd like to discuss a project..."
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center text-white ${
                    isDarkMode 
                      ? 'bg-accent hover:bg-accent/80'
                      : 'bg-accent-light hover:bg-accent-light/80'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 