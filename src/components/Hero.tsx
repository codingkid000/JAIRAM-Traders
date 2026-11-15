import { ArrowRight, Phone, Sprout } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50" />
      <div className="absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-cream-200/50 blur-3xl" />

      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Text */}
        <div className="max-w-xl">
          <div className="reveal is-visible inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            <Sprout className="h-3.5 w-3.5" />
            Premium Edible Seeds
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-brand-950 sm:text-5xl lg:text-[3.4rem]">
            Nature's Goodness,
            <span className="block text-brand-600">Quality in Every Seed.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-800/80">
            Discover quality edible seeds with Jairam Traders. Your trusted
            destination for carefully sourced edible seed products.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#products" className="btn-primary">
              Explore Our Products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { stat: '8+', label: 'Seed Varieties' },
              { stat: '100%', label: 'Naturally Sourced' },
              { stat: '2012', label: 'Serving Since' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-display text-3xl font-semibold text-brand-700">
                  {item.stat}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-brand-800/60">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative reveal is-visible">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img
              src="https://images.pexels.com/photos/1660046/pexels-photo-1660046.jpeg?auto=compress&cs=tinysrgb&h=900&w=900"
              alt="A bowl of mixed seeds, nuts and fresh fruits"
              className="h-[26rem] w-full object-cover sm:h-[32rem] lg:h-[36rem] animate-slow-zoom"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white/90 p-4 shadow-card backdrop-blur sm:-left-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-cream-50">
              <Sprout className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-base font-semibold text-brand-900">
                Carefully Graded
              </p>
              <p className="text-xs text-brand-800/70">
                Cleaned &amp; quality-checked
              </p>
            </div>
          </div>

          {/* Floating accent */}
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-cream-200/80 px-5 py-3 text-center shadow-soft backdrop-blur sm:block">
            <p className="font-display text-xl font-semibold text-brand-800">Nagercoil</p>
            <p className="text-[0.65rem] uppercase tracking-widest text-brand-700/70">
              Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
