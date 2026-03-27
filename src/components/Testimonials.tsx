import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Urban Lens made our wedding so easy. We booked an incredible freelance photographer through their marketplace, and the photos were stunning.",
    author: "Sarah & James",
    role: "Wedding Clients"
  },
  {
    quote: "As a freelance photographer, being able to rent high-end lenses for just ₹3,500 a day has completely transformed the quality of my work.",
    author: "Michael Chen",
    role: "Freelance Photographer"
  },
  {
    quote: "The platform is seamless. We needed a photographer and some extra lighting gear for a corporate gala, and Urban Lens provided everything flawlessly.",
    author: "Elena Rodriguez",
    role: "Event Coordinator"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-surface-hover)] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-surface-hover)] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-sm mb-4 block font-medium">
            Kind Words
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            What our clients <span className="italic text-[var(--color-text-muted)]">say.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-6 rounded-2xl hover:bg-[var(--color-surface)] hover:-translate-y-2 transition-all duration-500 group"
            >
              <Quote className="w-12 h-12 text-[var(--color-surface-hover)] absolute -top-4 -left-4 -z-10" />
              <p className="text-lg font-serif italic text-[var(--color-text-muted)] leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-medium text-[var(--color-text)] uppercase tracking-widest text-sm mb-1">
                  {testimonial.author}
                </h4>
                <span className="text-xs text-[var(--color-accent)] uppercase tracking-widest">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
