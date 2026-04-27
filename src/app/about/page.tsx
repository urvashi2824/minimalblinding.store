import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Navbar />

      <header className="pt-32 pb-16 px-6 text-center bg-white">
        <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Journey</span>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-charcoal">The minimalbling Story</h1>
      </header>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/hero.png" 
                alt="Brand Story" 
                fill 
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="font-serif text-3xl mb-6 text-brand-charcoal italic">Luxury shouldn't be a compromise.</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to redefine everyday elegance, minimalbling.store was born out of a simple need: jewelry that stays beautiful, even with constant wear.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in anti-tarnish, waterproof, and skin-friendly jewelry that complements your dynamic lifestyle. Whether you're heading to the office, a workout, or a night out, our pieces are designed to shine through it all.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed font-serif italic text-lg">
                "We believe every woman deserves to feel luxurious every single day, without breaking the bank."
              </p>
              
              <WhatsAppButton phoneNumber="917878074724" label="Get in Touch" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-16">The Quality we Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <span className="text-2xl font-bold">01</span>
              </div>
              <h3 className="font-serif text-xl">Premium Materials</h3>
              <p className="text-sm text-gray-500">We use high-grade 316L stainless steel and 18K gold plating for maximum durability.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <span className="text-2xl font-bold">02</span>
              </div>
              <h3 className="font-serif text-xl">Ethical Sourcing</h3>
              <p className="text-sm text-gray-500">Every piece is responsibly sourced and handcrafted by skilled artisans.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto text-brand-gold">
                <span className="text-2xl font-bold">03</span>
              </div>
              <h3 className="font-serif text-xl">Customer First</h3>
              <p className="text-sm text-gray-500">Personalized support via WhatsApp to ensure you get exactly what you're looking for.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="917878074724" variant="floating" />
    </main>
  );
}
