"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { name: "Earrings", image: "/images/earrings.png", count: "12+ Items" },
  { name: "Necklaces", image: "/images/necklaces.png", count: "8+ Items" },
  { name: "Bracelets", image: "/images/bracelets.png", count: "15+ Items" },
  { name: "Rings", image: "/images/rings.png", count: "10+ Items" },
  { name: "Bangles", image: "/images/bangles.png", count: "6+ Items" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-brand-cream px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Collections</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal">Shop by Category</h2>
          </div>
          <Link href="/products" className="text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[300px] rounded-3xl overflow-hidden shadow-sm"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <Link href={`/products?category=${cat.name}`} className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="font-serif text-2xl mb-1">{cat.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/80">{cat.count}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
