import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

// Form validation schema using zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
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
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="w-12 h-1 bg-blue-500 rounded mx-auto"></div>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
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
            className="bg-black-100 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-500 mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-secondary">Kasanyangan, Zamboanga City</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-500 mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Address</h4>
                  <a href="mailto:alfraskhanj@gmail.com" className="text-secondary hover:text-blue-400 transition-colors">
                    alfraskhanj@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-500 mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone Number</h4>
                  <a href="tel:09650348702" className="text-secondary hover:text-blue-400 transition-colors">
                    09650348702
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-10">
              <h4 className="text-xl font-medium text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black-200 hover:bg-blue-600 p-3 rounded-full text-white transition-colors duration-300"
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
            className="bg-black-100 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            {isSubmitSuccessful ? (
              <div className="bg-green-800/20 border border-green-600/30 rounded-lg p-4 text-center">
                <p className="text-green-400 font-medium">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full bg-tertiary border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    placeholder="John Doe"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full bg-tertiary border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    placeholder="your.email@example.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-secondary mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className={`w-full bg-tertiary border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600`}
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
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