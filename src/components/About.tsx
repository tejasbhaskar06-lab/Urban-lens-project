import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--color-surface)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Urban Lens Platform"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-3xl font-serif mb-2 text-white">Urban Lens</h3>
            <p className="text-[var(--color-text-muted)] font-light">Your creative partner</p>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center p-8 rounded-2xl hover:bg-[var(--color-bg)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-accent)]/5 transition-all duration-500"
        >
          <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-sm mb-4 block font-medium">
            Our Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Bridging the gap between <span className="italic text-[var(--color-text-muted)]">creators and clients.</span>
          </h2>
          
          <div className="space-y-6 text-[var(--color-text-muted)] font-light leading-relaxed">
            <p>
              Urban Lens is a comprehensive service-based photography platform designed to simplify your creative journey. We act as a trusted third-party provider, seamlessly connecting customers with top-tier professional photography services and premium camera equipment rentals.
            </p>
            <p>
              Whether you're a seasoned professional looking to rent high-end gear, or a client seeking the perfect photographer for your wedding, corporate event, or private party, our marketplace has you covered.
            </p>
            <p>
              We believe in making professional photography accessible and convenient. From cameras, lenses, and lighting to talented freelance photographers ready to capture your vision, Urban Lens is your ultimate creative partner.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[var(--color-surface-hover)] pt-8">
            <div>
              <h4 className="text-4xl font-serif text-[var(--color-accent)] mb-2">1000+</h4>
              <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)]">Gear Items</p>
            </div>
            <div>
              <h4 className="text-4xl font-serif text-[var(--color-accent)] mb-2">500+</h4>
              <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)]">Freelancers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
