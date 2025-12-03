export const categories = [
  { id: 1, name: 'Men', slug: 'men' },
  { id: 2, name: 'Women', slug: 'women' },
  { id: 3, name: 'Shoes', slug: 'shoes' },
  { id: 4, name: 'Bags', slug: 'bags' },
  { id: 5, name: 'Accessories', slug: 'accessories' }
];

export const products = [
  {
    id: 1,
    name: 'Classic Black Leather Jacket',
    description: 'A timeless piece crafted from premium Italian leather. This minimalist jacket features a slim fit silhouette with subtle hardware and impeccable tailoring. Perfect for the modern minimalist wardrobe.',
    price: 1299,
    category: 'Men',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal'],
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800'
    ],
    material: 'Italian Leather',
    type: 'Jacket',
    rating: 4.8,
    reviews: [
      {
        id: 1,
        name: 'Alexander Chen',
        rating: 5,
        comment: 'Exceptional quality. The leather is buttery soft and the fit is perfect. Worth every penny.',
        date: '2024-01-15'
      },
      {
        id: 2,
        name: 'Marcus Williams',
        rating: 4,
        comment: 'Beautiful jacket, though it runs slightly large. Size down if you prefer a tighter fit.',
        date: '2024-01-20'
      }
    ],
    stock: 15
  },
  {
    id: 2,
    name: 'Minimalist Wool Coat',
    description: 'An architectural wool coat that embodies understated elegance. Double-breasted design with clean lines and a structured silhouette. Made from 100% premium wool.',
    price: 899,
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Charcoal', 'Navy'],
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800'
    ],
    material: '100% Wool',
    type: 'Coat',
    rating: 4.9,
    reviews: [
      {
        id: 1,
        name: 'Sophie Laurent',
        rating: 5,
        comment: 'Absolutely stunning. The quality is outstanding and it drapes beautifully.',
        date: '2024-02-01'
      }
    ],
    stock: 8
  },
  {
    id: 3,
    name: 'Structured Shoulder Bag',
    description: 'A geometric shoulder bag with architectural lines. Crafted from supple black leather with gold-tone hardware. Features an adjustable strap and interior compartments.',
    price: 649,
    category: 'Bags',
    sizes: ['One Size'],
    colors: ['Black', 'Cream'],
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800'
    ],
    material: 'Leather',
    type: 'Shoulder Bag',
    rating: 4.7,
    reviews: [
      {
        id: 1,
        name: 'Emma Thompson',
        rating: 5,
        comment: 'Perfect size and incredibly well-made. The leather quality is exceptional.',
        date: '2024-01-25'
      },
      {
        id: 2,
        name: 'Isabella Rossi',
        rating: 4,
        comment: 'Beautiful bag, though the strap could be slightly longer for taller frames.',
        date: '2024-02-05'
      }
    ],
    stock: 12
  },
  {
    id: 4,
    name: 'Monochrome Tailored Suit',
    description: 'A perfectly tailored two-piece suit in premium black wool. Features a single-breasted jacket with peak lapels and straight-leg trousers. The epitome of sartorial elegance.',
    price: 1899,
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal'],
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800',
      'https://images.unsplash.com/photo-1624378515193-8fc356f32f69?w=800'
    ],
    material: 'Wool',
    type: 'Suit',
    rating: 4.9,
    reviews: [
      {
        id: 1,
        name: 'James Mitchell',
        rating: 5,
        comment: 'The tailoring is impeccable. This suit fits like it was made for me.',
        date: '2024-01-10'
      }
    ],
    stock: 6
  },
  {
    id: 5,
    name: 'Silk Slip Dress',
    description: 'A fluid silk slip dress with delicate straps and a bias cut. Minimalist design that moves beautifully. Perfect for evening or layered under a coat.',
    price: 599,
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Ivory'],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800'
    ],
    material: 'Silk',
    type: 'Dress',
    rating: 4.6,
    reviews: [
      {
        id: 1,
        name: 'Olivia Martinez',
        rating: 5,
        comment: 'Gorgeous dress. The silk is luxurious and the fit is perfect.',
        date: '2024-02-10'
      }
    ],
    stock: 10
  },
  {
    id: 6,
    name: 'Leather Ankle Boots',
    description: 'Minimalist ankle boots with a sleek silhouette. Crafted from black Italian leather with a subtle heel and clean lines. Versatile enough for day or night.',
    price: 749,
    category: 'Shoes',
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Black', 'Brown'],
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800',
      'https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=800'
    ],
    material: 'Leather',
    type: 'Boots',
    rating: 4.8,
    reviews: [
      {
        id: 1,
        name: 'Charlotte Dubois',
        rating: 5,
        comment: 'Comfortable and stylish. These boots go with everything in my wardrobe.',
        date: '2024-01-30'
      },
      {
        id: 2,
        name: 'Amélie Bernard',
        rating: 4,
        comment: 'Beautiful boots, though they need a bit of breaking in.',
        date: '2024-02-08'
      }
    ],
    stock: 14
  },
  {
    id: 7,
    name: 'Oversized Cashmere Scarf',
    description: 'An ultra-soft oversized cashmere scarf in pure black. Generous dimensions perfect for wrapping or draping. The ultimate luxury accessory.',
    price: 349,
    category: 'Accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Charcoal', 'Cream'],
    images: [
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
      'https://images.unsplash.com/photo-1601925260368-eee832620078?w=800'
    ],
    material: 'Cashmere',
    type: 'Scarf',
    rating: 4.9,
    reviews: [
      {
        id: 1,
        name: 'Victoria Chen',
        rating: 5,
        comment: 'Incredibly soft and warm. The quality is outstanding.',
        date: '2024-02-12'
      }
    ],
    stock: 20
  },
  {
    id: 8,
    name: 'Tailored Trousers',
    description: 'High-waisted tailored trousers with a wide leg silhouette. Made from premium wool blend with a crease-resistant finish. Timeless and versatile.',
    price: 449,
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Charcoal', 'Navy'],
    images: [
      'https://images.unsplash.com/photo-1624378515193-8fc356f32f69?w=800',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800'
    ],
    material: 'Wool Blend',
    type: 'Trousers',
    rating: 4.7,
    reviews: [
      {
        id: 1,
        name: 'Luna Rodriguez',
        rating: 5,
        comment: 'Perfect fit and incredibly comfortable. These are my new favorite trousers.',
        date: '2024-02-03'
      }
    ],
    stock: 11
  },
  {
    id: 9,
    name: 'Minimalist Watch',
    description: 'A sleek timepiece with a black leather strap and minimalist dial. Swiss movement, water-resistant. The perfect accessory for the modern minimalist.',
    price: 899,
    category: 'Accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800'
    ],
    material: 'Leather, Stainless Steel',
    type: 'Watch',
    rating: 4.8,
    reviews: [
      {
        id: 1,
        name: 'Daniel Kim',
        rating: 5,
        comment: 'Beautiful watch. The design is exactly what I was looking for.',
        date: '2024-01-28'
      }
    ],
    stock: 7
  },
  {
    id: 10,
    name: 'Leather Crossbody Bag',
    description: 'A compact crossbody bag with a modern geometric shape. Features an adjustable strap, magnetic closure, and interior card slots. Perfect for essentials.',
    price: 549,
    category: 'Bags',
    sizes: ['One Size'],
    colors: ['Black', 'Cream'],
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800'
    ],
    material: 'Leather',
    type: 'Crossbody Bag',
    rating: 4.6,
    reviews: [
      {
        id: 1,
        name: 'Mia Johnson',
        rating: 4,
        comment: 'Cute bag, perfect size for everyday use.',
        date: '2024-02-07'
      }
    ],
    stock: 9
  },
  {
    id: 11,
    name: 'Classic Oxford Shirt',
    description: 'A perfectly tailored white oxford shirt with a button-down collar. Made from premium cotton with mother-of-pearl buttons. A wardrobe essential.',
    price: 199,
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black'],
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a864?w=800'
    ],
    material: 'Cotton',
    type: 'Shirt',
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: 'Robert Taylor',
        rating: 4,
        comment: 'Good quality shirt, fits well. Great for the office.',
        date: '2024-02-01'
      }
    ],
    stock: 18
  },
  {
    id: 12,
    name: 'Leather Loafers',
    description: 'Classic penny loafers in black Italian leather. Handcrafted with a comfortable leather sole and timeless design. Perfect for both formal and casual occasions.',
    price: 699,
    category: 'Shoes',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Black', 'Brown'],
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800',
      'https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=800'
    ],
    material: 'Leather',
    type: 'Loafers',
    rating: 4.7,
    reviews: [
      {
        id: 1,
        name: 'Thomas Anderson',
        rating: 5,
        comment: 'Excellent craftsmanship. These loafers are incredibly comfortable.',
        date: '2024-01-22'
      },
      {
        id: 2,
        name: 'Michael Brown',
        rating: 4,
        comment: 'Great quality, though they run slightly narrow.',
        date: '2024-02-04'
      }
    ],
    stock: 13
  }
];

