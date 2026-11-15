import { Leaf, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { business, products } from '@/data/products';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

const whatsappUrl = `https://wa.me/${business.whatsapp}`;

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-cream-100">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700 text-cream-50">
                <Leaf className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-cream-50">
                  JAIRAM
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-brand-300">
                  Traders
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
              Your trusted destination for quality edible seeds. Carefully
              sourced, cleaned and graded for homes and businesses.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-semibold text-cream-50">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-100/70 transition-colors hover:text-cream-50 hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-display text-base font-semibold text-cream-50">
              Our Products
            </h4>
            <ul className="mt-5 grid grid-cols-1 gap-3">
              {products.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <a
                    href="#products"
                    className="text-sm text-cream-100/70 transition-colors hover:text-cream-50 hover:underline"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-cream-50">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-cream-100/70">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream-100/70">
                <Phone className="h-5 w-5 shrink-0 text-brand-300" />
                <a
                  href={`tel:${business.mobile.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-cream-50"
                >
                  {business.mobile}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream-100/70">
                <Mail className="h-5 w-5 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${business.email}`}
                  className="break-all transition-colors hover:text-cream-50"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-800/60 pt-6">
          <p className="text-center text-xs text-cream-100/55">
            © {new Date().getFullYear()} Jairam Traders. All rights reserved.
            Premium Edible Seeds · Nagercoil, Tamil Nadu, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
