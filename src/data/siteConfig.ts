export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVeg?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface SignatureDish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // URL or local path
  tag: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  thumbnail?: string; // Video thumbnail
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const siteConfig = {
  // Brand Metadata
  brand: {
    name: 'Barnacle Bistro',
    tagline: 'Srinagar’s Premium Culinary Sanctuary',
    aboutShort: 'Nestled in the heart of Srinagar, Barnacle Bistro blends traditional Kashmiri warmth with contemporary culinary art. From the rich heritage of Wazwan to modern fusion delicacies, every dish is crafted to perfection.',
    aboutLong: 'Established with a vision to redefine the casual dining experience in Jammu & Kashmir, Barnacle Bistro offers a sanctuary where gourmet food meets cozy aesthetics. Located in Hyderpora, Srinagar, our bistro is a warm meeting spot for families, food enthusiasts, and friends alike. We pride ourselves on sourcing the freshest local ingredients, translating Kashmiri traditions into modern flavors, and serving them with unmatched hospitality.',
    ambianceNote: 'Our interiors reflect a warm, sophisticated aesthetic featuring frosted glass panels, ambient warm lighting, and cozy seating designed to offer comfort and style in Srinagar’s changing seasons.',
  },

  // Contact & Location Details
  contact: {
    // [WHATSAPP_NUMBER]
    whatsappNumber: '7780938743', 
    whatsappDisplay: '+91 77809 38743',
    // [RESTAURANT_PHONE]
    phone: '9906387311',
    phoneDisplay: '+91 99063 87311',
    // [RESTAURANT_ADDRESS]
    address: 'Shop No 2 & 3, Gulshanabad, Hyderpora, Srinagar, Jammu and Kashmir 190014',
    city: 'Srinagar, J&K',
    hours: '11:30 AM – 11:00 PM (Daily)',
    email: 'info@barnaclebistro.com',
    
    // [GOOGLE_MAPS_EMBED_URL]
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8653245465225!2d74.77733431521633!3d34.046082400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e191629edf7fb9%3A0xcd6a8651f34f9bfb!2sBarnacle%20Bistro!5e0!3m2!1sen!2sin!4v1720440000000!5m2!1sen!2sin',
    googleMapsDirectionUrl: 'https://www.google.com/maps/place/Barnacle+Bistro/@34.0460824,74.779523,16z',
  },

  // Social Media Links
  socials: {
    // [FACEBOOK_URL], [INSTAGRAM_URL], [WHATSAPP_URL] - requested quick link buttons
    facebook: 'https://facebook.com/barnaclebistro',
    instagram: 'https://instagram.com/barnaclebistro',
    whatsapp: 'https://wa.me/917780938743',
  },

  // Online Ordering & Food Delivery Partners
  delivery: {
    // [ZOMATO_LINK]
    zomato: 'https://www.zomato.com/srinagar/barnacle-bistro-chanapora/order',
    // [SWIGGY_LINK]
    swiggy: 'https://www.swiggy.com', // To be updated by client
  },

  // Interactive 3D Scene
  spline: {
    sceneUrl: 'https://prod.spline.design/6Wq1Q7YEBSpZqZhu/scene.splinecode', // A premium dark/minimalist interactive 3D model
    fallbackImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920', // Premium restaurant interior background fallback
  },

  // Signature Dishes
  signatures: [
    {
      id: 'sig-1',
      name: 'Signature Mutton Rista',
      description: 'Hand-pounded mutton meatballs cooked in a luscious, aromatic saffron gravy. A true Kashmiri wazwan masterpiece.',
      price: 380,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
      tag: 'Chef’s Special'
    },
    {
      id: 'sig-2',
      name: 'Kurkure Chicken Momos',
      description: 'Crispy, crunchy outer coating with a juicy, perfectly seasoned minced chicken filling, served with a fiery schezwan dip.',
      price: 180,
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
      tag: 'Best Seller'
    },
    {
      id: 'sig-3',
      name: 'Barnacle Special Mutton Dum Biryani',
      description: 'Fragrant long-grain basmati rice layered with tender mutton chunks, caramelized onions, and our secret spice blend, slow-cooked in traditional dum style.',
      price: 420,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
      tag: 'Premium Delight'
    },
    {
      id: 'sig-4',
      name: 'Kashmiri Kahwa',
      description: 'Traditional green tea infused with saffron strands, crushed almonds, cinnamon, and cardamom. Perfectly soothing.',
      price: 90,
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
      tag: 'Authentic Local'
    }
  ] as SignatureDish[],

  // Full Categorized Menu
  menu: [
    {
      id: 'starters',
      title: 'Starters & Fast Food',
      items: [
        { id: 'st-1', name: 'Crispy French Fries', description: 'Golden, crispy potato fries lightly seasoned with sea salt.', price: 110 },
        { id: 'st-2', name: 'Peri Peri French Fries', description: 'Crispy fries tossed in our signature hot peri peri spice mix.', price: 130, isPopular: true },
        { id: 'st-3', name: 'Honey Chilli Potato', description: 'Crispy potato fingers glazed in a sweet and spicy honey chilli sauce.', price: 190 },
        { id: 'st-4', name: 'Chicken Popcorn', description: 'Bite-sized tender chicken nuggets fried to crunchy perfection.', price: 210 },
        { id: 'st-5', name: 'Barnacle Special Chicken Burger', description: 'Gourmet chicken patty, melted cheese, crisp lettuce, tomato, and bistro sauce.', price: 230, isPopular: true }
      ]
    },
    {
      id: 'momos',
      title: 'Momos (Steamed & Crispy)',
      items: [
        { id: 'mo-1', name: 'Steamed Chicken Momos (8 Pcs)', description: 'Juicy, soft steamed dumplings packed with seasoned chicken mince.', price: 140 },
        { id: 'mo-2', name: 'Fried Chicken Momos (8 Pcs)', description: 'Crisp, golden-fried chicken momos served with spicy red chutney.', price: 160 },
        { id: 'mo-3', name: 'Kurkure Chicken Momos (8 Pcs)', description: 'Crispy, cornflake-crusted momos offering the ultimate crunch.', price: 180, isPopular: true },
        { id: 'mo-4', name: 'Veg Steamed Momos (8 Pcs)', description: 'Classic dumplings stuffed with finely minced garden vegetables.', price: 110, isVeg: true },
        { id: 'mo-5', name: 'Veg Kurkure Momos (8 Pcs)', description: 'Crispy-fried vegetable momos coated in crunchy flakes.', price: 150, isVeg: true }
      ]
    },
    {
      id: 'wazwan',
      title: 'Kashmiri Wazwan Delicacies',
      items: [
        { id: 'wz-1', name: 'Mutton Rista (1 Pc)', description: 'Classic wazwan mutton meatball cooked in a rich saffron-infused red gravy.', price: 380, isPopular: true },
        { id: 'wz-2', name: 'Mutton Gushtaba (1 Pc)', description: 'Succulent mutton meatball slow-cooked in a smooth, velvety curd gravy.', price: 390 },
        { id: 'wz-3', name: 'Mutton Kanti', description: 'Tender mutton pieces sautéed with sliced onions, green chillies, and local spices.', price: 350, isSpicy: true },
        { id: 'wz-4', name: 'Tabak Maaz (2 Pcs)', description: 'Deep-fried lamb ribs cooked in milk and spices. Crispy on the outside, tender inside.', price: 360 },
        { id: 'wz-5', name: 'Chicken Kanti', description: 'Boneless chicken cubes pan-fried with green chillies, onions, and Kashmiri spices.', price: 290, isSpicy: true }
      ]
    },
    {
      id: 'biryani',
      title: 'Biryani & Rice',
      items: [
        { id: 'by-1', name: 'Barnacle Special Mutton Biryani', description: 'Dum-cooked basmati rice layered with juicy mutton and spices.', price: 420, isPopular: true },
        { id: 'by-2', name: 'Chicken Biryani (Half/Full)', description: 'Flavourful basmati rice cooked with marinated chicken pieces.', price: 220 },
        { id: 'by-3', name: 'Plain Basmati Rice', description: 'Steamed premium long-grain aromatic basmati rice.', price: 90, isVeg: true },
        { id: 'by-4', name: 'Jeera Rice', description: 'Basmati rice tempered with cumin seeds and fresh coriander.', price: 120, isVeg: true },
        { id: 'by-5', name: 'Kashmiri Pulao', description: 'Sweetish rice preparation loaded with local dry fruits and fresh fruits.', price: 210, isVeg: true }
      ]
    },
    {
      id: 'maincourse',
      title: 'Main Course (North Indian)',
      items: [
        { id: 'mc-1', name: 'Butter Chicken Masala', description: 'Tandoori grilled chicken chunks cooked in a rich, buttery, creamy tomato gravy.', price: 340, isPopular: true },
        { id: 'mc-2', name: 'Kadai Chicken', description: 'Spicy chicken cooked in a traditional iron wok with bell peppers and fresh ground spices.', price: 320, isSpicy: true },
        { id: 'mc-3', name: 'Paneer Butter Masala', description: 'Cottage cheese cubes folded into a creamy, mildly sweet tomato-onion gravy.', price: 260, isVeg: true },
        { id: 'mc-4', name: 'Dal Makhani', description: 'Black lentils and kidney beans slow-cooked overnight, finished with fresh butter and cream.', price: 190, isVeg: true },
        { id: 'mc-5', name: 'Mix Veg Curry', description: 'Assorted seasonal vegetables tossed in a semi-dry onion-tomato gravy.', price: 180, isVeg: true }
      ]
    },
    {
      id: 'breads',
      title: 'Breads & Accompaniments',
      items: [
        { id: 'br-1', name: 'Plain Tandoori Roti', description: 'Traditional whole-wheat flatbread baked in a clay oven.', price: 20, isVeg: true },
        { id: 'br-2', name: 'Butter Tandoori Roti', description: 'Clay-oven baked flatbread brushed with premium butter.', price: 25, isVeg: true },
        { id: 'br-3', name: 'Butter Naan', description: 'Soft, leavened flatbread topped with butter.', price: 50, isVeg: true },
        { id: 'br-4', name: 'Garlic Naan', description: 'Soft naan topped with minced garlic and butter.', price: 70, isVeg: true },
        { id: 'br-5', name: 'Lacha Paratha', description: 'Multi-layered flaky whole-wheat bread baked in tandoor.', price: 60, isVeg: true }
      ]
    },
    {
      id: 'beverages',
      title: 'Beverages & Kahwa',
      items: [
        { id: 'bv-1', name: 'Kashmiri Kahwa', description: 'Saffron green tea brewed with cinnamon, cardamom, and almond flakes.', price: 90, isPopular: true },
        { id: 'bv-2', name: 'Noon Chai', description: 'Traditional Kashmiri pink tea, salty, creamy, and topped with milk skin.', price: 70 },
        { id: 'bv-3', name: 'Fresh Mint Mojito', description: 'Refreshing blend of fresh mint leaves, lime juice, sugar, and club soda.', price: 130, isVeg: true },
        { id: 'bv-4', name: 'Cold Coffee with Ice Cream', description: 'Chilled blended milk, espresso, and sugar, topped with a scoop of vanilla ice cream.', price: 150, isVeg: true },
        { id: 'bv-5', name: 'Fresh Lime Soda (Sweet/Salted)', description: 'Zesty fresh lime juice mixed with fresh soda water.', price: 80, isVeg: true }
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        { id: 'ds-1', name: 'Kesari Kheer', description: 'Traditional slow-cooked saffron rice pudding topped with almonds and pistachios.', price: 110, isVeg: true },
        { id: 'ds-2', name: 'Gulab Jamun (2 Pcs)', description: 'Warm, soft milk-solid dumplings soaked in a cardamom-infused sugar syrup.', price: 80, isVeg: true },
        { id: 'ds-3', name: 'Hot Brownie with Vanilla Ice Cream', description: 'Rich chocolate fudge brownie served hot with a scoop of vanilla ice cream.', price: 180, isVeg: true }
      ]
    }
  ] as MenuCategory[],

  // Customer Reviews (Google Maps vibes for Srinagar)
  reviews: [
    {
      id: 'rev-1',
      author: 'Sameer Wani',
      rating: 5,
      text: 'One of the best dining places in Srinagar! The Kurkure Momos are exceptionally crunchy and flavorful. The ambiance is warm and has a beautiful frosted-glass premium aesthetic. Highly recommended!',
      date: '1 week ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 'rev-2',
      author: 'Mehak Bhat',
      rating: 5,
      text: 'The Kashmiri Wazwan dishes, especially Rista and Gushtaba, are absolutely authentic and melt-in-the-mouth. Hospitality is 10/10. It is a premium experience that doesn’t burn a hole in your pocket.',
      date: '3 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 'rev-3',
      author: 'Irfan Dar',
      rating: 4,
      text: 'A great place in Hyderpora to chill with family. Their Special Mutton Biryani is incredibly aromatic and flavorful. Very friendly staff. Ordering via WhatsApp was quick and simple.',
      date: '1 month ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 'rev-4',
      author: 'Sabrina Syed',
      rating: 5,
      text: 'Such an elegant cafe. The dark mode theme of the bistro matches Srinagar’s evening vibes. Their Kashmiri Kahwa is very authentic, packed with saffron and almonds. Will visit again!',
      date: '2 months ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
    }
  ] as Review[],

  // Mixed Photo & Video Gallery Items
  gallery: [
    {
      id: 'g-1',
      type: 'image',
      title: 'Frosted Glass Ambience',
      url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'g-2',
      type: 'video',
      title: 'Our Signature Plating',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-fresh-vegetable-salad-41619-large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'g-3',
      type: 'image',
      title: 'Signature Wazwan Rista',
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'g-4',
      type: 'video',
      title: 'The Steamy Momo Basket',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-steaming-dumplings-in-a-bamboo-basket-43026-large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'g-5',
      type: 'image',
      title: 'Perfect Dum Biryani',
      url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'g-6',
      type: 'video',
      title: 'Saffron Kahwa Pour',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-hot-tea-into-a-cup-43187-large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1000'
    }
  ] as GalleryItem[],

  // FAQs
  faqs: [
    {
      id: 'faq-1',
      question: 'What are your operational hours?',
      answer: 'Barnacle Bistro is open daily from 11:30 AM to 11:00 PM. We are open for Dine-in, Takeaway, and Online Deliveries during these hours.'
    },
    {
      id: 'faq-2',
      question: 'Where exactly are you located in Srinagar?',
      answer: 'We are located at Shop No 2 & 3, Gulshanabad, Hyderpora, Srinagar, Jammu and Kashmir 190014. You can find us easily on Google Maps near the main highway.'
    },
    {
      id: 'faq-3',
      question: 'How do I place an order online?',
      answer: 'You can order online through Zomato by clicking the order link on our website, or you can send us a message directly on WhatsApp to place a Takeaway or Direct Delivery order.'
    },
    {
      id: 'faq-4',
      question: 'Do you offer reservations? How do I book a table?',
      answer: 'Yes! We support reservations. You can fill out our reservation form in the Contact section, which will build a pre-filled booking inquiry and send it directly to our reservation desk via WhatsApp.'
    },
    {
      id: 'faq-5',
      question: 'What is the average cost for two people?',
      answer: 'A meal for two at Barnacle Bistro averages around ₹600 to ₹800, depending on the items ordered. We offer premium dining value for all our guests.'
    },
    {
      id: 'faq-6',
      question: 'Is parking available at the restaurant?',
      answer: 'Yes, we have dedicated roadside customer parking space available in front of the bistro in Gulshanabad, Hyderpora.'
    }
  ] as FAQItem[]
};
