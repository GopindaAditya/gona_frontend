"use client";

import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: any) {
  const handleAddToCart = (name: string) => {
    alert(`${name} added to cart`);
  };

  return (
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
  );
}
