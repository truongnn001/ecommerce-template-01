import Link from 'next/link';
import Button from '@/components/ui/Button/Button';

export default function CartPage() {
  return (
    <div className="container-custom py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Shopping Cart</h1>

      {/* Empty Cart State */}
      <div className="rounded-lg bg-white p-12 text-center shadow-sm">
        <div className="mb-4 text-6xl">🛒</div>
        <h2 className="mb-2 text-xl font-semibold text-gray-900">
          Your cart is empty
        </h2>
        <p className="mb-6 text-gray-600">
          Add some products to get started!
        </p>
        <Link href="/products">
          <Button size="lg">Continue Shopping</Button>
        </Link>
      </div>

      {/* Cart Summary (placeholder) */}
      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Order Summary
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping:</span>
            <span>$0.00</span>
          </div>
          <div className="border-t pt-2">
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total:</span>
              <span>$0.00</span>
            </div>
          </div>
        </div>
        <Button fullWidth size="lg" className="mt-6" disabled>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
