'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { FiShoppingCart } from 'react-icons/fi';

interface AddToCartButtonProps {
  productId: string;
  variantId?: string;
  quantity?: number;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  showIcon?: boolean;
}

export default function AddToCartButton({
  productId,
  variantId,
  quantity = 1,
  disabled = false,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  showIcon = true,
}: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);

    try {
      // TODO: Implement cart store action
      // await cartStore.addItem({ productId, variantId, quantity });
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // TODO: Show success toast
      console.log('Added to cart:', { productId, variantId, quantity });
    } catch (error) {
      // TODO: Show error toast
      console.error('Failed to add to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      isLoading={isAdding}
      disabled={disabled}
      onClick={handleAddToCart}
      className="flex items-center justify-center"
    >
      {!isAdding && showIcon && <FiShoppingCart className="mr-2 h-4 w-4" />}
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </Button>
  );
}
