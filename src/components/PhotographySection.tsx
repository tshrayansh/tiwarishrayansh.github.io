import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../content/portfolio.json';

interface PhotoItem {
  id: string;
  title: string;
  category: string;
  src: string;
}

export const PhotographySection: React.FC = () => {
  const photos = portfolioData.photography as PhotoItem[];
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Technical metadata stamps for premium feel
  const getMetadata = (id: string) => {
    switch (id) {
      case 'biology-structure':
        return { lens: "100mm Macro", film: "Fuji Superia 400", loc: "Botany Greenhouse" };
      case 'endurance-trail':
        return { lens: "35mm Prime", film: "Kodak Portra 160", loc: "Sahyadri Ridges" };
      case 'study-library':
        return { lens: "50mm Prime", film: "Ilford HP5 Plus", loc: "Department Archives" };
      case 'optics-camera':
        return { lens: "85mm Prime", film: "Kodak Gold 200", loc: "Studio Bench" };
      default:
        return { lens: "50mm F/1.8", film: "35mm Analog", loc: "On Location" };
    }
  };

  return (
    <section id="photography" className="min-h-screen py-20 px-6 md:px-12 relative overflow-hidden bg-paper-light dark:bg-paper-dark">
      <div className="absolute top-0 left-0 w-full h-[1px] ledger-border-b" />

      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-16">
        <span className="font-mono text-xs text-sage dark:text-ochre">[ SEC. 04 // VISUALS ]</span>
        <h2 className="text-3xl md:text-4xl font-serif font-normal">Analog Cartography</h2>
        <div className="h-[1px] flex-grow ledger-border-b opacity-45" />
      </div>

      {/* Editorial Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {photos.map((photo, idx) => {
          const meta = getMetadata(photo.id);
          // Alternating wide / tall heights for asymmetric design
          const heightClass = idx % 3 === 0 ? "h-96 md:h-[450px]" : "h-72 md:h-[350px]";
          
          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col space-y-3 cursor-pointer group"
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Image Frame */}
              <div className={`w-full ${heightClass} border border-border-light dark:border-border-dark overflow-hidden relative bg-border-light/20 dark:bg-border-dark/20 rounded transition-smooth group-hover:border-sage dark:group-hover:border-ochre`}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-102 group-hover:scale-100 transition-smooth"
                />
                
                {/* Asymmetric Monospaced Stamp Tag overlay */}
                <div className="absolute bottom-4 left-4 bg-paper-light/90 dark:bg-paper-dark/95 border border-border-light dark:border-border-dark px-3 py-1.5 rounded font-mono text-[9px] flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sage dark:text-ochre font-bold">// {photo.category}</span>
                  <span className="text-muted-light dark:text-muted-dark">{meta.film}</span>
                </div>
              </div>

              {/* Title & Technical Footer */}
              <div className="flex justify-between items-baseline px-1">
                <h3 className="font-serif text-lg font-normal group-hover:text-sage dark:group-hover:text-ochre transition-colors">
                  {photo.title}
                </h3>
                <span className="font-mono text-[9px] text-muted-light dark:text-muted-dark">
                  {meta.loc}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox / Minimal Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-paper-light/95 dark:bg-paper-dark/98 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 font-mono text-xs hover:text-sage dark:hover:text-ochre"
              onClick={() => setSelectedPhoto(null)}
            >
              [ close // esc ]
            </button>

            <div className="max-w-4xl max-h-[85vh] flex flex-col space-y-4 items-center" onClick={e => e.stopPropagation()}>
              <motion.img
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[70vh] object-contain border border-border-light dark:border-border-dark rounded"
              />

              <div className="text-center space-y-1">
                <h3 className="font-serif text-xl font-normal">{selectedPhoto.title}</h3>
                <div className="flex justify-center gap-4 text-xs font-mono text-muted-light dark:text-muted-dark">
                  <span>{getMetadata(selectedPhoto.id).film}</span>
                  <span>•</span>
                  <span>{getMetadata(selectedPhoto.id).lens}</span>
                  <span>•</span>
                  <span>{getMetadata(selectedPhoto.id).loc}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
