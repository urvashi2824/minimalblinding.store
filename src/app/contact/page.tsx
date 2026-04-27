import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Navbar />

      <header className="pt-32 pb-16 px-6 text-center bg-white">
        <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Get in Touch</span>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-charcoal">Contact Us</h1>
      </header>

      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto bg-white p-12 rounded-[2rem] shadow-sm text-center">
          <h2 className="font-serif text-2xl mb-6">Need assistance?</h2>
          <p className="text-gray-600 mb-10">We're here to help you find your perfect piece. The fastest way to reach us is through WhatsApp.</p>

          <div className="space-y-6">
            <WhatsAppButton phoneNumber="917878074724" label="Chat on WhatsApp" className="w-full" />

            <div className="pt-10 border-t border-gray-100 grid grid-cols-1 gap-6">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-brand-gold mb-2">Email</h4>
                <p className="text-gray-600">urvashikhanna08@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-brand-gold mb-2">Location</h4>
                <p className="text-gray-600">Based in Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="917878074724" variant="floating" />
    </main>
  );
}
