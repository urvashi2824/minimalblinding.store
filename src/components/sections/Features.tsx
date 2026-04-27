"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Anti-Tarnish Guarantee",
    description: "Our jewelry is specially coated to resist oxidation and stay bright for years.",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "100% Waterproof",
    description: "Wear it in the shower, pool, or gym without worrying about fading or damage.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Affordable Luxury",
    description: "Premium designs at prices that make everyday elegance accessible to everyone.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Skin Friendly",
    description: "Hypoallergenic materials that are gentle on even the most sensitive skin.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Promise</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal">Why Choose minimalbling<span className="text-brand-gold">.store</span>?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-brand-beige border border-gray-100 hover:border-brand-gold transition-colors group"
            >
              <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl mb-3 text-brand-charcoal">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
