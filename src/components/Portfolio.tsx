import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

const categories = ['All', 'Weddings', 'Corporate', 'Parties', 'Gear'];

const portfolioItems = [
  { id: 1, category: 'Weddings', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop', title: 'The Vows' },
  { id: 2, category: 'Gear', image: 'https://alphauniverseglobal.media.zestyio.com/Alpha-Universe-WIMB-Robert-Evans-Gear-Part1.jpeg', title: 'Pro Camera Kit' },
  { id: 3, category: 'Corporate', image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop', title: 'Annual Gala' },
  { id: 4, category: 'Parties', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop', title: 'Birthday Bash' },
  { id: 5, category: 'Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop', title: 'First Dance' },
  { id: 6, category: 'Gear', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop', title: 'Professional Bodies' },
  { id: 7, category: 'Corporate', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', title: 'Team Building' },
  { id: 8, category: 'Parties', image: 'https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?s=612x612&w=0&k=20&c=SoTKXXMiJYnc4luzJz3gIdfup3MI8ZlROFNXRBruc10=', title: 'Celebration' },
  { id: 9, category: 'Gear', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop', title: 'Premium Lenses' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[var(--color-bg)] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-sm mb-4 block font-medium">
              Selected Works & Gear
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              A glimpse into our <span className="italic text-[var(--color-text-muted)]">visual diary.</span>
            </h2>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 md:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm uppercase tracking-widest transition-all duration-300 border-b-2 ${
                  activeCategory === category 
                    ? 'border-[var(--color-accent)] text-[var(--color-text)]' 
                    : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden bg-[var(--color-surface)] cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-[var(--color-accent)] text-xs uppercase tracking-widest mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-serif text-white flex items-center justify-between">
                    {item.title}
                    <Maximize2 className="w-5 h-5 text-white/70" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
