"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const categories = ["All", "Earrings", "Necklaces", "Bracelets", "Rings", "Bangles"];

function ProductGrid() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
              activeCategory === cat
                ? "bg-brand-gold text-white border-brand-gold shadow-md"
                : "bg-white text-gray-500 border-gray-100 hover:border-brand-gold hover:text-brand-gold"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Navbar />

      {/* Header */}
      <header className="pt-32 pb-16 px-6 text-center">
        <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Collection</span>
        <h1 className="font-serif text-5xl text-brand-charcoal">The Jewelry Catalog</h1>
      </header>

      <section className="px-6 pb-24">
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <ProductGrid />
        </Suspense>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="7878074724" variant="floating" />
    </main>
  );
}
