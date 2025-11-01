import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import Button from '@/components/ui/Button/Button';
import FadeInSection from '@/components/ui/FadeInSection/FadeInSection';
import ProductCard from '@/components/product/ProductCard/ProductCard';

const dealCategories = [
  { id: 'all', name: 'All Deals', count: 127 },
  { id: 'clearance', name: 'Clearance', count: 45 },
  { id: 'weekly-specials', name: 'Weekly Specials', count: 23 },
  { id: 'bulk-discounts', name: 'Bulk Discounts', count: 34 },
  { id: 'new-customer', name: 'New Customer Offers', count: 12 },
  { id: 'seasonal', name: 'Seasonal Sales', count: 13 },
];

const featuredDeals = [
  {
    id: '1',
    slug: 'cirepil-hard-wax-bundle',
    name: 'Cirepil Hard Wax Bundle - Save 30%',
    price: 129.99,
    salePrice: 89.99,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&h=400',
    rating: 4.9,
    reviewCount: 234,
    badge: 'Limited Time',
    inStock: true,
  },
  {
    id: '2',
    slug: 'massage-oil-collection',
    name: 'ESS Aromatherapy Massage Oil Collection',
    price: 149.99,
    salePrice: 99.99,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400',
    rating: 4.8,
    reviewCount: 189,
    badge: 'Best Value',
    inStock: true,
  },
  {
    id: '3',
    slug: 'facial-steamer-sale',
    name: 'Professional Facial Steamer - 40% Off',
    price: 399.99,
    salePrice: 239.99,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400',
    rating: 4.7,
    reviewCount: 156,
    badge: 'Clearance',
    inStock: true,
  },
  {
    id: '4',
    slug: 'lash-extension-kit',
    name: 'Complete Lash Extension Starter Kit',
    price: 299.99,
    salePrice: 199.99,
    image: 'https://images.unsplash.com/photo-1583001992068-705744915b0e?w=400&h=400',
    rating: 4.9,
    reviewCount: 312,
    badge: 'Hot Deal',
    inStock: true,
  },
  {
    id: '5',
    slug: 'disposable-supplies-pack',
    name: 'Intrinsics Disposable Supplies Value Pack',
    price: 79.99,
    salePrice: 49.99,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400',
    rating: 4.6,
    reviewCount: 421,
    badge: 'Save 37%',
    inStock: true,
  },
  {
    id: '6',
    slug: 'pedicure-spa-package',
    name: 'Deluxe Pedicure Spa Package',
    price: 599.99,
    salePrice: 449.99,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400',
    rating: 4.8,
    reviewCount: 178,
    badge: 'Bundle Deal',
    inStock: true,
  },
  {
    id: '7',
    slug: 'skin-care-bundle',
    name: 'Professional Skin Care Treatment Bundle',
    price: 349.99,
    salePrice: 249.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400',
    rating: 4.9,
    reviewCount: 267,
    badge: 'Staff Pick',
    inStock: true,
  },
  {
    id: '8',
    slug: 'wax-warmer-combo',
    name: 'Double Wax Warmer Station + Free Wax',
    price: 249.99,
    salePrice: 179.99,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&h=400',
    rating: 4.7,
    reviewCount: 193,
    badge: 'Free Gift',
    inStock: true,
  },
];

const banners = [
  {
    title: 'Flash Sale - 50% Off Select Items',
    description: "Limited quantities available. Hurry before they're gone!",
    cta: 'Shop Flash Sale',
    href: '/products?sale=flash',
    bgColor: 'from-red-600 to-pink-600',
  },
  {
    title: 'Free Shipping on Orders $199+',
    description: 'Stock up and save on shipping. Offer valid through this week.',
    cta: 'Shop Now',
    href: '/products',
    bgColor: 'from-purple-600 to-blue-600',
  },
  {
    title: 'Bulk Buy & Save Up to 40%',
    description: 'The more you buy, the more you save. Perfect for busy salons.',
    cta: 'View Bulk Deals',
    href: '/products?category=bulk-discounts',
    bgColor: 'from-green-600 to-teal-600',
  },
];

export default function DealsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Save Now!', href: '/deals' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-pink-600 py-16 text-white">
        <div className="container-custom">
          <FadeInSection>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Save Now!</h1>
            <p className="mb-8 max-w-2xl text-lg text-red-100">
              Discover amazing deals on professional spa and salon products. Limited time offers,
              clearance items, and exclusive bundles - all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                Shop All Deals
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                Sign Up for Deal Alerts
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>

      <div className="container-custom py-12">
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        {/* Promotional Banners */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {banners.map((banner, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <Link
                href={banner.href}
                className={`group block rounded-2xl bg-gradient-to-br ${banner.bgColor} p-6 text-white shadow-lg transition-all hover:shadow-2xl`}
              >
                <h3 className="mb-2 text-xl font-bold">{banner.title}</h3>
                <p className="mb-4 text-sm opacity-90">{banner.description}</p>
                <span className="inline-flex items-center font-semibold">
                  {banner.cta}
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </span>
              </Link>
            </FadeInSection>
          ))}
        </div>

        {/* Deal Categories */}
        <FadeInSection>
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              {dealCategories.map((category) => (
                <button
                  key={category.id}
                  className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-md transition-all hover:bg-brand-purple-600 hover:text-white hover:shadow-lg"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Featured Deals */}
        <div className="mb-12">
          <FadeInSection>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Today's Best Deals</h2>
              <div className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                ⏰ Ending Soon
              </div>
            </div>
          </FadeInSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDeals.map((product, index) => (
              <FadeInSection key={product.id} delay={index * 50}>
                <ProductCard product={product} />
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Deal of the Week */}
        <FadeInSection>
          <div className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 to-purple-700 shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600"
                  alt="Deal of the Week"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-white md:p-12">
                <div className="mb-4 inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-purple-900">
                  DEAL OF THE WEEK
                </div>
                <h2 className="mb-4 text-3xl font-bold">
                  Complete Spa Equipment Package
                </h2>
                <p className="mb-6 text-lg text-purple-100">
                  Everything you need to start or upgrade your spa. Includes facial steamer,
                  magnifying lamp, treatment table, and more. Limited quantities!
                </p>
                <div className="mb-6">
                  <span className="mr-4 text-4xl font-bold">$2,499</span>
                  <span className="text-xl text-purple-300 line-through">$4,299</span>
                  <span className="ml-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold">
                    Save $1,800
                  </span>
                </div>
                <Button size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300">
                  Claim This Deal
                </Button>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Newsletter Signup */}
        <FadeInSection>
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Never Miss a Deal
            </h2>
            <p className="mb-6 text-gray-600">
              Sign up for our newsletter and be the first to know about exclusive offers, flash
              sales, and new product launches.
            </p>
            <div className="mx-auto flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-purple-500 focus:outline-none focus:ring-2 focus:ring-brand-purple-500/20"
              />
              <Button size="lg">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
