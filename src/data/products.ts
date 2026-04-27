export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Earrings' | 'Bracelets' | 'Bangles' | 'Necklaces' | 'Rings';
  description: string;
  images: string[];
  features: string[];
}

export const products: Product[] = [
  {
    id: 'e1',
    name: 'Eternal Gold Hoops',
    price: 1299,
    category: 'Earrings',
    description: 'Classic gold hoops designed for everyday elegance. These anti-tarnish hoops are perfect for any occasion, providing a timeless look that never fades.',
    images: ['/images/earrings.png'],
    features: ['Anti-tarnish', 'Waterproof', 'Skin-friendly', 'Affordable Luxury']
  },
  {
    id: 'b1',
    name: 'Serene Charm Bracelet',
    price: 1499,
    category: 'Bracelets',
    description: 'A delicate gold bracelet featuring a minimalist charm. Crafted with premium materials to ensure it stays shining even after contact with water.',
    images: ['/images/bracelets.png'],
    features: ['Waterproof', 'Premium Quality', 'Minimalist Design']
  },
  {
    id: 'n1',
    name: 'Celestial Pendant Necklace',
    price: 1899,
    category: 'Necklaces',
    description: 'A stunning pendant necklace that captures the light. Perfect for layering or wearing alone as a statement piece.',
    images: ['/images/necklaces.png'],
    features: ['Anti-tarnish Guarantee', 'Hypoallergenic', 'Handcrafted']
  },
  {
    id: 'r1',
    name: 'Gilded Stackable Rings',
    price: 999,
    category: 'Rings',
    description: 'Set of three minimalist gold rings. Mix and match to create your own unique look.',
    images: ['/images/rings.png'],
    features: ['Anti-tarnish', '18K Gold Plated', 'Comfort Fit']
  },
  {
    id: 'ba1',
    name: 'Classic Gold Bangle',
    price: 2199,
    category: 'Bangles',
    description: 'A sleek and modern gold bangle that adds a touch of luxury to any outfit.',
    images: ['/images/bangles.png'],
    features: ['Premium Polish', 'Durable', 'Water Resistant']
  }
];
