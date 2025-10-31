import ProductCard from '@/components/product/ProductCard/ProductCard';
import FiltersSidebar from '@/components/product/FiltersSidebar/FiltersSidebar';

// Mock data
const mockProducts = [
  {
    id: '1',
    slug: 'intensive-lash-brow-tint',
    name: 'Intensive Lash and Brow Tint for Professionals',
    price: 29.99,
    salePrice: 24.99,
    image: '/images/products/product-1.jpg',
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
    image: '/images/products/product-2.jpg',
    rating: 4.9,
    reviewCount: 189,
    inStock: true,
  },
  {
    id: '3',
    slug: 'disposable-headbands',
    name: 'Intrinsics Disposable Headbands, 48 ct',
    price: 12.99,
    image: '/images/products/product-3.jpg',
    rating: 4.7,
    reviewCount: 512,
    inStock: true,
  },
];

const mockFilters = [
  {
    name: 'Category',
    options: [
      { id: 'skin-care', label: 'Skin Care', count: 245 },
      { id: 'lash-brow', label: 'Lash & Brow', count: 89 },
      { id: 'massage', label: 'Massage', count: 156 },
      { id: 'waxing', label: 'Waxing', count: 78 },
    ],
  },
  {
    name: 'Brand',
    options: [
      { id: 'intensive', label: 'Intensive', count: 34 },
      { id: 'cirepil', label: 'Cirepil', count: 28 },
      { id: 'intrinsics', label: 'Intrinsics', count: 45 },
    ],
  },
  {
    name: 'Tags',
    options: [
      { id: 'vegan', label: 'Vegan', count: 120 },
      { id: 'cruelty-free', label: 'Cruelty-Free', count: 98 },
      { id: 'paraben-free', label: 'Paraben-Free', count: 156 },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">All Products</h1>
        <p className="text-gray-600">
          Browse our complete collection of professional spa and salon products
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64">
          <div className="sticky top-24">
            <FiltersSidebar filters={mockFilters} />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">Showing {mockProducts.length} products</p>
            <select className="input w-48">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Best Selling</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
