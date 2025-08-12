import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume/John_Doe_Resume.pdf'; // <-- update this path!
        link.download = 'John_Doe_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center py-20">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 mb-8"
                    >
                        <img
                            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                            alt="John Doe - Full Stack Developer"
                            className="w-32 h-32 rounded-full object-cover"
                        />
                    </motion.div>

                    {/* Name and Designation */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl font-bold text-slate-900 mb-4"
                    >
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                            MD.Amir Hossain
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6"
                    >
                        Full Stack Developer
                    </motion.h2>

                    {/* Introduction */}
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Passionate about creating exceptional digital experiences with clean code and innovative
                        solutions. I specialize in building scalable web applications that solve real-world problems.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <button
                            onClick={() => scrollToSection('/projects')}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                        >
                            Get In Touch
                        </button>
                        <button
                            onClick={handleResumeDownload}
                            className="flex items-center space-x-2 px-8 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 hover:scale-105 transition-all duration-200"
                        >
                            <Download size={18} />
                            <span>Download Resume</span>
                        </button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex justify-center space-x-6 mb-16"
                    >
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                        >
                            <Github size={28} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                        >
                            <Linkedin size={28} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            href="mailto:john.doe@example.com"
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                        >
                            <Mail size={28} />
                        </motion.a>
                    </motion.div>

                    {/* Scroll Down Indicator */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="cursor-pointer"
                    >
                        <button onClick={() => scrollToSection('about')}>
                            <ChevronDown size={32} className="text-slate-400 hover:text-blue-600 transition-colors" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
