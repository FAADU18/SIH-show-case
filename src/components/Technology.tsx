import { motion } from 'framer-motion';
import { Code2, Zap, Shield, Cpu } from 'lucide-react';
import { projectData } from '../data/project';

export default function Technology() {
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

  const categories = [
    {
      icon: Code2,
      title: 'Frontend / Extension',
      color: 'from-blue-500 to-blue-600',
      technologies: projectData.sections.technologies.frontend
    },
    {
      icon: Cpu,
      title: 'Perception',
      color: 'from-purple-500 to-purple-600',
      technologies: projectData.sections.technologies.perception
    },
    {
      icon: Zap,
      title: 'Local AI',
      color: 'from-orange-500 to-orange-600',
      technologies: projectData.sections.technologies.localAI
    },
    {
      icon: Shield,
      title: 'Privacy',
      color: 'from-green-500 to-green-600',
      technologies: projectData.sections.technologies.privacy
    },
    {
      icon: Cpu,
      title: 'Execution',
      color: 'from-pink-500 to-pink-600',
      technologies: projectData.sections.technologies.execution
    }
  ];

  return (
    <section id="technology" className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Technical Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built with modern, production-ready technologies
          </p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card p-8"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className={`p-4 bg-gradient-to-br ${category.color} rounded-lg text-white flex-shrink-0`}>
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.technologies.map((tech, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: j * 0.05 }}
                      viewport={{ once: true }}
                      className={`px-4 py-3 bg-gradient-to-br ${category.color} bg-opacity-10 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow`}
                    >
                      <p className="text-sm font-semibold text-gray-700">
                        {tech}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Integration Note */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 rounded-xl border border-tech-blue/20"
        >
          <h3 className="text-xl font-bold text-navy-900 mb-4">
            Integrated Architecture
          </h3>
          <p className="text-gray-600 mb-4">
            These technologies work together seamlessly to create a privacy-preserving browser automation system. The architecture ensures that:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center space-x-3">
              <span className="text-tech-blue font-bold">✓</span>
              <span>On-device AI processing maintains low latency</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-tech-blue font-bold">✓</span>
              <span>Multiple perception inputs ensure accurate understanding</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-tech-blue font-bold">✓</span>
              <span>Privacy mechanisms are integrated throughout</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-tech-blue font-bold">✓</span>
              <span>Browser control is precise and reliable</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
