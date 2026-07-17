"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import type { FoodItem } from "@/data/menu";

export type CartItem = {
  item: FoodItem;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: FoodItem) => void;
  removeFromCart: (itemName: string) => void;
  updateQuantity: (itemName: string, quantity: number) => void;
  toggleCart: () => void;
  openCart: () => void;
  cartTotal: number;
  itemCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: FoodItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.item.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.item.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsCartOpen(true); // Open cart when adding an item
  };

  const removeFromCart = (itemName: string) => {
    setCartItems((prev) => prev.filter((i) => i.item.name !== itemName));
  };

  const updateQuantity = (itemName: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((i) => (i.item.name === itemName ? { ...i, quantity } : i))
    );
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const openCart = () => setIsCartOpen(true);

  const itemCount = cartItems.reduce((total, i) => total + i.quantity, 0);

  const cartTotal = cartItems.reduce((total, i) => {
    // Parse the price like "$ 42.85 USD" -> 42.85
    const priceStr = i.item.price.replace(/[^0-9.]/g, "");
    const price = parseFloat(priceStr) || 0;
    return total + price * i.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        openCart,
        cartTotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
