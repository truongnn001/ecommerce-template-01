'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=600',
    title: 'Professional Spa & Salon Supplies',
    description: 'Everything you need for your spa and salon business',
    ctaText: 'Shop Now',
    ctaLink: '/products',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&h=600',
    title: 'Premium Equipment & Tools',
    description: 'Industry-leading equipment for professionals',
    ctaText: 'Explore Equipment',
    ctaLink: '/categories/spa-equipment',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=1200&h=600',
    title: 'Professional Education',
    description: 'Free courses and certifications for spa professionals',
    ctaText: 'Learn More',
    ctaLink: '/learning',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-gray-900 lg:h-[600px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="container-custom relative flex h-full items-center">
            <div className="max-w-2xl text-white">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mb-8 text-lg md:text-xl">{slide.description}</p>
              <Link href={slide.ctaLink}>
                <Button size="lg" className="bg-white text-brand-purple-600 hover:bg-gray-100">
                  {slide.ctaText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
