import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { projectData } from '../data/project';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tech-purple/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container-wide relative z-10 pt-16 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <div className="px-4 py-2 bg-privacy-50 border border-privacy-200 rounded-full">
                <p className="text-sm font-semibold text-privacy-700">
                  SIH26171 — ISRO Challenge
                </p>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 leading-tight mb-6"
            >
              {projectData.sections.hero.title.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              {projectData.sections.hero.description}
            </motion.p>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="mb-10 grid grid-cols-2 gap-3">
              {projectData.trustBadges.map((badge, i) => (
                <div key={i} className="text-xs font-semibold text-privacy-700 bg-privacy-50 px-3 py-2 rounded-lg border border-privacy-200">
                  ✓ {badge}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="btn-primary flex items-center justify-center space-x-2">
                <Play size={18} />
                <span>Watch Demo</span>
              </a>
              <a href="#architecture" className="btn-secondary flex items-center justify-center space-x-2">
                <span>Explore Architecture</span>
                <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6">
              <a href="#research" className="text-sm font-semibold text-tech-purple hover:underline">
                View Research →
              </a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <div className="relative">
              {/* Pipeline Visualization */}
              <div className="space-y-4">
                {[
                  { icon: '👤', label: 'USER TASK' },
                  { icon: '👁️', label: 'LOCAL PERCEPTION' },
                  { icon: '🧠', label: 'LOCAL AI' },
                  { icon: '🛡️', label: 'PRIVACY CHECK' },
                  { icon: '✅', label: 'SAFE ACTION' }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-2xl">{step.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-navy-900">{step.label}</p>
                    </div>
                    {i < 4 && (
                      <div className="text-tech-blue font-bold">↓</div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-tech-blue/10 rounded-full blur-2xl"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
