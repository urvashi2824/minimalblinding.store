"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Luxury Jewelry Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.3em] font-bold mb-4 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
              New Collection 2026
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-[1.1]">
              Elegant <span className="text-brand-gold italic">Anti-Tarnish</span> Jewelry for Everyday Shine
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/90 font-light tracking-wide max-w-lg">
              Experience affordable luxury with our waterproof and skin-friendly jewelry collection.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-white hover:text-brand-charcoal text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Shop Collection
                <ArrowRight size={18} />
              </Link>
              <div className="flex items-center gap-6 text-sm font-bold tracking-widest uppercase">
                <div className="flex flex-col">
                  <span>Waterproof</span>
                  <span className="h-0.5 w-full bg-brand-gold mt-1" />
                </div>
                <div className="flex flex-col text-white/60">
                  <span>Anti-Tarnish</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
