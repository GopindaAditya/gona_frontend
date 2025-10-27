"use client";

import Card from "@/components/ui/Card";
import { cn } from "@/lib/helpers/utils";

interface ProductCardProps {
  name: string;
  price: string;
  stock: number;
  image: string;
  onAddToCart?: () => void;
  className?: string;
}

export default function ProductCard({
  name,
  price,
  stock,
  image,
  onAddToCart,
  className,
}: ProductCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col gap-3 pb-3 overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow",
        "bg-white dark:bg-gray-900/50 shadow-soft",
        className
      )}
    >
      {/* Image section */}
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded-full">
          Stok: {stock}
        </div>
      </div>

      {/* Info section */}
      <div className="px-3">
        <p className="font-medium leading-normal truncate">{name}</p>
        <p className="text-gray-500 text-sm font-normal leading-normal">
          {price}
        </p>
      </div>

      {/* Add to cart button */}
      <button
        onClick={onAddToCart}
        className={cn(
          "w-[calc(100%-1.5rem)] mx-auto flex items-center justify-center rounded-md h-9 cursor-pointer",
          "bg-primary/20 dark:bg-primary/30 text-black dark:text-white gap-2 text-sm font-medium leading-normal tracking-[0.015em]",
          "opacity-0 group-hover:opacity-100 transition-opacity"
        )}
      >
        <span className="material-symbols-outlined text-base">
          add_shopping_cart
        </span>
        Add to Cart
      </button>
    </Card>
  );
}
