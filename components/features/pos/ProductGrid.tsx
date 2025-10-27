"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import AddToCartDialog from "./AddToCartDialog";

interface Product {
  name: string;
  price: string;
  stock: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
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
        {products.map((p, i) => (
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
