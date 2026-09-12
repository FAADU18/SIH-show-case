import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { galleryData } from '../data/gallery';

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);

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

  const videoPath = `/src/assets/project/demo/${galleryData.video.filename}`;

  return (
    <section id="demo" className="section-padding bg-gradient-to-br from-white to-tech-blue/10">
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
            See It In Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch the agent perceive a real web interface, identify sensitive information locally, protect private content, and execute the requested browser action.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl aspect-video">
            <video
              controls
              className="w-full h-full"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Overlay (optional, for styled play button) */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group hover:bg-black/50 transition-colors">
                <div className="p-4 bg-white/90 rounded-full group-hover:bg-white transition-colors">
                  <Play className="text-navy-900" size={48} fill="currentColor" />
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">
              {galleryData.video.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {galleryData.video.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="btn-primary">
                Watch Full Demo
              </a>
              <a href="#gallery" className="btn-secondary">
                View Screenshots
              </a>
            </div>
          </div>
        </motion.div>

        {/* Key Moments in the Demo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-navy-900 mb-8">
            Key Moments
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              {
                time: '00:00',
                title: 'Browser State',
                description: 'Agent perceives the web interface'
              },
              {
                time: '00:15',
                title: 'Detection',
                description: 'PII is identified automatically'
              },
              {
                time: '00:30',
                title: 'Protection',
                description: 'Sensitive data is redacted'
              },
              {
                time: '00:45',
                title: 'Execution',
                description: 'Action is executed safely'
              }
            ].map((moment, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-sm font-bold text-tech-blue mb-2">{moment.time}</div>
                <h4 className="font-bold text-navy-900 mb-2">{moment.title}</h4>
                <p className="text-sm text-gray-600">{moment.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* What to Look For */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-privacy-50 to-tech-blue/10 rounded-xl p-8 border border-privacy-200"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-navy-900 mb-6">
            What to Look For
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              '✓ Browser elements are accurately identified and understood',
              '✓ Sensitive information is detected automatically',
              '✓ PII is masked before transmission',
              '✓ Action is executed precisely and safely',
              '✓ System remains responsive and efficient',
              '✓ Complete audit trail is maintained'
            ].map((point, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200"
              >
                <span className="text-lg font-bold text-privacy-600 flex-shrink-0">•</span>
                <p className="text-gray-700 font-medium">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
