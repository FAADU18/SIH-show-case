import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Shield } from 'lucide-react';
import { projectData } from '../data/project';

export default function Security() {
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
    <section id="security" className="section-padding bg-gradient-to-br from-white to-red-50/50">
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
            Security & Privacy Considerations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive threat model and mitigation strategy
          </p>
        </motion.div>

        {/* Threat Model */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-navy-900 mb-8">
            Identified Threats & Mitigations
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="space-y-4"
          >
            {projectData.sections.threats.map((threat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-navy-900">Threat</p>
                      <p className="text-sm text-gray-600">{threat.threat}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-navy-900">Detection</p>
                      <p className="text-sm text-gray-600">{threat.detection}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-navy-900">Mitigation</p>
                      <p className="text-sm text-gray-600">{threat.mitigation}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Current Limitations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="text-blue-600" size={28} />
            <h3 className="text-2xl font-bold text-navy-900">
              Current Limitations
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {projectData.sections.limitations.map((limitation, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-blue-200"
              >
                <div className="text-blue-600 font-bold flex-shrink-0 mt-1">•</div>
                <p className="text-gray-700 text-sm">{limitation}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 border border-gray-200"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold text-navy-900">
              Security Best Practices
            </h3>
            <p className="text-gray-600 mt-2">
              When deploying and using the privacy-preserving browser agent
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: '🔐',
                title: 'Device Security',
                items: [
                  'Keep the device OS and all software updated',
                  'Use strong authentication mechanisms',
                  'Enable full disk encryption',
                  'Maintain regular security audits'
                ]
              },
              {
                icon: '🌐',
                title: 'Network Security',
                items: [
                  'Use TLS/HTTPS for all communications',
                  'Validate server certificates properly',
                  'Consider using VPN for added privacy',
                  'Monitor network traffic for anomalies'
                ]
              },
              {
                icon: '🛡️',
                title: 'Application Security',
                items: [
                  'Verify all extension updates before installation',
                  'Review permissions requested by the agent',
                  'Monitor PII detection accuracy',
                  'Report security issues responsibly'
                ]
              },
              {
                icon: '📊',
                title: 'Operational Security',
                items: [
                  'Review audit logs regularly',
                  'Disable agent when not needed',
                  'Use minimal necessary permissions',
                  'Keep sensitive tasks on privacy-first systems'
                ]
              }
            ].map((practice, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card p-6"
              >
                <p className="text-4xl mb-4">{practice.icon}</p>
                <h4 className="font-bold text-lg text-navy-900 mb-4">
                  {practice.title}
                </h4>
                <ul className="space-y-2">
                  {practice.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-start space-x-2">
                      <span className="text-tech-green font-bold flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
