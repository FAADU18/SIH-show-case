import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { projectData } from '../data/project';

export default function Problem() {
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
    <section id="problem" className="section-padding bg-white">
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
            {projectData.sections.problem.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {projectData.sections.problem.description}
          </p>
        </motion.div>

        {/* Traditional Architecture Diagram */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Browser */}
          <motion.div variants={itemVariants} className="card p-6">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-bold text-navy-900 mb-2">Browser</h3>
            <p className="text-sm text-gray-600">
              User opens a webpage with sensitive information
            </p>
          </motion.div>

          {/* Danger Arrow */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-4xl text-red-500 mb-2">⚠️</div>
              <p className="text-sm font-semibold text-red-600">
                FULL DATA<br />SENT TO<br />CLOUD
              </p>
            </div>
          </motion.div>

          {/* Cloud Server */}
          <motion.div variants={itemVariants} className="card p-6 bg-red-50 border-red-200">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="font-bold text-navy-900 mb-2">Cloud AI</h3>
            <p className="text-sm text-gray-600">
              Remote server processes all data
            </p>
          </motion.div>
        </motion.div>

        {/* Risk Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-red-50 border border-red-200 rounded-xl p-8 mb-12"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="text-red-600" size={28} />
            <h3 className="text-2xl font-bold text-navy-900">
              Sensitive Data at Risk
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {projectData.sections.problem.risks.map((risk, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-lg p-4 border border-red-200 text-center"
              >
                <p className="text-sm font-semibold text-red-600">{risk}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Key Problems */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: '🔓',
              title: 'Data Exposure',
              description: 'All browser content leaves the device in unprocessed form'
            },
            {
              icon: '🎯',
              title: 'Privacy Loss',
              description: 'Server has complete visibility into user activities and sensitive info'
            },
            {
              icon: '⚠️',
              title: 'Trust Required',
              description: 'Users must trust remote servers with their most sensitive data'
            }
          ].map((problem, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="card p-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-4xl mb-4">{problem.icon}</p>
              <h3 className="font-bold text-lg text-navy-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-600">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
