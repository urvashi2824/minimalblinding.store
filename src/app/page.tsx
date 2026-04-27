import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Categories from "@/components/sections/Categories";
import ProductCard from "@/components/ui/ProductCard";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      
      {/* Featured Products */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Trending Now</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal">Featured Creations</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* Trust Banner */}
      <section className="py-16 bg-brand-charcoal text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl mb-4 italic">“Jewelry that tells your story, without fading away.”</h3>
          <p className="text-white/60 mb-8 font-light tracking-widest uppercase text-xs">Join 5000+ happy customers</p>
          <WhatsAppButton 
            phoneNumber="910000000000" 
            label="Order via WhatsApp" 
            className="bg-white text-brand-charcoal hover:bg-brand-gold hover:text-white"
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="910000000000" variant="floating" />
    </main>
  );
}
