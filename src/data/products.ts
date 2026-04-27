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
  },
  // New Bracelets
  {
    "id": "b-2",
    "name": "Naomi bracelet",
    "price": 1299,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Naomi bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/nomi.webp"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-3",
    "name": "Palmer bracelet",
    "price": 1499,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Palmer bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-4",
    "name": "Addison bracelet",
    "price": 1699,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Addison bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-5",
    "name": "Josephine bracelet",
    "price": 1899,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Josephine bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-6",
    "name": "Natalie bracelet",
    "price": 1999,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Natalie bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-7",
    "name": "Beatrice bracelet",
    "price": 2199,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Beatrice bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-8",
    "name": "Hannah bracelet",
    "price": 1299,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Hannah bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-9",
    "name": "Victoria Bracelet",
    "price": 1499,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Victoria Bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-10",
    "name": "Ximena bracelet",
    "price": 1699,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Ximena bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-11",
    "name": "Alanibracelet",
    "price": 1899,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Alanibracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-12",
    "name": "Brianna bracelet",
    "price": 1999,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Brianna bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-13",
    "name": "Olive bracelet",
    "price": 2199,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Olive bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-14",
    "name": "Rosalie bracelet",
    "price": 1299,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Rosalie bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-15",
    "name": "Lilah bracelet",
    "price": 1499,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Lilah bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-16",
    "name": "Ariah bracelet",
    "price": 1699,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Ariah bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-17",
    "name": "Zayla bracelet",
    "price": 1899,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Zayla bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-18",
    "name": "Emi bracelet",
    "price": 1999,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Emi bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-19",
    "name": "Madeline bracelet",
    "price": 2199,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Madeline bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-20",
    "name": "Gabriella bracelet",
    "price": 1299,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Gabriella bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-21",
    "name": "Arlette bracelet",
    "price": 1499,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Arlette bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-22",
    "name": "Callie bracelet",
    "price": 1699,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Callie bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-23",
    "name": "Rowyn bracelet",
    "price": 1899,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Rowyn bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-24",
    "name": "Juniper  bracelet",
    "price": 1999,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Juniper  bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-25",
    "name": "Raina bracelet",
    "price": 2199,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Raina bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-26",
    "name": "Evangeline bracelet",
    "price": 1299,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Evangeline bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-27",
    "name": "Katherine bracelet",
    "price": 1499,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Katherine bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-28",
    "name": "Melody bracelet",
    "price": 1699,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Melody bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-29",
    "name": "Ruth bracelet",
    "price": 1899,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Ruth bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-30",
    "name": "Millie bracelet",
    "price": 1999,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Millie bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-31",
    "name": "Josie bracelet",
    "price": 2199,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Josie bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-32",
    "name": "Kaia bracelet",
    "price": 1299,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Kaia bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-33",
    "name": "Seraphina bracelet",
    "price": 1499,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Seraphina bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-34",
    "name": "Willow bracelet",
    "price": 1699,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Willow bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-35",
    "name": "Georgia bracelet",
    "price": 1899,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Georgia bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-36",
    "name": "Bella bracelet",
    "price": 1999,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Bella bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-37",
    "name": "Kamryn bracelet",
    "price": 2199,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Kamryn bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-38",
    "name": "Emilia bracelet",
    "price": 1299,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Emilia bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-39",
    "name": "Miller bracelet",
    "price": 1499,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Miller bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-40",
    "name": "Kennedy bracelet",
    "price": 1699,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Kennedy bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-41",
    "name": "Ariana bracelet",
    "price": 1899,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Ariana bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-42",
    "name": "Allison bracelet",
    "price": 1999,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Allison bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-43",
    "name": "Brooklyn bracelet",
    "price": 2199,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Brooklyn bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-44",
    "name": "Lydia bracelet",
    "price": 1299,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Lydia bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-45",
    "name": "Julia bracelet",
    "price": 1499,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Julia bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-46",
    "name": "Kinsley bracelet",
    "price": 1699,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Kinsley bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-3.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-47",
    "name": "Savannah bracelet",
    "price": 1899,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Savannah bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-1.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  },
  {
    "id": "b-48",
    "name": "Grace bracelet",
    "price": 1999,
    "category": "Bracelets",
    "description": "Experience the perfect blend of luxury and simplicity with the Grace bracelet. This anti-tarnish piece is designed to keep its shine and elevate your daily look.",
    "images": ["/images/bracelet-2.png"],
    "features": ["Anti-tarnish", "Waterproof", "Premium Quality", "Minimalist Design"]
  }
];
