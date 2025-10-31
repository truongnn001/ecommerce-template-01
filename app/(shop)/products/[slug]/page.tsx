'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb';
import Button from '@/components/ui/Button/Button';
import AddToCartButton from '@/components/product/AddToCartButton/AddToCartButton';
import ProductCard from '@/components/product/ProductCard/ProductCard';
import { FiHeart, FiShare2, FiStar } from 'react-icons/fi';

// Mock product data
const mockProduct = {
  id: '1',
  slug: 'spa-moments-shoulder-fan-wrap-b060',
  name: 'Spa Moments Shoulder Fan Wrap B060',
  sku: 'SHLDRFNPP1',
  price: 32.80,
  salePrice: 29.52,
  images: [
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=800',
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=800',
    'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&h=800',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=800',
  ],
  rating: 5,
  reviewCount: 2,
  inStock: true,
  stock: 50,
  description: `LIMITED-TIME OFFER-WHILE SUPPLIES LAST!

Purchase one Shoulder Fan Wrap and Get one FREE ($33.18 value)! Discounts up to $133.01 in retail revenue. 10% card while supplies last.

Like a big shawl on a lovely spa's body, her soft back plush and lavender's that help relax. You feel like shoulder wrap delivers tried and true comfort for your clients. Perfectly proportioned and weighted, find an excellent portion of blank headrest around kerby for relaxation.`,
  features: [
    'Hot Therapy: Heat in the microwave on high for 1 minute. Test the desired temperature. If more warmth is needed, heat in 10-second intervals, allowing heats to reach throughout before use.',
    'Cold Therapy: Herbal wraps can be cooled by placing them in the freezer (depending on the size of the wrap, it can take up to 3 hours for them to become temperature).',
  ],
  ingredients: 'Flaxseed, Millet, Lavender Flower, Chamomile Flower, Spearmint Leaf, Peppermint Leaf, Lemongrass Leaf, Rosemary Leaf, and Cinnamon Bark.',
  category: 'Massage',
  brand: 'Spa Moments',
  colors: ['Cream', 'Green', 'Blue', 'Purple'],
};

const relatedProducts = [
  {
    id: '2',
    slug: 'eye-pillow',
    name: 'Kozi Rejuvenating Eye Pillow, Kohl Teal',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400',
    rating: 4.8,
    reviewCount: 45,
    inStock: true,
  },
  {
    id: '3',
    slug: 'c-neck-wrap',
    name: 'Spa Moments C-Neck Wrap B059',
    price: 24.06,
    salePrice: 21.65,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400',
    rating: 4.9,
    reviewCount: 32,
    badge: 'Sale 10%',
    inStock: true,
  },
  {
    id: '4',
    slug: 'shower-burst',
    name: 'hydraAROMATHERAPY Shower Burst Trio: Winter',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&h=400',
    rating: 4.7,
    reviewCount: 28,
    inStock: true,
  },
  {
    id: '5',
    slug: 'quilted-neck-wrap',
    name: 'Spa Moments Quilted C-Neck Wrap',
    price: 22.50,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400',
    rating: 4.8,
    reviewCount: 19,
    inStock: true,
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'reviews'>('details');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: mockProduct.category, href: `/categories/${mockProduct.category.toLowerCase()}` },
    { label: mockProduct.name },
  ];

  const discount = mockProduct.salePrice
    ? Math.round(((mockProduct.price - mockProduct.salePrice) / mockProduct.price) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Product Info */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
              {mockProduct.salePrice && (
                <div className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                  Save {discount}%
                </div>
              )}
              <Image
                src={mockProduct.images[selectedImage]}
                alt={mockProduct.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? 'border-brand-purple-600 ring-2 ring-brand-purple-600 ring-offset-2'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image src={image} alt={`${mockProduct.name} ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-sm text-gray-600">Spa Products |</span>
                <span className="text-sm font-medium text-brand-purple-600">{mockProduct.sku}</span>
              </div>
              <h1 className="mb-4 text-3xl font-bold text-gray-900">{mockProduct.name}</h1>

              {/* Rating */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < mockProduct.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{mockProduct.reviewCount} Reviews</span>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${mockProduct.salePrice?.toFixed(2) || mockProduct.price.toFixed(2)}
                </span>
                {mockProduct.salePrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${mockProduct.price.toFixed(2)}</span>
                    <span className="text-sm font-semibold text-red-600">Save {discount}%</span>
                  </>
                )}
              </div>

              {/* Compare Price */}
              {mockProduct.salePrice && (
                <p className="mb-4 text-sm text-gray-600">
                  Compare at <span className="font-medium">${(mockProduct.price * 1.3).toFixed(2)}</span>
                </p>
              )}
            </div>

            {/* Color Selection */}
            <div>
              <label className="mb-3 block text-sm font-medium text-gray-900">
                COLOR
              </label>
              <div className="flex gap-3">
                {mockProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-12 w-12 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-brand-purple-600 ring-2 ring-brand-purple-600 ring-offset-2'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{
                      backgroundColor:
                        color === 'Cream' ? '#F5F5DC' :
                        color === 'Green' ? '#90EE90' :
                        color === 'Blue' ? '#87CEEB' :
                        '#DDA0DD'
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="mb-3 block text-sm font-medium text-gray-900">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-md border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 border-x border-gray-300 py-2 text-center"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <AddToCartButton
                productId={mockProduct.id}
                quantity={quantity}
                fullWidth
                size="lg"
              />

              <div className="flex gap-3">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-3 text-gray-700 hover:bg-gray-50">
                  <FiHeart className="h-5 w-5" />
                  Add to Wishlist
                </button>
                <button className="flex items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-3 text-gray-700 hover:bg-gray-50">
                  <FiShare2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Stock Info */}
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-600">
                This item could benefit more! <Link href="#" className="text-brand-purple-600 hover:underline">View Details</Link>
              </p>
            </div>

            {/* Note */}
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This item has special return policy. <Link href="#" className="text-brand-purple-600 hover:underline">View Policy →</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('details')}
                className={`border-b-2 pb-4 text-sm font-medium transition-colors ${
                  activeTab === 'details'
                    ? 'border-brand-purple-600 text-brand-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`border-b-2 pb-4 text-sm font-medium transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-brand-purple-600 text-brand-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Customer Reviews
              </button>
            </div>
          </div>

          <div className="mt-8">
            {activeTab === 'details' && (
              <div className="prose max-w-none">
                <div className="mb-6">
                  <p className="whitespace-pre-line text-gray-700">{mockProduct.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">USAGE INSTRUCTIONS</h3>
                  <ul className="space-y-2 text-gray-700">
                    {mockProduct.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">INGREDIENTS</h3>
                  <p className="text-gray-700">{mockProduct.ingredients}</p>
                  <p className="mt-2 text-sm italic text-gray-600">
                    *Only valid while supplies last. Cannot mix and match colors or products. When you purchase this promotional SKU you'll receive two products for the price of one.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {/* Review Summary */}
                <div className="flex items-center gap-8 rounded-lg bg-gray-50 p-6">
                  <div className="text-center">
                    <div className="mb-2 text-5xl font-bold text-gray-900">{mockProduct.rating}</div>
                    <div className="flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`h-5 w-5 ${
                            i < mockProduct.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">Based on {mockProduct.reviewCount} reviews</p>
                  </div>
                  <Button>Write a Review</Button>
                </div>

                {/* Reviews */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium text-gray-900">Great buy!</span>
                    </div>
                    <p className="mb-3 text-gray-700">
                      These are a great buy for cheap. They wrap is a lot for Mother's Day, so I'm buying them with some for the holidays!
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">ELIZABETH</span>
                      <span>•</span>
                      <span>10/12/25</span>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium text-gray-900">Exceptional must-have purchase!</span>
                    </div>
                    <p className="mb-3 text-gray-700">
                      The Spa Moments Shoulder Fan Wrap is an exceptional purchase every esthetician, spa or salon professional should own. It provides a comforting and secure sensation that helps melt away stress. Whether used for resting or as a warm wrap during professional spa treatments, the Shoulder Fan Wrap is a must... Read more
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Patricia</span>
                      <span>•</span>
                      <span>03/19/25</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Related Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
