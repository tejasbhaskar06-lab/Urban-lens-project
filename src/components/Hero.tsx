import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
          alt="Photographer holding camera"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/50 to-[var(--color-bg)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-accent)] uppercase tracking-[0.3em] text-sm mb-6 block"
        >
          Connect. Book. Create -- Your Photography Hub.
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8"
        >
          Urban <span className="italic font-light text-[var(--color-text-muted)]">Lens</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-lg md:text-xl text-[var(--color-text-muted)] font-light mb-12"
        >
          A trusted third-party marketplace connecting you with professional photographers and high-quality camera equipment rentals. Everything you need for the perfect shot, in one place.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-[var(--color-text)] text-black hover:bg-[var(--color-accent)] transition-colors duration-300 uppercase tracking-widest text-sm font-medium flex items-center justify-center gap-2 group"
          >
            Explore Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-[var(--color-surface-hover)] hover:border-[var(--color-accent)] text-[var(--color-text)] transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
