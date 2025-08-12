import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <User className="w-6 h-6 text-blue-600" />
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl font-bold text-slate-900 mb-4">
            About Me
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-600 max-w-2xl mx-auto">
            Hi! I'm a passionate and curious developer currently pursuing a BBA at Premier University, Chittagong. 
            My journey into programming started from a simple curiosity about how websites and apps work, 
            and over time, it turned into a deep love for creating functional, beautiful, and scalable web applications. 
            I enjoy working on both frontend and backend, but I especially love crafting smooth user experiences.
            Outside of coding, I’m into reading, football, and exploring new technologies. 
            I’m driven by the belief that technology can make everyday life simpler and more enjoyable.
          </motion.p>
        </motion.div>

        {/* About Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Creating digital solutions that make a difference
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              My work focuses on building clean, user-friendly, and efficient web applications. 
              I love challenges that push me to learn something new, whether it's a new framework, 
              an advanced API integration, or optimizing performance for large-scale applications.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              When I’m not coding, you might find me reading non-fiction books, 
              enjoying football matches, or exploring graphic design as a creative outlet.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-slate-600">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-slate-600">Years Coding Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              whileHover={{ rotate: 3 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl transform rotate-6"
            ></motion.div>
            <img
              src="https://i.ibb.co.com/YFyz62px/saas-concept-collage.jpg"
              alt="Working"
              className="relative rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* My Journey Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-900 mb-8 text-center">
            My Journey
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: 'The Beginning',
                  content:
                    'Back in my college days at BAF Shaheen College,Chittagong (Humanities), I was always curious about technology despite studying arts. I started learning basic HTML and CSS from free resources, just to see how websites worked.',
                },
                {
                  title: 'University & Growth',
                  content:
                    'When I joined Premier University for my BBA, I started taking programming seriously. I explored JavaScript, React, and backend technologies, slowly building real-world projects and understanding how to solve complex problems with code.',
                },
                {
                  title: 'Today & Beyond',
                  content:
                    'Now, I focus on full-stack development and building scalable, user-friendly applications. My goal is to combine my business knowledge from BBA with my technical skills to create impactful digital products. The journey is just beginning!',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
