"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-[4/5] relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-gold">
            {product.category}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-serif text-xl text-brand-charcoal mb-1 group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-brand-gold font-bold mb-3">₹{product.price}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.slice(0, 2).map((feature) => (
              <span key={feature} className="text-[10px] text-gray-400 border border-gray-100 px-2 py-0.5 rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="px-5 pb-5">
        <WhatsAppButton
          phoneNumber="7878074724" // Placeholder
          message={`Hi, I want to order this jewelry item: ${product.name}`}
          label="Buy on WhatsApp"
          className="w-full text-sm py-2.5"
        />
      </div>
    </motion.div>
  );
}
