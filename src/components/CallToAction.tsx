import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-page">
        <div className="reveal relative overflow-hidden rounded-[2rem] shadow-card">
          {/* Background image */}
          <img
            src="https://images.pexels.com/photos/209389/pexels-photo-209389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Golden seeds on burlap"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/75 to-brand-900/55" />

          <div className="relative px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl leading-tight text-cream-50 sm:text-4xl">
                Looking for Quality Edible Seeds?
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-cream-100/85">
                Get in touch with Jairam Traders for product enquiries and
                business requirements. We're here to help.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 px-8 py-4 text-sm font-semibold text-brand-800 shadow-soft transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-card"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
