"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import AddToCartDialog from "./AddToCartDialog";

export default function ProductGrid({ products }: any) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState<string | null>(null);

  const handleAddToCart = (name: string) => {
    setAddedProduct(name);
    setDialogOpen(true);

    setTimeout(() => {
      setDialogOpen(false);
    }, 2000);
  };

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
        {products.map((p: any, i: number) => (
          <ProductCard
            key={i}
            name={p.name}
            price={p.price}
            stock={p.stock}
            image={p.image}
            onAddToCart={() => handleAddToCart(p.name)}
          />
        ))}
      </div>

      <AddToCartDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        productName={addedProduct ?? undefined}
      />
    </>
  );
}
