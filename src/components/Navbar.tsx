import { useEffect, useState } from 'react';
import { Menu, X, Phone, Leaf } from 'lucide-react';
import { business } from '@/data/products';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Jairam Traders home">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700 text-cream-50 shadow-soft transition-transform duration-300 group-hover:scale-105">
            <Leaf className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-wide text-brand-900">
              JAIRAM
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-brand-600">
              Traders
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-brand-800 transition-colors hover:text-brand-600"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-brand-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${business.mobile.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-brand-600"
          >
            <Phone className="h-4 w-4" />
            {business.mobile}
          </a>
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-800 transition-colors hover:bg-brand-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream-50/98 backdrop-blur-md transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100 shadow-soft' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-brand-800 transition-colors hover:bg-brand-100 hover:text-brand-600"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-3 px-2">
            <a
              href={`tel:${business.mobile.replace(/\s/g, '')}`}
              className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-brand-800"
            >
              <Phone className="h-4 w-4 text-brand-600" />
              {business.mobile}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
