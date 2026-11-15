import { CheckCircle2, Leaf } from 'lucide-react';

const points = [
  'Carefully sourced and graded seeds',
  'Long-standing relationships with growers',
  'Reliable, on-time trading services',
  'Personalised customer attention',
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <img
              src="https://images.pexels.com/photos/29219216/pexels-photo-29219216.jpeg?auto=compress&cs=tinysrgb&h=900&w=940"
              alt="Assorted nuts and seeds displayed at a market"
              className="h-[28rem] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-cream-50 shadow-card sm:block">
            <img
              src="https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
              alt="Bags of grains and spices"
              className="h-32 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -left-5 top-8 hidden rounded-2xl bg-brand-700 px-6 py-5 text-cream-50 shadow-card sm:block">
            <p className="font-display text-3xl font-semibold">13+</p>
            <p className="text-xs uppercase tracking-widest text-cream-200">
              Years of Trust
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <span className="reveal section-eyebrow">
            <Leaf className="h-4 w-4" />
            About Us
          </span>
          <h2 className="reveal mt-4 section-title">
            About Jairam Traders
          </h2>
          <div className="reveal mt-6 space-y-5 text-base leading-relaxed text-brand-800/85">
            <p>
              Jairam Traders is a trusted name in the edible seeds trade, based
              in Nagercoil, Kanyakumari District. Since 2012, we have been
              supplying households, retailers and businesses with carefully
              sourced seeds that meet a consistent standard of quality.
            </p>
            <p>
              Our focus is simple — deliver clean, well-graded seeds while
              building lasting relationships with every customer. From everyday
              kitchen staples to bulk trading requirements, we take pride in a
              dependable, personal approach to business.
            </p>
          </div>

          <ul className="reveal mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl bg-brand-50/60 px-4 py-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-sm font-medium text-brand-800">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
