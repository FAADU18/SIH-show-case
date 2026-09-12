import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { architectureData } from '../data/architecture';

export default function Architecture() {
  const [expandedZone, setExpandedZone] = useState<string | null>(null);

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
    <section id="architecture" className="section-padding bg-white">
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
            System Architecture
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Five integrated zones working together to provide privacy-preserving browser automation
          </p>
        </motion.div>

        {/* Architecture Zones */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          {architectureData.zones.map((zone, i) => (
            <motion.div key={zone.id} variants={itemVariants}>
              <button
                onClick={() => setExpandedZone(expandedZone === zone.id ? null : zone.id)}
                className="w-full text-left card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-tech-blue/10 text-tech-blue text-xs font-bold rounded mb-2">
                      ZONE {i + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900">{zone.name}</h3>
                    <p className="text-gray-600 mt-1">{zone.description}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedZone === zone.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-tech-blue" size={24} />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                {expandedZone === zone.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-gray-200 space-y-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{zone.details}</p>
                    <div>
                      <h4 className="font-bold text-navy-900 mb-3">Components:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {zone.components.map((component, j) => (
                          <div
                            key={j}
                            className="bg-tech-blue/10 text-tech-blue text-xs font-semibold px-3 py-2 rounded border border-tech-blue/20"
                          >
                            {component}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Data Flow Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 rounded-xl p-8 border border-tech-blue/20"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-navy-900 mb-6">
            Complete Data Flow Pipeline
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {architectureData.dataFlow.stages.map((stage, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-white rounded-lg border-2 border-tech-blue/30 p-4 text-center hover:border-tech-blue transition-colors">
                  <div className="text-2xl font-bold text-tech-blue mb-2">{stage.step}</div>
                  <p className="text-xs font-semibold text-navy-900">{stage.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{stage.description}</p>
                </div>

                {i < architectureData.dataFlow.stages.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="text-tech-blue text-xl font-bold">→</div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Privacy Gateway Highlight */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-privacy-50 to-white rounded-xl p-8 border-2 border-privacy-500"
        >
          <motion.div variants={itemVariants} className="flex items-start space-x-4 mb-6">
            <div className="text-4xl">🛡️</div>
            <div>
              <h3 className="text-2xl font-bold text-navy-900">Privacy Gateway</h3>
              <p className="text-gray-600 mt-1">
                {architectureData.privacyGateway.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-3"
          >
            {architectureData.privacyGateway.components.map((component, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-privacy-100 text-privacy-700 font-semibold px-4 py-3 rounded-lg text-center text-sm border border-privacy-300"
              >
                {component}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
