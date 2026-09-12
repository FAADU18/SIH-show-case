import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Team() {
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

  const team = [
    {
      name: '[Team Member Name]',
      role: 'AI/ML Lead',
      contribution: 'On-device AI model architecture and integration',
      placeholder: true
    },
    {
      name: '[Team Member Name]',
      role: 'Browser Automation',
      contribution: 'Browser control and interaction mechanisms',
      placeholder: true
    },
    {
      name: '[Team Member Name]',
      role: 'Privacy & Security',
      contribution: 'PII detection and privacy mechanisms',
      placeholder: true
    },
    {
      name: '[Team Member Name]',
      role: 'Frontend & Integration',
      contribution: 'UI/UX and system integration',
      placeholder: true
    }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-br from-white to-tech-blue/10">
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
            The Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated engineers and researchers building privacy-first browser automation
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="card p-6 text-center hover:shadow-lg transition-shadow"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {member.name.charAt(1).toUpperCase()}
              </div>

              {/* Name */}
              <h3 className={`text-lg font-bold text-navy-900 mb-1 ${member.placeholder ? 'opacity-50' : ''}`}>
                {member.name}
              </h3>

              {/* Role */}
              <p className={`text-sm font-semibold text-tech-purple mb-3 ${member.placeholder ? 'opacity-50' : ''}`}>
                {member.role}
              </p>

              {/* Contribution */}
              <p className={`text-xs text-gray-600 mb-4 leading-relaxed ${member.placeholder ? 'opacity-50' : ''}`}>
                {member.contribution}
              </p>

              {/* Social Links Placeholder */}
              <div className="flex justify-center space-x-3 opacity-50">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-xs font-semibold text-gray-600">
                  GH
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-xs font-semibold text-gray-600">
                  LI
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Mail size={16} className="text-gray-600" />
                </button>
              </div>

              {/* Placeholder Badge */}
              {member.placeholder && (
                <div className="mt-4 p-2 bg-blue-50 rounded border border-blue-200">
                  <p className="text-xs text-blue-600 font-semibold">
                    [Add Team Details]
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contributions Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 border border-gray-200"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-navy-900 mb-8">
            Key Areas of Expertise
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: '🧠',
                title: 'AI & Machine Learning',
                description: 'Implementing lightweight models for on-device inference'
              },
              {
                icon: '🌐',
                title: 'Browser Technology',
                description: 'Deep expertise in browser APIs and automation'
              },
              {
                icon: '🛡️',
                title: 'Privacy Engineering',
                description: 'Advanced techniques for PII detection and protection'
              },
              {
                icon: '🎯',
                title: 'Perception Engine',
                description: 'Multi-modal understanding of web interfaces'
              },
              {
                icon: '⚡',
                title: 'Performance Optimization',
                description: 'Efficient systems for resource-constrained environments'
              },
              {
                icon: '📊',
                title: 'Research & Development',
                description: 'Advancing the state-of-the-art in browser agents'
              }
            ].map((expertise, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <p className="text-3xl mb-3">{expertise.icon}</p>
                <h4 className="font-bold text-navy-900 mb-2">{expertise.title}</h4>
                <p className="text-sm text-gray-600">{expertise.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
