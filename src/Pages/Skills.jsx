// src/pages/Skills.jsx
import React from 'react';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['JavaScript',  'React',  'Next.js', 'Tailwind CSS'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Backend',
      skills: ['Node.js',  'Express.js',  'REST APIs',],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Database',
      skills: [ 'MongoDB','Firebase'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Tools & Others',
      skills: ['Git',  'Vercel',],
      color: 'from-green-500 to-green-600'
    }
  ];

  const proficiencyData = [
    { skill: 'JavaScript', level: 95 },
    { skill: 'React/Next.js', level: 90 },
    { skill: 'Node.js/Express', level: 85 },
    // { skill: 'Python', level: 80 },
    // { skill: 'Database Design', level: 85 },
    { skill: 'UI/UX Design', level: 75 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-4">
            <Code className="w-6 h-6 text-teal-600" />
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-600 max-w-2xl mx-auto">
            Technologies I love working with to create amazing digital experiences
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ x: -20, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="px-3 py-2 bg-slate-50 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-white rounded-2xl shadow-sm p-8"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Proficiency Levels
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {proficiencyData.map((item, index) => (
              <motion.div key={item.skill} variants={itemVariants} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 font-medium">{item.skill}</span>
                  <span className="text-slate-500">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
