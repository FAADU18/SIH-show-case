import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../data/gallery';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('browser-agent');

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

  const filteredImages = galleryData.images.filter(
    img => img.category === activeCategory
  );

  const currentImageIndex = galleryData.images.findIndex(
    img => img.id === selectedImage
  );
  const currentImage = selectedImage
    ? galleryData.images.find(img => img.id === selectedImage)
    : null;

  const goToNextImage = () => {
    const next = (currentImageIndex + 1) % galleryData.images.length;
    setSelectedImage(galleryData.images[next].id);
  };

  const goToPrevImage = () => {
    const prev =
      (currentImageIndex - 1 + galleryData.images.length) %
      galleryData.images.length;
    setSelectedImage(galleryData.images[prev].id);
  };

  return (
    <section id="gallery" className="section-padding bg-white">
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
            Project in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real project screenshots demonstrating our privacy-first browser automation system
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap gap-3 justify-center"
        >
          {galleryData.categories.map(category => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => {
                setActiveCategory(category.id);
                setSelectedImage(null);
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-tech-blue text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Images Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredImages.map(image => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(image.id)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-video group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23e5e7eb%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2216%22 fill=%22%236b7280%22%3E' + image.caption + '%3C/text%3E%3C/svg%3E';
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3 bg-white rounded-full">
                      <ChevronRight size={24} className="text-navy-900" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-navy-900 mt-3">{image.caption}</h3>
              <p className="text-sm text-gray-600">{image.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && currentImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-4xl w-full"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-200 transition-colors z-10"
                >
                  <X size={24} className="text-navy-900" />
                </button>

                {/* Image */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                  <img
                    src={currentImage.src}
                    alt={currentImage.caption}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={goToPrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full transition-colors"
                >
                  <ChevronLeft size={24} className="text-navy-900" />
                </button>

                <button
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full transition-colors"
                >
                  <ChevronRight size={24} className="text-navy-900" />
                </button>

                {/* Caption */}
                <div className="mt-4 bg-white rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {currentImage.caption}
                  </h3>
                  <p className="text-gray-600 mb-4">{currentImage.description}</p>
                  <p className="text-xs text-gray-500">
                    Image {currentImageIndex + 1} of {galleryData.images.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
