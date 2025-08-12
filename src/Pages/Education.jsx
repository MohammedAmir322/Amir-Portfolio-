import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
  degree: 'Bachelor of Business Administration (BBA)',
  school: 'Premier University',
  location: 'Chittagong, Bangladesh',
  period: '2021 - 2025',
  gpa: '3.15/4.0',
  description:
    'Focused on Business Management, Finance, and Marketing with hands-on experience in case studies, business simulations, and entrepreneurial projects.',
  achievements: [
    'Top 10 in National Business Case Competition 2023',
    'Vice President of Business Club',
    'Organized International Business Summit 2024',
    'Recipient of University Merit Scholarship (2 years)',
  ],
  coursework: [
    'Principles of Management',
    'Financial Accounting',
    'Marketing Management',
    'Business Communication',
    'Organizational Behavior',
    'Entrepreneurship Development',
  ],
},
    {
  degree: 'Higher Secondary Certificate (HSC) - Humanities',
  school: 'BAF Shaheen College, Chittagong',
  location: 'Chittagong, Bangladesh',
  period: '2018 - 2020',
  gpa: '3.8/5.0',
  description:
    'Completed Higher Secondary studies in the Humanities stream, developing strong analytical, writing, and critical thinking skills through diverse subjects.',
  achievements: [
    'Top 10 in college in final board examinations',
    'Secretary of Debate Club',
    'Winner of Inter-College Debate Competition 2019',
    'Organized annual cultural festival',
  ],
  coursework: [
    'Bangla Literature',
    'English Literature',
    'History',
    'Civics & Good Governance',
    'Economics',
    'Social Science',
  ],
},

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="education" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4"
          >
            <GraduationCap className="w-6 h-6 text-purple-600" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Education
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            My academic journey and the foundation that shaped my technical
            expertise
          </motion.p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.3 }}
                className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              ></motion.div>
              {/* Timeline Line */}
              <div className="absolute left-2 top-4 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 h-full last:h-8"></div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-purple-600 font-semibold mb-2">
                      {edu.school}
                    </h4>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-1">
                    <span className="inline-flex items-center text-sm text-purple-600 font-medium bg-purple-100 px-3 py-1 rounded-full">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center text-sm text-slate-600">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* GPA */}
                <div className="mb-4">
                  <span className="text-slate-600">
                    GPA:{' '}
                    <span className="font-bold text-slate-900">{edu.gpa}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {edu.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Achievements */}
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Award size={16} className="mr-2 text-purple-600" />
                      Achievements
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={
                            inView
                              ? { x: 0, opacity: 1 }
                              : { x: -20, opacity: 0 }
                          }
                          transition={{
                            delay: index * 0.3 + i * 0.1,
                          }}
                          className="flex items-start"
                        >
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-slate-600 text-sm">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Coursework */}
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-3">
                      Key Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <motion.span
                          key={course}
                          initial={{ scale: 0 }}
                          animate={
                            inView ? { scale: 1 } : { scale: 0 }
                          }
                          transition={{
                            delay: index * 0.3 + courseIndex * 0.05,
                          }}
                          className="px-3 py-1 text-sm bg-white text-purple-700 rounded-full border border-purple-200"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
