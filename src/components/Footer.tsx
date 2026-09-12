import { motion } from 'framer-motion';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { projectData } from '../data/project';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container-wide">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-2">{projectData.name}</h3>
            <p className="text-sm text-gray-300">{projectData.tagline}</p>
            <p className="text-xs text-gray-400 mt-4">
              On-device intelligence.<br />
              Privacy-first automation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">Problem</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Solution</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#demo" className="hover:text-white transition-colors">Watch Demo</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center space-x-1">
                <span>GitHub</span>
                <ExternalLink size={12} />
              </a></li>
            </ul>
          </motion.div>

          {/* SIH Section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Smart India Hackathon</h4>
            <div className="bg-privacy-500/20 border border-privacy-500/50 rounded-lg p-4 text-xs space-y-2">
              <p className="font-semibold text-privacy-300">
                {projectData.problemStatement}
              </p>
              <p className="text-gray-300">
                {projectData.organization}
              </p>
              <p className="text-privacy-200">
                {projectData.fullTitle}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="border-t border-navy-700 mb-8"></motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-sm text-gray-400 mb-6 md:mb-0">
            <p>
              © 2026 VARMA. Built for SIH26171.
            </p>
            <p className="text-xs mt-2">
              Privacy is not an afterthought. It's by design.
            </p>
          </motion.div>

          {/* Social & Actions */}
          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            {/* GitHub Link */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-navy-800 rounded-full transition-colors group text-sm font-semibold"
              title="GitHub"
            >
              GitHub
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-3 hover:bg-privacy-600 rounded-full transition-colors group"
              title="Back to top"
            >
              <ArrowUp size={20} className="text-gray-300 group-hover:text-white transition-colors" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Top Banner CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 pt-8 border-t border-navy-700"
      >
        <div className="container-wide">
          <div className="bg-gradient-to-r from-privacy-600 to-tech-blue rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              See Privacy-Preserving Browser Automation in Action
            </h3>
            <p className="text-sm text-white/90 mb-6 max-w-2xl mx-auto">
              Explore our complete architecture, watch real demonstrations, and learn how we're revolutionizing browser automation with privacy at the core.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#demo" className="px-6 py-3 bg-white text-privacy-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Watch Demo
              </a>
              <a href="#architecture" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Explore Architecture
              </a>
              <a href="#research" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                View Research
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
