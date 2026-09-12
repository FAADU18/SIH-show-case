import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { projectData } from '../data/project';

export default function Workflow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const iconMap: { [key: number]: string } = {
    1: '💬',
    2: '🧠',
    3: '📋',
    4: '⚡'
  };

  return (
    <section id="workflow" className="section-padding bg-gradient-to-br from-white via-tech-blue/5 to-white">
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
            {projectData.sections.workflow.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The agent processes your request through distinct stages to understand intent and execute actions
          </p>
        </motion.div>

        {/* Workflow Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 mb-16"
        >
          {projectData.sections.workflow.stages.map((stage, i) => (
            <motion.div key={stage.number} variants={itemVariants} className="relative">
              {/* Card */}
              <div className="card p-8 bg-white border-l-4 border-tech-blue hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  {/* Number Circle */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full text-white font-bold text-xl shadow-lg">
                      {stage.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {stage.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="hidden sm:flex items-center justify-center text-5xl">
                    {iconMap[stage.number]}
                  </div>
                </div>
              </div>

              {/* Arrow to Next */}
              {i < projectData.sections.workflow.stages.length - 1 && (
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex justify-center py-4"
                >
                  <ArrowDown className="text-tech-blue" size={32} strokeWidth={3} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Key Insights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: '🎯',
              title: 'Intent-Driven',
              description: 'The system understands what you actually want to accomplish'
            },
            {
              icon: '📐',
              title: 'Strategic Planning',
              description: 'Multi-step plans enable complex browser interactions'
            },
            {
              icon: '🔄',
              title: 'Adaptive Execution',
              description: 'Agent learns from results and adjusts strategy as needed'
            }
          ].map((insight, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="card p-6 hover:shadow-lg transition-shadow text-center"
            >
              <p className="text-4xl mb-4">{insight.icon}</p>
              <h4 className="font-bold text-lg text-navy-900 mb-2">{insight.title}</h4>
              <p className="text-sm text-gray-600">{insight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
