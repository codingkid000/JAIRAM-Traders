import { MessageCircle } from 'lucide-react';
import type { Product } from '@/data/products';
import { business } from '@/data/products';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const enquiryText = `Hello Jairam Traders, I'd like to enquire about ${product.name}.`;
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(enquiryText)}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-brand-700 backdrop-blur">
          {product.tagline}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-brand-950">
          {product.name}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-brand-800/75">
          {product.description}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-brand-700/25 bg-brand-50/50 px-5 py-2.5 text-sm font-semibold text-brand-700 transition-all duration-300 hover:border-brand-700 hover:bg-brand-700 hover:text-cream-50"
        >
          <MessageCircle className="h-4 w-4" />
          Enquire Now
        </a>
      </div>
    </article>
  );
}
