"use client"
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-cream pt-20 pb-10 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="font-serif text-2xl font-bold mb-2 block">
            minimalbling<span className="text-brand-gold">.store</span>
          </Link>
          <p className="text-brand-gold text-[10px] font-bold tracking-[0.2em] mb-6 uppercase">by Urvashi Khanna</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Elegant Anti-Tarnish Jewelry designed for the modern woman. Everyday luxury that stays as bright as you are.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Shop Categories</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-600">
            <li><Link href="/products?category=Earrings" className="hover:text-brand-gold transition-colors">Earrings</Link></li>
            <li><Link href="/products?category=Necklaces" className="hover:text-brand-gold transition-colors">Necklaces</Link></li>
            <li><Link href="/products?category=Bracelets" className="hover:text-brand-gold transition-colors">Bracelets</Link></li>
            <li><Link href="/products?category=Rings" className="hover:text-brand-gold transition-colors">Rings</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Company</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-600">
            <li><Link href="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
            <li><Link href="/shipping" className="hover:text-brand-gold transition-colors">Shipping Policy</Link></li>
            <li><Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-600">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-gold" />
              <span>urvashikhanna08@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-gold" />
              <span>+91 78780 74724</span>
            </li>
          </ul>
          <div className="mt-8 bg-white p-4 rounded-xl shadow-sm border border-gold/10">
            <p className="text-[10px] uppercase font-bold text-brand-gold mb-1">WhatsApp Support</p>
            <p className="text-xs text-gray-500">Order directly on WhatsApp for quick response</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} minimalbling.store by Urvashi Khanna. All rights reserved.</p>
      </div>
    </footer>
  );
}
