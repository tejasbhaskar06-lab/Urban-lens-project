import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-accent)] uppercase tracking-[0.3em] text-sm mb-6 block"
        >
          Your Vision, Our Lens
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-[1px] h-12 bg-[var(--color-surface-hover)] relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-accent)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
