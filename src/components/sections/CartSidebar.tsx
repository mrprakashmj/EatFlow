"use client";

import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartSidebar() {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-[450px] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-hairline/20 px-8 py-6">
          <h2 className="font-ubuntu text-[24px] font-bold text-ink">Your Cart</h2>
          <button
            onClick={toggleCart}
            className="text-ink hover:text-orange transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {cartItems.length === 0 ? (
            <p className="text-ink/60 text-center mt-10">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((cartItem) => (
                <div key={cartItem.item.name} className="flex gap-4 border-b border-hairline/20 pb-6 last:border-b-0 last:pb-0">
                  <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-1 flex-col justify-center">
                    <h4 className="font-inter text-[15px] font-bold text-ink">{cartItem.item.name}</h4>
                    <p className="font-inter text-[14px] text-ink/70 mt-1">{cartItem.item.price}</p>
                    <button 
                      onClick={() => removeFromCart(cartItem.item.name)}
                      className="text-left font-inter text-[13px] text-blue-500 hover:text-blue-700 mt-1 transition-colors cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-8 items-center rounded border border-hairline/30 bg-white">
                      <button
                        onClick={() => updateQuantity(cartItem.item.name, cartItem.quantity - 1)}
                        className="flex h-full w-8 items-center justify-center text-ink/60 hover:text-ink transition-colors cursor-pointer"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="flex h-full w-8 items-center justify-center font-inter text-[14px] font-medium text-ink">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(cartItem.item.name, cartItem.quantity + 1)}
                        className="flex h-full w-8 items-center justify-center text-ink/60 hover:text-ink transition-colors cursor-pointer"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-hairline/20 p-8 bg-gray-50/50">
            <div className="flex items-center justify-between mb-6">
              <span className="font-inter text-[16px] text-ink/70">Subtotal</span>
              <span className="font-inter text-[20px] font-bold text-ink">
                $ {cartTotal.toFixed(2)} USD
              </span>
            </div>
            
            <Link
              href="#"
              className="flex w-full items-center justify-center bg-orange py-4 font-inter text-[16px] font-bold text-white hover:bg-orange/90 transition-colors cursor-pointer"
            >
              Continue to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
