"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface AddToCartButtonProps {
  product: Product;
  disabled?: boolean;
}

export function AddToCartButton({ product, disabled }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    setLoading(true);
    try {
      // Convert the product ID to string before passing it to addItem
      addItem({ ...product, id: String(product.id) });
      toast.success("Added to cart");
    } catch (error) {
      toast.error("Failed to add item to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
      <Button
          onClick={handleAddToCart}
          disabled={disabled || loading}
          className="w-full mt-8"
      >
        {loading ? "Adding to Cart..." : "Add to Cart"}
      </Button>
  );
}
