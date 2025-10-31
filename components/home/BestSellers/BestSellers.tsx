'use client';

import { useState } from 'react';
import ProductCard from '@/components/product/ProductCard/ProductCard';

const bestSellers = [
  {
    id: '1',
    slug: 'intensive-lash-brow-tint',
    name: 'Intensive Lash and Brow Tint for Professionals',
    price: 29.99,
    salePrice: 24.99,
    image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&h=400',
    rating: 4.8,
    reviewCount: 245,
    badge: 'Best Seller',
    inStock: true,
  },
  {
    id: '2',
    slug: 'cirepil-hard-wax-blue',
    name: 'Cirepil Hard Wax Beads, Blue',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&h=400',
    rating: 4.9,
    reviewCount: 189,
    inStock: true,
  },
  {
    id: '3',
    slug: 'bio-therapeutic-ultrasonic',
    name: 'Bio-Therapeutic bt-micro® Ultrasonic Exfoliation',
    price: 299.99,
    salePrice: 249.99,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400',
    rating: 4.7,
    reviewCount: 156,
    badge: 'New',
    inStock: true,
  },
  {
    id: '4',
    slug: 'disposable-headbands',
    name: 'Intrinsics Disposable Headbands, 48 ct',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400',
    rating: 4.6,
    reviewCount: 512,
    inStock: true,
  },
  {
    id: '5',
    slug: 'massage-table-sheet',
    name: 'Sposh Premium Waterproof Fitted Sheet for Massage Tables',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400',
    rating: 4.8,
    reviewCount: 203,
    inStock: true,
  },
  {
    id: '6',
    slug: 'esthetic-wipes',
    name: 'Intrinsics Silken Esthetic Wipes, 200 ct',
    price: 18.99,
    salePrice: 15.99,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400',
    rating: 4.7,
    reviewCount: 387,
    inStock: true,
  },
];

export default function BestSellers() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/40 blur-3xl" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-blue-200/40 to-green-200/40 blur-3xl" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-600">
            Our most popular products trusted by professionals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {bestSellers.map((product, index) => (
            <div
              key={product.id}
              className="transform transition-all duration-500"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`,
              }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`transition-transform duration-300 ${
                  hoveredId === product.id ? 'scale-105' : 'scale-100'
                }`}
              >
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/products?filter=best-sellers"
            className="group inline-flex items-center rounded-lg bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>View All Best Sellers</span>
            <svg
              className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.85) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
