import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--color-surface)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-sm mb-4 block font-medium">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Let's create something <span className="italic text-[var(--color-text-muted)]">beautiful.</span>
          </h2>
          
          <p className="text-[var(--color-text-muted)] font-light mb-12 leading-relaxed max-w-md">
            We're currently accepting bookings for the upcoming season. Fill out the form, and we'll get back to you within 48 hours to discuss your vision.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
              <Mail className="w-5 h-5" />
              <a href="mailto:hello@urbanlens.com" className="font-light">hello@urbanlens.com</a>
            </div>
            <div className="flex items-center gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
              <Phone className="w-5 h-5" />
              <a href="tel:+919876543210" className="font-light">+91 98765 43210</a>
            </div>
            <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
              <MapPin className="w-5 h-5" />
              <span className="font-light">Urban Lens, Navi Mumbai, Maharashtra-400091</span>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[var(--color-bg)] p-8 md:p-12 border border-[var(--color-surface-hover)]"
        >
          <form 
            className="space-y-6" 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const service = formData.get('service');
              const date = formData.get('date');
              const message = formData.get('message');

              const subject = `New Inquiry from ${name || 'Website Visitor'}`;
              const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\nDate: ${date}\n\nMessage:\n${message}`;

              const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=urbanlens2k25@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              window.open(gmailUrl, '_blank');
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-[var(--color-surface-hover)] py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-[var(--color-surface-hover)] py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="service" className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Service of Interest</label>
              <select
                id="service"
                name="service"
                defaultValue=""
                required
                className="w-full bg-transparent border-b border-[var(--color-surface-hover)] py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none"
              >
                <option value="" disabled className="bg-[var(--color-bg)]">Select a service</option>
                <option value="rental" className="bg-[var(--color-bg)]">Camera & Gear Rental</option>
                <option value="event" className="bg-[var(--color-bg)]">Event Coverage (Wedding/Party)</option>
                <option value="studio" className="bg-[var(--color-bg)]">Event Photo Studios</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Event Date (Optional)</label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full bg-transparent border-b border-[var(--color-surface-hover)] py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-[var(--color-surface-hover)] py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                placeholder="Tell us about your vision..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[var(--color-text)] text-black hover:bg-[var(--color-accent)] transition-colors duration-300 uppercase tracking-widest text-sm font-medium mt-8"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
