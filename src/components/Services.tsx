import { motion } from 'motion/react';
import { Camera, Video } from 'lucide-react';

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Camera & Accessories Rental',
    description: 'Rent high-quality cameras, lenses, lighting, tripods, and other professional gear at affordable prices. Perfect for freelancers and enthusiasts.',
    price: '₹3,500 / day'
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Event Coverage',
    description: 'Book professional freelance photographers for weddings, parties, corporate events, and more through our trusted third-party marketplace.',
    price: 'Starting at ₹45,000'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[var(--color-surface)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-sm mb-4 block font-medium">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            Everything you need for <span className="italic text-[var(--color-text-muted)]">the perfect shot.</span>
          </h2>
          <p className="text-[var(--color-text-muted)] font-light">
            We simplify your photography needs by offering both premium equipment rental and professional event photography services in one seamless platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-12 border border-[var(--color-surface-hover)] bg-[var(--color-bg)] hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 transition-all duration-500 group"
            >
              <div className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-500 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-[var(--color-text-muted)] font-light mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between border-t border-[var(--color-surface-hover)] pt-6 mt-auto">
                <span className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
                  {service.price}
                </span>
                <a href="#contact" className="text-sm uppercase tracking-widest text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
                  Book Now &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
