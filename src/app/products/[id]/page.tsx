"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ShieldCheck, Droplets, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-gold transition-colors mb-8"
          >
            <ChevronLeft size={16} />
            Back to Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden bg-brand-cream shadow-sm">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <div key={i} className="aspect-square relative rounded-xl overflow-hidden bg-brand-cream border border-gray-100">
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                {product.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-brand-gold mb-8">₹{product.price}</p>

              <div className="prose prose-sm text-gray-600 mb-10 leading-relaxed">
                <p>{product.description}</p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center text-center p-4 bg-brand-beige rounded-2xl">
                  <ShieldCheck className="text-brand-gold mb-2" size={24} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Anti-Tarnish</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-brand-beige rounded-2xl">
                  <Droplets className="text-brand-gold mb-2" size={24} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Waterproof</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-brand-beige rounded-2xl">
                  <Sparkles className="text-brand-gold mb-2" size={24} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Premium Quality</span>
                </div>
              </div>

              <div className="space-y-4">
                <WhatsAppButton
                  phoneNumber="7878074724"
                  message={`Hi, I want to order this jewelry item: ${product.name}`}
                  label="Buy on WhatsApp"
                  className="w-full py-4 text-lg shadow-lg"
                />
                <p className="text-center text-xs text-gray-400">
                  Clicking "Buy" will open WhatsApp on your device.
                </p>
              </div>

              {/* Trust Info */}
              <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif font-bold text-sm mb-3">Fast Shipping</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Dispatch within 24-48 hours. Express delivery available.</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm mb-3">Secure Ordering</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Order directly via WhatsApp for a personalized experience.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton phoneNumber="7878074724" variant="floating" />
    </main>
  );
}
