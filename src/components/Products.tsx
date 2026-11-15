import { Sprout } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Products() {
  return (
    <section id="products" className="bg-gradient-to-b from-cream-100 to-cream-50 py-20 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal section-eyebrow justify-center">
            <Sprout className="h-4 w-4" />
            Our Products
          </span>
          <h2 className="reveal mt-4 section-title">
            Explore Our Edible Seeds
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-brand-800/75">
            A curated range of quality edible seeds — cleaned, graded and ready
            for homes, retailers and bulk buyers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="reveal">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
