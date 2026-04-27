import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <Navbar />
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-[2rem] shadow-sm">
          <h1 className="font-serif text-4xl mb-8">Shipping & Terms</h1>
          <div className="prose prose-brand text-gray-600 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-brand-charcoal mb-4">Shipping Policy</h2>
              <p>We offer standard shipping across India. Most orders are dispatched within 24-48 hours. Delivery usually takes 3-7 business days depending on your location.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-brand-charcoal mb-4">Returns & Exchanges</h2>
              <p>Due to hygiene reasons, we do not accept returns on earrings. For other items, we offer a 7-day exchange policy if the item is damaged or incorrect.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-brand-charcoal mb-4">Anti-Tarnish Guarantee</h2>
              <p>Our jewelry is guaranteed against tarnishing for 6 months under normal wear. Please avoid direct contact with harsh chemicals or perfumes to maintain the shine longer.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
