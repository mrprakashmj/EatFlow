"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { type FoodItem } from "@/data/menu";

export default function AddToCartForm({ item }: { item: FoodItem }) {
  const { addToCart, updateQuantity, cartItems, openCart } = useCart();
  const [localQuantity, setLocalQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const existingCartItem = cartItems.find((i) => i.item.slug === item.slug);
    
    if (existingCartItem) {
      updateQuantity(item.name, existingCartItem.quantity + localQuantity);
    } else {
      addToCart(item);
      if (localQuantity > 1) {
        updateQuantity(item.name, localQuantity);
      }
    }
    
    // Always open the cart sidebar when a user clicks "Add to Cart"
    openCart();

    // Give visual feedback by changing the button text temporarily
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-4">
        <span className="font-inter text-[18px] font-bold text-white">Quantity:</span>
        <input
          type="number"
          min="1"
          value={localQuantity}
          onChange={(e) => setLocalQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="h-[50px] w-[80px] border border-white/20 bg-transparent text-center font-inter text-[16px] text-white focus:border-orange focus:outline-none"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="flex h-[50px] w-[160px] items-center justify-center bg-orange px-8 font-inter text-[16px] font-bold text-white hover:bg-orange/90 transition-colors cursor-pointer"
      >
        {isAdded ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
}
