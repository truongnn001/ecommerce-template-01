import Link from 'next/link';

interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
}

const brands: Brand[] = [
  {
    id: '1',
    name: 'Cirepil',
    slug: 'cirepil',
    tagline: 'Premium Wax Products',
  },
  {
    id: '2',
    name: 'Bio-Therapeutic',
    slug: 'bio-therapeutic',
    tagline: 'Advanced Skincare',
  },
  {
    id: '3',
    name: 'Intensive',
    slug: 'intensive',
    tagline: 'Professional Tinting',
  },
  {
    id: '4',
    name: 'Complete Pro',
    slug: 'complete-pro',
    tagline: 'Salon Essentials',
  },
  {
    id: '5',
    name: 'Moor Spa',
    slug: 'moor-spa',
    tagline: 'Natural Body Care',
  },
  {
    id: '6',
    name: 'ESS Aromatherapy',
    slug: 'ess-aromatherapy',
    tagline: 'Essential Oils',
  },
];

const brandColors = [
  'bg-brand-purple-600',
  'bg-brand-green-600',
  'bg-brand-blue-600',
  'bg-yellow-500',
  'bg-pink-600',
  'bg-purple-600',
];

export default function BrandShowcase() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Shop Popular Spa & Salon Brands
          </h2>
          <p className="text-lg text-gray-600">
            You can count on these brands to provide reliability, value, and superb performance
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.slug}`}
              className="group flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-20 w-full items-center justify-center">
                <div className={`flex h-16 w-full items-center justify-center rounded ${brandColors[index]} text-white`}>
                  <span className="text-xs font-bold text-center px-2">{brand.name}</span>
                </div>
              </div>
              <p className="text-center text-xs text-gray-600">{brand.tagline}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/brands"
            className="text-brand-purple-600 hover:text-brand-purple-700"
          >
            See all brands →
          </Link>
        </div>
      </div>
    </section>
  );
}
