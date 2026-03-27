import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)]/40 backdrop-blur-md py-12 border-t border-[var(--color-surface-hover)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex items-center gap-2 group">
          <Camera className="w-6 h-6 text-[var(--color-accent)] group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-serif text-xl font-semibold tracking-wider uppercase">Urban Lens</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest text-[var(--color-text-muted)]">
          <a href="#home" className="hover:text-[var(--color-accent)] transition-colors">Home</a>
          <a href="#about" className="hover:text-[var(--color-accent)] transition-colors">About</a>
          <a href="#portfolio" className="hover:text-[var(--color-accent)] transition-colors">Portfolio</a>
          <a href="#services" className="hover:text-[var(--color-accent)] transition-colors">Services</a>
          <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</a>
        </div>

        <div className="text-sm text-[var(--color-text-muted)] font-light text-center md:text-right">
          &copy; {new Date().getFullYear()} Urban Lens. <br className="md:hidden" /> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
