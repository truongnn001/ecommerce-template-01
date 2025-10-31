'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
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

// Mock data - same as products page
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
    category: 'lash-brow',
    brand: 'intensive',
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
    category: 'waxing',
    brand: 'cirepil',
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
    category: 'skin-care',
    brand: 'bio-therapeutic',
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
    category: 'skin-care',
    brand: 'intrinsics',
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
    category: 'massage',
    brand: 'sposh',
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
    category: 'skin-care',
    brand: 'intrinsics',
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
    category: 'waxing',
    brand: 'intrinsics',
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
    category: 'massage',
    brand: 'ess',
    tags: ['massage-oil', 'aromatherapy', 'lavender'],
  },
];

const brandNames: Record<string, string> = {
  cirepil: 'Cirepil',
  intensive: 'Intensive',
  intrinsics: 'Intrinsics',
  'bio-therapeutic': 'Bio-Therapeutic',
  sposh: 'Sposh',
  ess: 'ESS Aromatherapy',
};

const filterGroups = [
  {
    id: 'category',
    title: 'Category',
    options: [
      { id: 'waxing', label: 'Waxing' },
      { id: 'skin-care', label: 'Skin Care' },
      { id: 'lash-brow', label: 'Lash & Brow' },
      { id: 'massage', label: 'Massage' },
      { id: 'manicure-pedicure', label: 'Manicure & Pedicure' },
      { id: 'makeup', label: 'Makeup' },
    ],
  },
  {
    id: 'price',
    title: 'Price Range',
    options: [
      { id: '0-25', label: 'Under $25' },
      { id: '25-50', label: '$25 - $50' },
      { id: '50-100', label: '$50 - $100' },
      { id: '100+', label: '$100+' },
    ],
  },
  {
    id: 'availability',
    title: 'Availability',
    options: [
      { id: 'in-stock', label: 'In Stock' },
      { id: 'out-of-stock', label: 'Out of Stock' },
    ],
  },
  {
    id: 'special',
    title: 'Special Offers',
    options: [
      { id: 'on-sale', label: 'On Sale' },
      { id: 'new', label: 'New Arrivals' },
      { id: 'best-seller', label: 'Best Sellers' },
    ],
  },
];

export default function BrandPage() {
  const params = useParams();
  const brandSlug = params.slug as string;
  const brandName = brandNames[brandSlug] || brandSlug;

  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter products by brand
  const brandProducts = useMemo(() => {
    return mockProducts.filter((p) => p.brand === brandSlug);
  }, [brandSlug]);

  // Apply additional filters
  const filteredProducts = useMemo(() => {
    let filtered = [...brandProducts];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedFilters.category?.length) {
      filtered = filtered.filter((p) =>
        selectedFilters.category.some((cat) => p.category === cat)
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
  }, [brandProducts, selectedFilters, searchQuery]);

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
    { label: 'Brands', href: '/brands' },
    { label: brandName },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">{brandName}</h1>
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
            Filters{' '}
            {Object.values(selectedFilters).flat().length > 0 &&
              `(${Object.values(selectedFilters).flat().length})`}
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
