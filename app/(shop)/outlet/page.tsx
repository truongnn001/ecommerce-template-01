import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import FadeInSection from '@/components/ui/FadeInSection/FadeInSection';
import ProductCard from '@/components/product/ProductCard/ProductCard';

const clearanceItems = [
  {
    id: '1',
    slug: 'facial-steamer-outlet',
    name: 'Professional Facial Steamer - Floor Model',
    price: 399.99,
    salePrice: 199.99,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400',
    rating: 4.7,
    reviewCount: 89,
    badge: '50% OFF',
    inStock: true,
  },
  {
    id: '2',
    slug: 'massage-table-outlet',
    name: 'Hydraulic Massage Table - Discontinued Color',
    price: 899.99,
    salePrice: 549.99,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400',
    rating: 4.8,
    reviewCount: 134,
    badge: 'Clearance',
    inStock: true,
  },
  {
    id: '3',
    slug: 'wax-warmer-outlet',
    name: 'Double Wax Warmer - Last Units',
    price: 249.99,
    salePrice: 149.99,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&h=400',
    rating: 4.6,
    reviewCount: 67,
    badge: 'Final Sale',
    inStock: true,
  },
  {
    id: '4',
    slug: 'pedicure-chair-outlet',
    name: 'Luxury Pedicure Chair - Display Model',
    price: 1999.99,
    salePrice: 1299.99,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400',
    rating: 4.9,
    reviewCount: 45,
    badge: 'Like New',
    inStock: true,
  },
];

export default function OutletPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'UCo Outlet', href: '/outlet' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-16 text-white">
        <div className="container-custom">
          <FadeInSection>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">UCo Outlet</h1>
            <p className="max-w-2xl text-lg text-red-100">
              Huge savings on clearance items, floor models, and discontinued products. Limited
              quantities available - shop now before they're gone!
            </p>
          </FadeInSection>
        </div>
      </div>

      <div className="container-custom py-12">
        <Breadcrumb items={breadcrumbItems} className="mb-12" />

        <FadeInSection>
          <div className="mb-8 rounded-xl bg-yellow-50 border-2 border-yellow-200 p-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-900">Important Outlet Information</h3>
                <p className="mt-1 text-sm text-yellow-800">
                  All outlet items are final sale and cannot be returned or exchanged. Products may
                  be floor models, discontinued items, or packaging refreshes. All items are tested
                  and guaranteed to work properly.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className="mb-12">
          <FadeInSection>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Featured Clearance Items</h2>
          </FadeInSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clearanceItems.map((product, index) => (
              <FadeInSection key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </FadeInSection>
            ))}
          </div>
        </div>

        <FadeInSection>
          <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Get Notified of New Outlet Deals</h2>
            <p className="mb-6 text-lg text-purple-100">
              Sign up for our outlet alert emails and be the first to know when new clearance items
              are added.
            </p>
            <div className="mx-auto flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 text-gray-900"
              />
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-purple-600 hover:bg-purple-50">
                Subscribe
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
