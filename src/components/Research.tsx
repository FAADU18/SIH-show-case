import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Award } from 'lucide-react';
import { researchData } from '../data/research';

export default function Research() {
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
    <section id="research" className="section-padding bg-gradient-to-br from-white to-tech-purple/10">
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
            Research & References
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our work is grounded in peer-reviewed research and industry best practices
          </p>
        </motion.div>

        {/* Primary Research Paper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-tech-purple/10 to-tech-blue/10 rounded-xl p-8 border-2 border-tech-purple/30">
            <div className="flex items-start space-x-6">
              <div className="hidden sm:flex items-center justify-center w-20 h-20 bg-tech-purple text-white rounded-lg flex-shrink-0">
                <BookOpen size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  {researchData.primaryPaper.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {researchData.primaryPaper.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Relevance:</strong> {researchData.primaryPaper.relevance}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="btn-primary flex items-center space-x-2 text-sm">
                    <span>Read Paper</span>
                    <ExternalLink size={16} />
                  </a>
                  <a href="#" className="btn-secondary text-sm">
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Key Contributions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-3xl font-bold text-navy-900 flex items-center justify-center space-x-3">
              <Award className="text-tech-purple" />
              <span>Our Key Contributions</span>
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {researchData.contributions.map(contribution => (
              <motion.div
                key={contribution.number}
                variants={itemVariants}
                className="card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-tech-purple to-tech-blue rounded-full text-white font-bold">
                    {contribution.number}
                  </div>
                  <h4 className="font-bold text-navy-900">{contribution.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{contribution.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 border border-gray-200"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold text-navy-900">Research Foundations</h3>
            <p className="text-gray-600 mt-2">
              Our project builds upon research in these key areas
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {researchData.researchAreas.map(area => (
              <motion.div
                key={area.id}
                variants={itemVariants}
                className="p-6 border border-gray-200 rounded-lg hover:border-tech-blue hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-lg text-navy-900 mb-2">{area.title}</h4>
                <p className="text-sm text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
