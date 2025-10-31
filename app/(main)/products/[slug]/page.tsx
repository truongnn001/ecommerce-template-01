import { notFound } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button/Button';
import Badge from '@/components/ui/Badge/Badge';
import AddToCartButton from '@/components/product/AddToCartButton/AddToCartButton';
import { formatPrice } from '@/lib/utils/formatters';

// Mock product data
const getProduct = (slug: string) => {
  const products: Record<string, any> = {
    'intensive-lash-brow-tint': {
      id: '1',
      slug: 'intensive-lash-brow-tint',
      name: 'Intensive Lash and Brow Tint for Professionals',
      price: 29.99,
      salePrice: 24.99,
      sku: 'INT-LBT-001',
      description: 'Professional-grade lash and brow tint for long-lasting, beautiful results.',
      features: [
        'Long-lasting formula',
        'Safe for sensitive eyes',
        'Available in multiple colors',
        'Easy to apply',
      ],
      images: ['/images/products/product-1.jpg'],
      rating: 4.8,
      reviewCount: 245,
      inStock: true,
      stock: 50,
    },
  };

  return products[slug] || null;
};

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <div className="container-custom py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Images */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[0] || '/images/placeholder-product.jpg'}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {discount > 0 && (
              <div className="absolute right-4 top-4">
                <Badge variant="success" size="lg">
                  -{discount}% OFF
                </Badge>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            {product.name}
          </h1>

          <div className="mb-4 flex items-center">
            <span className="mr-2 text-yellow-500">⭐ {product.rating}</span>
            <span className="text-sm text-gray-600">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="mb-4 text-sm text-gray-600">SKU: {product.sku}</div>

          <div className="mb-6 flex items-center space-x-3">
            {product.salePrice ? (
              <>
                <span className="text-3xl font-bold text-brand-purple-600">
                  {formatPrice(product.salePrice)}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {product.inStock ? (
            <Badge variant="success" className="mb-4">
              In Stock ({product.stock} available)
            </Badge>
          ) : (
            <Badge variant="error" className="mb-4">
              Out of Stock
            </Badge>
          )}

          <div className="mb-6">
            <h3 className="mb-2 font-semibold text-gray-900">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 font-semibold text-gray-900">Features</h3>
            <ul className="list-inside list-disc space-y-1 text-gray-600">
              {product.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <AddToCartButton
              productId={product.id}
              disabled={!product.inStock}
              size="lg"
              fullWidth
            />
            <Button variant="outline" size="lg" fullWidth>
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
