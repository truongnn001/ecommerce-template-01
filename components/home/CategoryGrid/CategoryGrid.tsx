'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Waxing',
    slug: 'waxing',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&h=300',
    description: 'Professional waxing products and supplies',
  },
  {
    id: '2',
    name: 'Skin Care',
    slug: 'skin-care',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300',
    description: 'Premium skincare products for professionals',
  },
  {
    id: '3',
    name: 'Lash & Brow',
    slug: 'lash-brow',
    image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&h=300',
    description: 'Lash extensions, tints, and brow products',
  },
  {
    id: '4',
    name: 'Massage',
    slug: 'massage',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300',
    description: 'Massage oils, tools, and equipment',
  },
  {
    id: '5',
    name: 'Manicure & Pedicure',
    slug: 'manicure-pedicure',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&h=300',
    description: 'Complete nail care solutions',
  },
  {
    id: '6',
    name: 'Makeup',
    slug: 'makeup',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=300',
    description: 'Professional makeup products',
  },
];

export default function CategoryGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 py-16">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600">
            Browse our comprehensive selection of spa and salon categories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                
                {/* Shimmer effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ${
                    hoveredId === category.id ? 'translate-x-full' : '-translate-x-full'
                  }`}
                />
              </div>

              <div className="relative p-6 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-pink-50">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-transform duration-300 group-hover:scale-105">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>

                <div className="mt-4 flex items-center text-brand-purple-600 transition-all duration-300 group-hover:text-brand-purple-700">
                  <span className="text-sm font-medium">Shop Now</span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-xl border-2 border-brand-purple-400/50 animate-pulse" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/categories"
            className="group inline-flex items-center rounded-lg border-2 border-brand-purple-600 bg-white px-8 py-3 font-medium text-brand-purple-600 transition-all duration-300 hover:bg-brand-purple-600 hover:text-white hover:shadow-lg"
          >
            <span>View All Categories</span>
            <svg 
              className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
