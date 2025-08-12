import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description:
        'Led development of scalable web applications serving 100k+ users. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%.',
      achievements: [
        'Architected microservices infrastructure reducing system downtime by 40%',
        'Led a team of 5 developers on multiple high-impact projects',
        'Implemented automated testing suite increasing code coverage to 95%',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description:
        'Built responsive web applications for diverse clients including Fortune 500 companies. Collaborated closely with design teams to create pixel-perfect implementations.',
      achievements: [
        'Delivered 20+ client projects with 100% on-time completion rate',
        'Improved website performance by 50% through optimization techniques',
        'Established component library used across 15+ projects',
      ],
      technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'Figma'],
    },
    {
      title: 'Junior Developer',
      company: 'Startup Ventures',
      location: 'Austin, TX',
      period: '2019 - 2020',
      type: 'Full-time',
      description:
        'Developed features for MVP products in fast-paced startup environment. Participated in agile development processes and contributed to code reviews.',
      achievements: [
        'Built core features for 3 successful product launches',
        'Reduced bug reports by 30% through thorough testing practices',
        'Contributed to open-source projects gaining 500+ GitHub stars',
      ],
      technologies: ['JavaScript', 'Python', 'Django', 'PostgreSQL'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4"
          >
            <Briefcase className="w-6 h-6 text-green-600" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Experience
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            My professional journey and the experiences that shaped my career
          </motion.p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-slate-900 mb-8"
          >
            Work Experience
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"
                />
                <div className="absolute left-2 top-4 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 h-full last:h-8" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-teal-600 font-medium mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-1">
                      <span className="inline-flex items-center text-sm text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center text-sm text-slate-600">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-slate-900 mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={
                            inView
                              ? { x: 0, opacity: 1 }
                              : { x: -20, opacity: 0 }
                          }
                          transition={{
                            delay: index * 0.2 + i * 0.1,
                          }}
                          className="flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-slate-600">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-slate-900 mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : { scale: 0 }}
                          transition={{
                            delay: index * 0.2 + techIndex * 0.05,
                          }}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
