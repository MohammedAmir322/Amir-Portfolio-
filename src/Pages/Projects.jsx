import React from 'react';
import { Briefcase, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Hostel Management system for a university',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance and user experience.',
      tech: ['React', 'Node.js','Tailwind CSS','MongoDB'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: 'https://hotel-foods.web.app/',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team communication features.',
      tech: ['React', 'Node.js','Tailwind CSS','MongoDB'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with interactive charts, real-time metrics, and custom reporting capabilities.',
      tech: ['React', 'Node.js','Tailwind CSS','MongoDB'],
      image: 'https://i.ibb.co.com/m5F4GRMF/image.png',
      github: '#',
      live: 'https://product-recomandation.web.app/',
      featured: true
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts and interactive maps.',
      tech: ['React', 'OpenWeather API', 'Mapbox'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, SEO optimization, and social sharing.',
      tech: ['Next.js', 'MDX', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging app with group chats, file sharing, and emoji reactions.',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
            <Briefcase className="w-6 h-6 text-purple-600" />
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl font-bold text-slate-900 mb-4">
            My Projects
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-900 mb-8">
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={project.github} className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Github size={18} className="text-slate-700" />
                      </motion.a>
                      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={project.live} className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <ExternalLink size={18} className="text-slate-700" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-900 mb-8">
            Other Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-50 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-slate-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-slate-200 text-slate-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <motion.a whileHover={{ scale: 1.2 }} href={project.github} className="text-slate-500 hover:text-slate-700 transition-colors">
                    <Github size={16} />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.2 }} href={project.live} className="text-slate-500 hover:text-slate-700 transition-colors">
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
