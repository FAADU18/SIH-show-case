import { motion } from 'framer-motion';
import { CheckCircle, Clock, Target } from 'lucide-react';
import { projectData } from '../data/project';

export default function Roadmap() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'COMPLETED') return <CheckCircle className="text-green-600" size={20} />;
    if (status === 'IN PROGRESS') return <Clock className="text-blue-600" size={20} />;
    return <Target className="text-gray-400" size={20} />;
  };

  const getStatusColor = (status: string) => {
    if (status === 'COMPLETED') return 'bg-green-50 border-green-200';
    if (status === 'IN PROGRESS') return 'bg-blue-50 border-blue-200';
    return 'bg-gray-50 border-gray-200';
  };

  return (
    <section className="section-padding bg-white">
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
            What's Next?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our roadmap for continuous improvement and feature expansion
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-6"
        >
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-tech-blue via-tech-purple to-tech-blue"></div>

          {projectData.sections.roadmap.map((phase, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`relative md:ml-32 card p-6 border-2 transition-all hover:shadow-lg ${getStatusColor(phase.status)}`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute -left-12 top-6 w-8 h-8 bg-white border-4 border-tech-blue rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                {/* Phase Label */}
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    {phase.phase}
                  </p>
                  <h4 className="text-lg font-bold text-navy-900 mt-1">
                    {phase.title}
                  </h4>
                </div>

                {/* Status */}
                <div className="flex items-center space-x-2">
                  {getStatusIcon(phase.status)}
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    phase.status === 'COMPLETED' 
                      ? 'bg-green-100 text-green-700'
                      : phase.status === 'IN PROGRESS'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {phase.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="col-span-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-full rounded-full transition-all ${
                      phase.status === 'COMPLETED'
                        ? 'w-full bg-green-500'
                        : phase.status === 'IN PROGRESS'
                        ? 'w-1/2 bg-blue-500 animate-pulse'
                        : 'w-0 bg-gray-400'
                    }`}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap gap-6 justify-center p-6 bg-gray-50 rounded-lg border border-gray-200"
        >
          {[
            { icon: CheckCircle, label: 'Completed', color: 'text-green-600' },
            { icon: Clock, label: 'In Progress', color: 'text-blue-600' },
            { icon: Target, label: 'Planned', color: 'text-gray-400' }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center space-x-2"
              >
                <Icon className={item.color} size={20} />
                <span className="font-semibold text-navy-900">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
