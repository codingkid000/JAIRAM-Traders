import { Award, HeartHandshake, Truck, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Quality-Focused Products',
    desc: 'Every batch is cleaned and graded so customers receive consistent, dependable quality.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Satisfaction',
    desc: 'We value long-term relationships and take pride in attentive, personal service.',
  },
  {
    icon: Truck,
    title: 'Reliable Service',
    desc: 'Timely communication and dependable supply for both retail and bulk requirements.',
  },
  {
    icon: Briefcase,
    title: 'Professional Approach',
    desc: 'Years of trading experience backed by honest, straightforward business practices.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal section-eyebrow justify-center">
            Why Choose Us
          </span>
          <h2 className="reveal mt-4 section-title">
            A Trusted Name in Edible Seeds
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-brand-800/75">
            What sets Jairam Traders apart is a consistent commitment to quality
            and genuine customer care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-700 text-cream-50 shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <f.icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-brand-950">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-800/75">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
