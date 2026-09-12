import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertCircle } from 'lucide-react';
import { projectData, piiDetectionDemo } from '../data/project';

export default function Privacy() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

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
    <section id="privacy" className="section-padding bg-gradient-to-br from-privacy-50 via-white to-privacy-50">
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
            {projectData.sections.privacy.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {projectData.sections.privacy.description}
          </p>
        </motion.div>

        {/* Privacy Pipeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
              Data Protection Pipeline
            </h3>
            <div className="relative p-8 bg-white rounded-xl border-2 border-privacy-500 shadow-lg">
              {/* Shield Background */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-privacy-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>

              {/* Pipeline Steps */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {projectData.sections.privacy.pipeline.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className={`text-center p-3 rounded-lg border-2 text-xs sm:text-sm font-bold transition-all ${
                      i <= activeStep
                        ? 'bg-privacy-500 text-white border-privacy-600 shadow-lg'
                        : 'bg-gray-100 text-gray-600 border-gray-300'
                    }`}
                  >
                    {step}
                  </motion.div>
                ))}
              </div>

              {/* Play Animation Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => {
                    if (activeStep < projectData.sections.privacy.pipeline.length - 1) {
                      setActiveStep(activeStep + 1);
                    } else {
                      setActiveStep(0);
                    }
                  }}
                  className="px-6 py-3 bg-privacy-600 text-white rounded-lg font-semibold hover:bg-privacy-700 transition-colors"
                >
                  {activeStep === 0 ? 'Start Pipeline' : activeStep === projectData.sections.privacy.pipeline.length - 1 ? 'Reset' : 'Next Step'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* PII Detection Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center space-x-3">
              <AlertCircle className="text-red-600" />
              <span>Types of Information Detected</span>
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          >
            {piiDetectionDemo.categories.map((category, i) => (
              <motion.button
                key={i}
                variants={itemVariants}
                onClick={() => setSelectedCategory(i)}
                className={`p-4 rounded-lg font-semibold text-sm transition-all ${
                  selectedCategory === i
                    ? `${category.color} shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-600 hover:shadow-md'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Category Details */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-white rounded-lg border border-gray-200"
          >
            <div className="text-center">
              <div className={`inline-block px-4 py-2 rounded-lg ${piiDetectionDemo.categories[selectedCategory].color} mb-3`}>
                <p className="font-bold">
                  {piiDetectionDemo.categories[selectedCategory].name}
                </p>
              </div>
              <p className="text-gray-600">
                Information in this category is detected and protected automatically
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Three Key Principles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Shield,
              title: 'Detection',
              description: 'Advanced algorithms identify sensitive information in real-time'
            },
            {
              icon: Lock,
              title: 'Redaction',
              description: 'Sensitive data is masked before leaving the device'
            },
            {
              icon: Eye,
              title: 'Visibility',
              description: 'Complete transparency about what reaches external servers'
            }
          ].map((principle, i) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-privacy-100 rounded-full">
                    <Icon className="text-privacy-700" size={32} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">
                  {principle.title}
                </h4>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Important Note */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 p-8 bg-blue-50 border-2 border-blue-200 rounded-xl"
        >
          <div className="flex items-start space-x-4">
            <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-lg text-navy-900 mb-2">Privacy Approach</h4>
              <p className="text-gray-600">
                Our implementation is designed with privacy as a first-class concern. Sensitive information is detected and protected locally before outbound data is allowed to leave the device. This ensures that even if communication channels are compromised, personal data remains protected.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
