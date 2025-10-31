'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/product/ProductGrid/ProductGrid';
import ProductFilters from '@/components/product/ProductFilters/ProductFilters';
import ProductSort, { SortOption } from '@/components/product/ProductSort/ProductSort';
import ProductSearch from '@/components/product/ProductSearch/ProductSearch';
import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import Button from '@/components/ui/Button/Button';
import { FiFilter } from 'react-icons/fi';

interface ProductData {
  id: string;
  slug: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  inStock: boolean;
  category: string;
  brand: string;
  tags?: string[];
}

// Mock data - replace with API call
const mockProducts: ProductData[] = [
  {
    id: '1',
    slug: 'intensive-lash-brow-tint-black',
    name: 'Intensive Lash and Brow Tint - Black',
    price: 29.99,
    salePrice: 24.99,
    image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&h=400',
    rating: 4.8,
    reviewCount: 245,
    badge: 'Best Seller',
    inStock: true,
    category: 'Lash & Brow',
    brand: 'Intensive',
    tags: ['tinting', 'professional', 'vegan'],
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
    category: 'Waxing',
    brand: 'Cirepil',
    tags: ['wax', 'hard-wax', 'professional'],
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
    category: 'Skin Care',
    brand: 'Bio-Therapeutic',
    tags: ['equipment', 'facial', 'exfoliation'],
  },
  {
    id: '4',
    slug: 'disposable-headbands-48ct',
    name: 'Intrinsics Disposable Headbands, 48 ct',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400',
    rating: 4.6,
    reviewCount: 512,
    inStock: true,
    category: 'Skin Care',
    brand: 'Intrinsics',
    tags: ['disposable', 'headbands', 'accessories'],
  },
  {
    id: '5',
    slug: 'massage-table-sheet',
    name: 'Sposh Premium Waterproof Fitted Sheet',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400',
    rating: 4.8,
    reviewCount: 203,
    inStock: true,
    category: 'Massage',
    brand: 'Sposh',
    tags: ['massage', 'linens', 'waterproof'],
  },
  {
    id: '6',
    slug: 'esthetic-wipes-200ct',
    name: 'Intrinsics Silken Esthetic Wipes, 200 ct',
    price: 18.99,
    salePrice: 15.99,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400',
    rating: 4.7,
    reviewCount: 387,
    inStock: true,
    category: 'Skin Care',
    brand: 'Intrinsics',
    tags: ['wipes', 'disposable', 'facial'],
  },
  {
    id: '7',
    slug: 'nitrile-gloves-purple',
    name: 'Purple Nitrile Gloves, 100 ct',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&h=400',
    rating: 4.9,
    reviewCount: 892,
    inStock: true,
    category: 'Waxing',
    brand: 'Intrinsics',
    tags: ['gloves', 'nitrile', 'disposable'],
  },
  {
    id: '8',
    slug: 'massage-oil-lavender',
    name: 'ESS Lavender Massage Oil, 16 oz',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400',
    rating: 4.8,
    reviewCount: 156,
    badge: 'Popular',
    inStock: true,
    category: 'Massage',
    brand: 'ESS',
    tags: ['massage-oil', 'aromatherapy', 'lavender'],
  },
];

const filterGroups = [
  {
    id: 'category',
    title: 'Category',
    options: [
      { id: 'waxing', label: 'Waxing', count: 2 },
      { id: 'skin-care', label: 'Skin Care', count: 3 },
      { id: 'lash-brow', label: 'Lash & Brow', count: 1 },
      { id: 'massage', label: 'Massage', count: 2 },
      { id: 'makeup', label: 'Makeup', count: 0 },
    ],
  },
  {
    id: 'brand',
    title: 'Brand',
    options: [
      { id: 'cirepil', label: 'Cirepil', count: 1 },
      { id: 'intensive', label: 'Intensive', count: 1 },
      { id: 'intrinsics', label: 'Intrinsics', count: 3 },
      { id: 'bio-therapeutic', label: 'Bio-Therapeutic', count: 1 },
      { id: 'sposh', label: 'Sposh', count: 1 },
      { id: 'ess', label: 'ESS', count: 1 },
    ],
  },
  {
    id: 'price',
    title: 'Price Range',
    options: [
      { id: '0-25', label: 'Under $25', count: 4 },
      { id: '25-50', label: '$25 - $50', count: 3 },
      { id: '50-100', label: '$50 - $100', count: 0 },
      { id: '100+', label: '$100+', count: 1 },
    ],
  },
  {
    id: 'availability',
    title: 'Availability',
    options: [
      { id: 'in-stock', label: 'In Stock', count: 8 },
      { id: 'out-of-stock', label: 'Out of Stock', count: 0 },
    ],
  },
  {
    id: 'special',
    title: 'Special Offers',
    options: [
      { id: 'on-sale', label: 'On Sale', count: 3 },
      { id: 'new', label: 'New Arrivals', count: 1 },
      { id: 'best-seller', label: 'Best Sellers', count: 1 },
    ],
  },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const brandParam = searchParams.get('brand');

  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>(() => {
    const initial: Record<string, string[]> = {};
    if (categoryParam) initial.category = [categoryParam];
    if (brandParam) initial.brand = [brandParam];
    return initial;
  });
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = [...mockProducts];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedFilters.category?.length) {
      filtered = filtered.filter((p) =>
        selectedFilters.category.some(
          (cat) => p.category.toLowerCase().replace(/\s+/g, '-') === cat
        )
      );
    }

    // Brand filter
    if (selectedFilters.brand?.length) {
      filtered = filtered.filter((p) =>
        selectedFilters.brand.some((brand) => p.brand.toLowerCase() === brand)
      );
    }

    // Price filter
    if (selectedFilters.price?.length) {
      filtered = filtered.filter((p) => {
        const price = p.salePrice || p.price;
        return selectedFilters.price.some((range) => {
          if (range === '0-25') return price < 25;
          if (range === '25-50') return price >= 25 && price < 50;
          if (range === '50-100') return price >= 50 && price < 100;
          if (range === '100+') return price >= 100;
          return false;
        });
      });
    }

    // Availability filter
    if (selectedFilters.availability?.length) {
      filtered = filtered.filter((p) => {
        if (selectedFilters.availability.includes('in-stock')) return p.inStock;
        if (selectedFilters.availability.includes('out-of-stock')) return !p.inStock;
        return true;
      });
    }

    // Special offers filter
    if (selectedFilters.special?.length) {
      filtered = filtered.filter((p) => {
        if (selectedFilters.special.includes('on-sale') && p.salePrice) return true;
        if (selectedFilters.special.includes('new') && p.badge === 'New') return true;
        if (selectedFilters.special.includes('best-seller') && p.badge === 'Best Seller')
          return true;
        return false;
      });
    }

    return filtered;
  }, [mockProducts, selectedFilters, searchQuery]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortBy) {
      case 'newest':
        return sorted.reverse();
      case 'price-asc':
        return sorted.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
      case 'price-desc':
        return sorted.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  const handleFilterChange = (filterId: string, values: string[]) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: values,
    }));
  };

  const handleClearAll = () => {
    setSelectedFilters({});
    setSearchQuery('');
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">All Products</h1>
          <ProductSearch value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="mb-4 lg:hidden">
          <Button
            variant="outline"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full"
          >
            <FiFilter className="mr-2" />
            Filters {Object.values(selectedFilters).flat().length > 0 && `(${Object.values(selectedFilters).flat().length})`}
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showMobileFilters ? 'block' : 'hidden'
            } w-full lg:block lg:w-64 lg:flex-shrink-0`}
          >
            <ProductFilters
              filters={filterGroups}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAll}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Count */}
            <div className="mb-6">
              <ProductSort
                value={sortBy}
                onChange={setSortBy}
                totalProducts={sortedProducts.length}
              />
            </div>

            {/* Product Grid */}
            <ProductGrid products={sortedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
