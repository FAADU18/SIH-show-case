import { motion } from 'framer-motion';
import { CheckCircle, Lock } from 'lucide-react';
import { projectData } from '../data/project';

export default function Solution() {
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
    <section id="solution" className="section-padding bg-gradient-to-br from-privacy-50 to-white">
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
            {projectData.sections.solution.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {projectData.sections.solution.description}
          </p>
        </motion.div>

        {/* Comparison: Traditional vs Our Approach */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Traditional */}
          <motion.div variants={itemVariants} className="card p-8 border-red-200 bg-red-50">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Traditional Approach</h3>
            <div className="space-y-4">
              {['Browser', 'Screenshot', '↓', 'Cloud AI', '↓', 'Server'].map((item, i) => (
                <div key={i} className="text-center">
                  {item === '↓' ? (
                    <div className="text-2xl text-red-500">⚠️</div>
                  ) : (
                    <>
                      <div className="bg-white border-2 border-red-200 rounded-lg p-4">
                        <p className="font-semibold text-red-600">{item}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-sm text-red-700 font-semibold">
                ✗ All sensitive data visible to server
              </p>
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div variants={itemVariants} className="card p-8 border-privacy-600 border-2 bg-privacy-50">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Our Privacy-First Approach</h3>
            <div className="space-y-4">
              {[
                { label: 'Browser', icon: '🌐' },
                { label: 'Local Perception', icon: '👁️' },
                { label: 'PII Detection', icon: '🎯' },
                { label: 'Redaction', icon: '🛡️' },
                { label: 'Sanitized Request', icon: '✅' },
                { label: 'Server', icon: '☁️' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="bg-white border-2 border-privacy-500 rounded-lg p-4">
                    <p className="font-semibold text-privacy-700 flex items-center space-x-2">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-privacy-100 border border-privacy-500 rounded-lg">
              <p className="text-sm text-privacy-700 font-semibold flex items-center space-x-2">
                <CheckCircle size={18} />
                <span>Sensitive data protected locally</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Advantages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-xl p-8"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-8">
            <Lock className="text-privacy-600" size={32} />
            <h3 className="text-3xl font-bold text-navy-900">
              Privacy-First Architecture
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: '🧠',
                title: 'On-Device Processing',
                description: 'AI runs locally, not on remote servers'
              },
              {
                icon: '🔐',
                title: 'Local PII Detection',
                description: 'Sensitive data identified before transmission'
              },
              {
                icon: '✏️',
                title: 'Automatic Redaction',
                description: 'Sensitive fields masked automatically'
              },
              {
                icon: '👁️',
                title: 'Full Visibility',
                description: 'See exactly what leaves your device'
              }
            ].map((adv, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-gradient-to-br from-privacy-50 to-white rounded-lg p-6 border border-privacy-200 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-4xl mb-3">{adv.icon}</p>
                <h4 className="font-bold text-navy-900 mb-2">{adv.title}</h4>
                <p className="text-sm text-gray-600">{adv.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
