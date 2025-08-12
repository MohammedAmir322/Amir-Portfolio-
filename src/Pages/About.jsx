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
            Passionate developer with 5+ years of experience creating web applications
          </motion.p>
        </motion.div>

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
              I'm a full-stack developer with a passion for building scalable web applications and solving complex problems. My experience spans from frontend
              frameworks like React and Vue.js to backend technologies including Node.js and Python.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me contributing to open source projects, writing technical articles, or exploring new technologies. I believe in writing
              clean, maintainable code and creating user experiences that delight.
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
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-slate-600">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div
              whileHover={{ rotate: 3 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl transform rotate-6"
            ></motion.div>
            <img
              src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Working"
              className="relative rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.div>

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
                    'Started my journey in computer science with a fascination for how things work behind the scenes. My first "Hello World" program sparked a passion that continues to drive me today.',
                },
                {
                  title: 'Professional Growth',
                  content:
                    'Transitioned from learning to building real-world applications. Each project taught me something new about scalability, user experience, and the importance of clean, maintainable code.',
                },
                {
                  title: 'Today & Beyond',
                  content:
                    "Now I focus on creating solutions that not only work well but also provide exceptional user experiences. I'm always learning new technologies and methodologies to stay at the forefront of development.",
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
