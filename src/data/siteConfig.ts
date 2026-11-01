export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
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

export interface SlideshowItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
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
    fallbackImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=95&w=1200',
  },

  // 10 Curated Slideshow Images Matching the Upscale Bistro Theme
  slideshow: [
    {
      id: 'slide-1',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=85&w=1600',
      title: "Upscale Bistro Ambience",
      subtitle: "Warm dark woods, ambient Edison bulbs & Srinagar's cozy evening hospitality"
    },
    {
      id: 'slide-2',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=85&w=1600',
      title: "Sizzling Continental Grills",
      subtitle: "Tender grilled steaks, lamb skewers & rosemary herb butter sizzlers"
    },
    {
      id: 'slide-3',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=85&w=1600',
      title: "Artisan Steamed Momos",
      subtitle: "Delicate Himalayan dumplings served with chef's spicy red chili oil"
    },
    {
      id: 'slide-4',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=85&w=1600',
      title: "Gourmet Loaded Burgers",
      subtitle: "Juicy handcrafted chicken patties, double cheddar & golden crisp fries"
    },
    {
      id: 'slide-5',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=85&w=1600',
      title: "Royal Dum Biryani",
      subtitle: "Slow-cooked saffron basmati rice layered with succulent spiced mutton"
    },
    {
      id: 'slide-6',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=85&w=1600',
      title: "Authentic Kashmiri Wazwan",
      subtitle: "Traditional Rista, Gushtaba & Rogan Josh prepared by master wazas"
    },
    {
      id: 'slide-7',
      image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=85&w=1600',
      title: "Crunchy Kurkure Momos",
      subtitle: "Golden crispy fried momos coated in seasoned crunch with spicy dip"
    },
    {
      id: 'slide-8',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=85&w=1600',
      title: "Intimate Candlelit Dining",
      subtitle: "The premier evening destination for families, couples & friends in Hyderpora"
    },
    {
      id: 'slide-9',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=85&w=1600',
      title: "Refreshing Artisan Mocktails",
      subtitle: "Zesty fresh mint mojitos, blue lagoon sparklers & soothing Kashmiri Kahwa"
    },
    {
      id: 'slide-10',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=85&w=1600',
      title: "Decadent Sizzling Brownies",
      subtitle: "Warm chocolate fudge brownie served hot with velvety vanilla bean ice cream"
    }
  ] as SlideshowItem[],

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
    },
    {
      id: 'sig-5',
      name: 'Sizzling Grilled Chicken Steak',
      description: 'Char-grilled chicken breast steak drenched in creamy pepper mushroom reduction, served on a sizzling hot plate with buttered greens & fries.',
      price: 360,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
      tag: 'Continental Hit'
    },
    {
      id: 'sig-6',
      name: 'Tandoori Malai Chicken Momos',
      description: 'Clay-oven roasted succulent chicken dumplings smothered in fresh malai cream, melted butter, and house roasted spices.',
      price: 210,
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
      tag: 'Guest Favorite'
    }
  ] as SignatureDish[],

  // Full Categorized Menu
  menu: [
    {
      id: 'starters',
      title: 'Starters & Fast Food',
      items: [
        { id: 'st-1', name: 'Crispy French Fries', description: 'Golden, crispy potato fries lightly seasoned with sea salt.', price: 110, isVeg: true, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400' },
        { id: 'st-2', name: 'Peri Peri French Fries', description: 'Crispy fries tossed in our signature hot peri peri spice mix.', price: 130, isPopular: true, isVeg: true, image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=400' },
        { id: 'st-3', name: 'Honey Chilli Potato', description: 'Crispy potato fingers glazed in a sweet and spicy honey chilli sauce.', price: 190, isVeg: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400' },
        { id: 'st-4', name: 'Chicken Popcorn', description: 'Bite-sized tender chicken nuggets fried to crunchy perfection.', price: 210, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=400' },
        { id: 'st-5', name: 'Barnacle Special Chicken Burger', description: 'Gourmet chicken patty, melted cheese, crisp lettuce, tomato, and bistro sauce.', price: 230, isPopular: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400' },
        { id: 'st-6', name: 'Sizzling Grilled Chicken Steak', description: 'Tender chicken steak grilled to perfection, topped with creamy pepper mushroom sauce, served with buttered veggies and crispy fries.', price: 360, isPopular: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400' },
        { id: 'st-7', name: 'Double Cheese Crispy Zinger Burger', description: 'Extra crispy spiced chicken fillet layered with double melted cheddar, crunchy lettuce, and house bistro mayo in a toasted brioche bun.', price: 260, isPopular: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400' },
        { id: 'st-8', name: 'Crispy BBQ Chicken Wings (6 Pcs)', description: 'Succulent chicken wings fried crisp and glazed in smoky-sweet honey BBQ reduction.', price: 240, isPopular: true, image: 'https://images.unsplash.com/photo-1527477321055-43615862e771?auto=format&fit=crop&q=80&w=400' },
        { id: 'st-9', name: 'Loaded Cheesy French Fries', description: 'Crispy golden fries smothered in melted mozzarella, warm cheddar sauce, and sliced pickled jalapenos.', price: 170, isVeg: true, image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=400' },
        { id: 'st-10', name: 'Paneer Tikka Platter (6 Pcs)', description: 'Fresh malai paneer cubes marinated in Kashmiri deghi mirch yogurt marinade, skewered and tandoor roasted.', price: 260, isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=400' }
      ]
    },
    {
      id: 'momos',
      title: 'Momos (Steamed & Crispy)',
      items: [
        { id: 'mo-1', name: 'Steamed Chicken Momos (8 Pcs)', description: 'Juicy, soft steamed dumplings packed with seasoned chicken mince.', price: 140, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=400' },
        { id: 'mo-2', name: 'Fried Chicken Momos (8 Pcs)', description: 'Crisp, golden-fried chicken momos served with spicy red chutney.', price: 160, image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=400' },
        { id: 'mo-3', name: 'Kurkure Chicken Momos (8 Pcs)', description: 'Crispy, cornflake-crusted momos offering the ultimate crunch.', price: 180, isPopular: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400' },
        { id: 'mo-4', name: 'Veg Steamed Momos (8 Pcs)', description: 'Classic dumplings stuffed with finely minced garden vegetables.', price: 110, isVeg: true, image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=400' },
        { id: 'mo-5', name: 'Veg Kurkure Momos (8 Pcs)', description: 'Crispy-fried vegetable momos coated in crunchy flakes.', price: 150, isVeg: true, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=400' },
        { id: 'mo-6', name: 'Tandoori Malai Chicken Momos (8 Pcs)', description: 'Tandoor-roasted chicken momos smothered in rich cream, melted butter, chaat masala, and fresh coriander.', price: 210, isPopular: true, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=400' },
        { id: 'mo-7', name: 'Chilli Garlic Fried Momos (8 Pcs)', description: 'Crispy chicken momos wok-tossed with fresh minced garlic, capsicum, onions, and spicy chilli glaze.', price: 190, isSpicy: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400' },
        { id: 'mo-8', name: 'Paneer Steamed Momos (8 Pcs)', description: 'Soft handmade dumplings stuffed with seasoned malai paneer, spring onions, and subtle Himalayan spices.', price: 140, isVeg: true, image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=400' }
      ]
    },
    {
      id: 'wazwan',
      title: 'Kashmiri Wazwan Delicacies',
      items: [
        { id: 'wz-1', name: 'Mutton Rista (1 Pc)', description: 'Classic wazwan mutton meatball cooked in a rich saffron-infused red gravy.', price: 380, isPopular: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400' },
        { id: 'wz-2', name: 'Mutton Gushtaba (1 Pc)', description: 'Succulent mutton meatball slow-cooked in a smooth, velvety curd gravy.', price: 390, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=400' },
        { id: 'wz-3', name: 'Mutton Kanti', description: 'Tender mutton pieces sautéed with sliced onions, green chillies, and local spices.', price: 350, isSpicy: true, image: 'https://images.unsplash.com/photo-1574484284002-952d92a03a52?auto=format&fit=crop&q=80&w=400' },
        { id: 'wz-4', name: 'Tabak Maaz (2 Pcs)', description: 'Deep-fried lamb ribs cooked in milk and spices. Crispy on the outside, tender inside.', price: 360, image: 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&q=80&w=400' },
        { id: 'wz-5', name: 'Chicken Kanti', description: 'Boneless chicken cubes pan-fried with green chillies, onions, and Kashmiri spices.', price: 290, isSpicy: true, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=400' },
        { id: 'wz-6', name: 'Mutton Rogan Josh (2 Pcs)', description: 'World-renowned Kashmiri delicacy cooked in maval flower essence, dried Kashmiri red chillies, and traditional waza aromatic spices.', price: 390, isPopular: true, isSpicy: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=400' },
        { id: 'wz-7', name: 'Mutton Seekh Kebab (2 Skewers)', description: 'Minced mutton skewers seasoned with saffron, fresh coriander, ginger, and char-grilled over hot coals.', price: 320, isPopular: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400' },
        { id: 'wz-8', name: 'Chicken Rogan Josh (2 Pcs)', description: 'Tender bone-in chicken slow-cooked in a silky Kashmiri red gravy fragrant with fennel and cardamom.', price: 310, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=400' }
      ]
    },
    {
      id: 'biryani',
      title: 'Biryani & Rice',
      items: [
        { id: 'by-1', name: 'Barnacle Special Mutton Biryani', description: 'Dum-cooked basmati rice layered with juicy mutton and spices.', price: 420, isPopular: true, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400' },
        { id: 'by-2', name: 'Chicken Biryani (Half/Full)', description: 'Flavourful basmati rice cooked with marinated chicken pieces.', price: 220, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=400' },
        { id: 'by-3', name: 'Plain Basmati Rice', description: 'Steamed premium long-grain aromatic basmati rice.', price: 90, isVeg: true, image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=400' },
        { id: 'by-4', name: 'Jeera Rice', description: 'Basmati rice tempered with cumin seeds and fresh coriander.', price: 120, isVeg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400' },
        { id: 'by-5', name: 'Kashmiri Pulao', description: 'Sweetish rice preparation loaded with local dry fruits and fresh fruits.', price: 210, isVeg: true, image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=400' },
        { id: 'by-6', name: 'Hyderabadi Dum Chicken Biryani', description: 'Aromatic basmati rice layered with marinated chicken, saffron, fried onions, and served with mint raita.', price: 260, isPopular: true, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400' },
        { id: 'by-7', name: 'Paneer Tikka Biryani', description: 'Fragrant basmati rice dum-cooked with charcoal-smoked cottage cheese cubes and whole garam spices.', price: 210, isVeg: true, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=400' }
      ]
    },
    {
      id: 'maincourse',
      title: 'Main Course (North Indian)',
      items: [
        { id: 'mc-1', name: 'Butter Chicken Masala', description: 'Tandoori grilled chicken chunks cooked in a rich, buttery, creamy tomato gravy.', price: 340, isPopular: true, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=400' },
        { id: 'mc-2', name: 'Kadai Chicken', description: 'Spicy chicken cooked in a traditional iron wok with bell peppers and fresh ground spices.', price: 320, isSpicy: true, image: 'https://images.unsplash.com/photo-1574484284002-952d92a03a52?auto=format&fit=crop&q=80&w=400' },
        { id: 'mc-3', name: 'Paneer Butter Masala', description: 'Cottage cheese cubes folded into a creamy, mildly sweet tomato-onion gravy.', price: 260, isVeg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400' },
        { id: 'mc-4', name: 'Dal Makhani', description: 'Black lentils and kidney beans slow-cooked overnight, finished with fresh butter and cream.', price: 190, isVeg: true, image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=400' },
        { id: 'mc-5', name: 'Mix Veg Curry', description: 'Assorted seasonal vegetables tossed in a semi-dry onion-tomato gravy.', price: 180, isVeg: true, image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=400' },
        { id: 'mc-6', name: 'Mutton Rogan Josh Special Gravy', description: 'Slow-simmered Kashmiri bone-in lamb cooked in aromatic yogurt and Kashmiri mirch reduction.', price: 380, isPopular: true, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=400' },
        { id: 'mc-7', name: 'Kadhai Paneer Masala', description: 'Fresh cottage cheese cubes cooked with crunchy bell peppers, whole coriander seeds, and rustic onion gravy.', price: 250, isVeg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400' }
      ]
    },
    {
      id: 'breads',
      title: 'Breads & Accompaniments',
      items: [
        { id: 'br-1', name: 'Plain Tandoori Roti', description: 'Traditional whole-wheat flatbread baked in a clay oven.', price: 20, isVeg: true, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
        { id: 'br-2', name: 'Butter Tandoori Roti', description: 'Clay-oven baked flatbread brushed with premium butter.', price: 25, isVeg: true, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=400' },
        { id: 'br-3', name: 'Butter Naan', description: 'Soft, leavened flatbread topped with butter.', price: 50, isVeg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400' },
        { id: 'br-4', name: 'Garlic Naan', description: 'Soft naan topped with minced garlic and butter.', price: 70, isVeg: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400' },
        { id: 'br-5', name: 'Lacha Paratha', description: 'Multi-layered flaky whole-wheat bread baked in tandoor.', price: 60, isVeg: true, image: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?auto=format&fit=crop&q=80&w=400' },
        { id: 'br-6', name: 'Cheese Garlic Naan', description: 'Clay-oven naan stuffed with gooey melted mozzarella cheese and topped with crushed roasted garlic.', price: 90, isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400' }
      ]
    },
    {
      id: 'beverages',
      title: 'Beverages & Kahwa',
      items: [
        { id: 'bv-1', name: 'Kashmiri Kahwa', description: 'Saffron green tea brewed with cinnamon, cardamom, and almond flakes.', price: 90, isPopular: true, isVeg: true, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=400' },
        { id: 'bv-2', name: 'Noon Chai', description: 'Traditional Kashmiri pink tea, salty, creamy, and topped with milk skin.', price: 70, isVeg: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400' },
        { id: 'bv-3', name: 'Fresh Mint Mojito', description: 'Refreshing blend of fresh mint leaves, lime juice, sugar, and club soda.', price: 130, isVeg: true, image: 'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&q=80&w=400' },
        { id: 'bv-4', name: 'Cold Coffee with Ice Cream', description: 'Chilled blended milk, espresso, and sugar, topped with a scoop of vanilla ice cream.', price: 150, isVeg: true, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400' },
        { id: 'bv-5', name: 'Fresh Lime Soda (Sweet/Salted)', description: 'Zesty fresh lime juice mixed with fresh soda water.', price: 80, isVeg: true, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400' },
        { id: 'bv-6', name: 'Blue Lagoon Sparkler Mocktail', description: 'Vibrant blue curaçao syrup shaken with crushed ice, fresh lemon juice, mint sprigs, and chilled sparkling soda.', price: 140, isPopular: true, isVeg: true, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },
        { id: 'bv-7', name: 'Virgin Strawberry Colada Mocktail', description: 'Creamy blend of coconut milk, pineapple juice, and fresh strawberry coulis served over crushed ice.', price: 160, isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },
        { id: 'bv-8', name: 'Kashmiri Saffron Badam Milk', description: 'Warm full-cream milk slow-simmered with crushed green cardamom, Kashmiri saffron strands, and almond slivers.', price: 120, isVeg: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400' }
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        { id: 'ds-1', name: 'Kesari Kheer', description: 'Traditional slow-cooked saffron rice pudding topped with almonds and pistachios.', price: 110, isVeg: true, image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&q=80&w=400' },
        { id: 'ds-2', name: 'Gulab Jamun (2 Pcs)', description: 'Warm, soft milk-solid dumplings soaked in a cardamom-infused sugar syrup.', price: 80, isVeg: true, image: 'https://images.unsplash.com/photo-1601303516534-a3f5aca89e87?auto=format&fit=crop&q=80&w=400' },
        { id: 'ds-3', name: 'Hot Brownie with Vanilla Ice Cream', description: 'Rich chocolate fudge brownie served hot with a scoop of vanilla ice cream.', price: 180, isVeg: true, image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=400' },
        { id: 'ds-4', name: 'Kashmiri Phirni (Earthen Bowl)', description: 'Traditional Kashmiri ground rice pudding slow-simmered with saffron and condensed milk, served chilled in an earthen clay cup.', price: 120, isVeg: true, isPopular: true, image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&q=80&w=400' }
      ]
    }
  ] as MenuCategory[],

  // Customer Reviews (Authentic Kashmiri Patrons & Srinagar Visitors)
  reviews: [
    {
      id: 'rev-1',
      author: 'Sameer Wani',
      rating: 5,
      text: 'One of the best dining places in Srinagar! The Kurkure Momos are exceptionally crunchy and flavorful. The ambiance is warm and has a beautiful frosted-glass premium aesthetic. Highly recommended!',
      date: '1 week ago'
    },
    {
      id: 'rev-2',
      author: 'Mehak Bhat',
      rating: 5,
      text: 'The Kashmiri Wazwan dishes, especially Rista and Gushtaba, are absolutely authentic and melt-in-the-mouth. Hospitality is 10/10. It is a premium experience that doesn’t burn a hole in your pocket.',
      date: '3 weeks ago'
    },
    {
      id: 'rev-3',
      author: 'Irfan Dar',
      rating: 4,
      text: 'A great place in Hyderpora to chill with family. Their Special Mutton Biryani is incredibly aromatic and flavorful. Very friendly staff. Ordering via WhatsApp was quick and simple.',
      date: '1 month ago'
    },
    {
      id: 'rev-4',
      author: 'Sabrina Syed',
      rating: 5,
      text: 'Such an elegant cafe. The dark mode theme of the bistro matches Srinagar’s evening vibes. Their Kashmiri Kahwa is very authentic, packed with saffron and almonds. Will visit again!',
      date: '2 months ago'
    },
    {
      id: 'rev-5',
      author: 'Aadil Mir',
      rating: 5,
      text: 'The Sizzling Grilled Chicken Steak here is unmatched in Srinagar. Perfectly cooked with mushroom pepper sauce. A must-visit spot in Hyderpora!',
      date: '2 days ago'
    },
    {
      id: 'rev-6',
      author: 'Zainab Qadri',
      rating: 5,
      text: 'Came here with my university friends for dinner. The Tandoori Malai Momos are divine! Super creamy and smoky. Very cozy seating.',
      date: '4 days ago'
    },
    {
      id: 'rev-7',
      author: 'Umar Farooq Shah',
      rating: 5,
      text: 'Barnacle Bistro brings a true international bistro feel to Kashmir. The Mutton Rogan Josh tasted just like authentic waza cooking. 10/10.',
      date: '5 days ago'
    },
    {
      id: 'rev-8',
      author: 'Snober Lone',
      rating: 5,
      text: 'Loved the ambiance and aesthetic lighting. It is warm, modern, and quiet enough for meaningful conversations. The Blue Lagoon mocktail was so refreshing!',
      date: '1 week ago'
    },
    {
      id: 'rev-9',
      author: 'Faisal Ahmad Rather',
      rating: 4,
      text: 'Regular customer from Chanapora. Their takeaway delivery via WhatsApp is super prompt. Food reached piping hot within 35 minutes.',
      date: '1 week ago'
    },
    {
      id: 'rev-10',
      author: 'Dr. Bilal Zargar',
      rating: 5,
      text: 'Finally a quality restaurant in Hyderpora with proper parking and great family dining vibes. Mutton Kanti with Butter Naan was top notch.',
      date: '1 week ago'
    },
    {
      id: 'rev-11',
      author: 'Insha Sofi',
      rating: 5,
      text: 'Ordered Kurkure Momos and Peri Peri Fries for our office party. Everyone loved the crunch and signature dips! Will order again soon.',
      date: '2 weeks ago'
    },
    {
      id: 'rev-12',
      author: 'Tawfeeq Banday',
      rating: 5,
      text: 'The mutton quality in their Wazwan dishes is superior. Soft, well-pounded, and perfectly balanced spices. Reminds me of traditional home feasts.',
      date: '2 weeks ago'
    },
    {
      id: 'rev-13',
      author: 'Hina Mattoo',
      rating: 5,
      text: 'Celebrated my sister’s birthday here. The staff arranged the table very nicely. The Sizzling Brownie with Vanilla Ice Cream stole the show!',
      date: '2 weeks ago'
    },
    {
      id: 'rev-14',
      author: 'Junaid Reshi',
      rating: 4,
      text: 'Very good burgers! The Double Cheese Crispy Zinger Burger had a thick, juicy fillet and fresh brioche bun. Great value for money in Srinagar.',
      date: '2 weeks ago'
    },
    {
      id: 'rev-15',
      author: 'Ayesha Kawoosa',
      rating: 5,
      text: 'The Kashmiri Kahwa served here is genuinely infused with saffron and crushed almonds. Best place to escape the winter chill in Srinagar.',
      date: '3 weeks ago'
    },
    {
      id: 'rev-16',
      author: 'Owais Khan',
      rating: 5,
      text: 'Top notch cleanliness and 100% Halal assurance. Hyderpora Bypass needed a premium casual dining spot like Barnacle Bistro.',
      date: '3 weeks ago'
    },
    {
      id: 'rev-17',
      author: 'Nida Ashai',
      rating: 5,
      text: 'The frosted glass interiors and candle lighting create such a lovely mood. Best chicken steamed momos in town. Very polite service staff.',
      date: '3 weeks ago'
    },
    {
      id: 'rev-18',
      author: 'Mudasir Buchh',
      rating: 4,
      text: 'Mutton Dum Biryani was fragrant, non-greasy, and cooked with authentic long-grain basmati. Portions are generous.',
      date: '3 weeks ago'
    },
    {
      id: 'rev-19',
      author: 'Sobia Geelani',
      rating: 5,
      text: 'Visited with my family on Sunday evening. The Butter Chicken with Garlic Naan was rich, velvety, and so delicious. Kids enjoyed the chicken popcorn.',
      date: '1 month ago'
    },
    {
      id: 'rev-20',
      author: 'Zubair Drabu',
      rating: 5,
      text: 'Everything from the plating to the taste shows high standards. Barnacle Bistro is easily among the top 5 bistros across Srinagar right now.',
      date: '1 month ago'
    },
    {
      id: 'rev-21',
      author: 'Tanveer Hamdani',
      rating: 5,
      text: 'Ordered on Zomato during heavy rain. Delivery was fast and food packaging was completely leak-proof and warm. Commendable service!',
      date: '1 month ago'
    },
    {
      id: 'rev-22',
      author: 'Farhana Fazili',
      rating: 5,
      text: 'The ambience feels like a boutique cafe in Europe combined with the warmth of Kashmir. Loved the Paneer Butter Masala and Fresh Lime Soda.',
      date: '1 month ago'
    },
    {
      id: 'rev-23',
      author: 'Burhan Bazaz',
      rating: 4,
      text: 'Great chicken kanti skewers. Perfectly charred with onions and green chillies. Ideal place to sit with friends after college.',
      date: '1 month ago'
    },
    {
      id: 'rev-24',
      author: 'Mahrukh Tramboo',
      rating: 5,
      text: 'Super aesthetic spot for photos and reels! But more importantly, the food genuinely backs up the hype. Kurkure momos are a 10/10.',
      date: '1 month ago'
    },
    {
      id: 'rev-25',
      author: 'Shakir Teng',
      rating: 5,
      text: 'The mutton meatballs in the Gushtaba were fluffy, velvety, and bathed in rich yogurt gravy. True Kashmiri Wazwan craftsmanship.',
      date: '1 month ago'
    },
    {
      id: 'rev-26',
      author: 'Arif Beigh',
      rating: 5,
      text: 'Booked a table for 6 over WhatsApp. Reservation was confirmed in minutes and the table was kept ready when we reached. Excellent hospitality.',
      date: '1 month ago'
    },
    {
      id: 'rev-27',
      author: 'Iqra Makhdoomi',
      rating: 5,
      text: 'The Honey Chilli Potato and Cold Coffee with Ice Cream are my go-to evening snack combination here. Never disappoints.',
      date: '1 month ago'
    },
    {
      id: 'rev-28',
      author: 'Danish Gilkar',
      rating: 4,
      text: 'Good seating, peaceful music, and delicious sizzlers. Barnacle Bistro is setting a benchmark for Hyderpora restaurants.',
      date: '2 months ago'
    },
    {
      id: 'rev-29',
      author: 'Tabasum Nahvi',
      rating: 5,
      text: 'Warm ambiance with glowing Edison lights. Very safe and comfortable for women dining out in the evening. Loved the pink Noon Chai!',
      date: '2 months ago'
    },
    {
      id: 'rev-30',
      author: 'Rameez Shawl',
      rating: 5,
      text: 'Their Mutton Dum Biryani has that distinctive aroma you only get in genuine dum cooking. Generous pieces of tender meat.',
      date: '2 months ago'
    },
    {
      id: 'rev-31',
      author: 'Sahar Andrabi',
      rating: 5,
      text: 'The Tandoori Malai Momos are hands-down the best in Srinagar. So juicy and seasoned to perfection. Don’t miss their mint mojito.',
      date: '2 months ago'
    },
    {
      id: 'rev-32',
      author: 'Aamir Chisti',
      rating: 4,
      text: 'Crispy French Fries and Zinger Burger were fresh and crispy. Great place to grab a quick bite near the highway.',
      date: '2 months ago'
    },
    {
      id: 'rev-33',
      author: 'Sehrish Naqash',
      rating: 5,
      text: 'Wonderful experience. The staff is polite and very attentive. Clean washrooms and great hygiene standards throughout the kitchen.',
      date: '2 months ago'
    },
    {
      id: 'rev-34',
      author: 'Waseem Akhoon',
      rating: 5,
      text: 'Tabak Maaz was crispy on the outside, tender on the inside, and fried to absolute perfection. Wazwan lovers must try this place.',
      date: '2 months ago'
    },
    {
      id: 'rev-35',
      author: 'Shazia Baqal',
      rating: 5,
      text: 'Such a peaceful refuge from traffic. The dark theme decor gives it a luxury lounge vibe. Prices are very reasonable for the quality.',
      date: '3 months ago'
    },
    {
      id: 'rev-36',
      author: 'Khalid Bhatti',
      rating: 4,
      text: 'Solid 4.5 stars. Dal Makhani was slow-cooked and creamy, went great with Lacha Paratha. Friendly managers.',
      date: '3 months ago'
    },
    {
      id: 'rev-37',
      author: 'Mariya Zaffar',
      rating: 5,
      text: 'The Sizzling Brownie with Ice Cream is pure joy! Perfect spot for dessert after dinner in Srinagar.',
      date: '3 months ago'
    },
    {
      id: 'rev-38',
      author: 'Yawar Mir',
      rating: 5,
      text: 'I travel often to Srinagar on business and Barnacle Bistro in Hyderpora has become my regular dining spot. Consistent quality every time.',
      date: '3 months ago'
    },
    {
      id: 'rev-39',
      author: 'Bazila Rafiqi',
      rating: 5,
      text: 'Fresh ingredients and authentic taste. Saffron Kahwa tasted like real Kashmiri saffron without artificial syrups. Highly satisfied.',
      date: '3 months ago'
    },
    {
      id: 'rev-40',
      author: 'Rayees Gujree',
      rating: 4,
      text: 'Good portion sizes and fair pricing. The chicken momos are large and filled generously. Parking right outside is very convenient.',
      date: '3 months ago'
    },
    {
      id: 'rev-41',
      author: 'Anika Peerzada',
      rating: 5,
      text: 'A hidden gem in Gulshanabad, Hyderpora. The frosted glass aesthetic and cozy seating make every dinner feel special.',
      date: '4 months ago'
    },
    {
      id: 'rev-42',
      author: 'Shahid Khanyari',
      rating: 5,
      text: 'The Mutton Rista gravy had the perfect kick of saffron and hing. You can tell they use genuine waza recipes.',
      date: '4 months ago'
    },
    {
      id: 'rev-43',
      author: 'Uzma Gowhar',
      rating: 5,
      text: 'Ordered delivery for an Eid family dinner. All packages were labeled, sealed, and hot. Everyone praised the Mutton Dum Biryani.',
      date: '4 months ago'
    },
    {
      id: 'rev-44',
      author: 'Naveed Tramboo',
      rating: 5,
      text: 'Best sizzling chicken steak in the valley! The garlic butter herb glaze is outstanding. Will keep coming back.',
      date: '4 months ago'
    },
    {
      id: 'rev-45',
      author: 'Munaza Kafeel',
      rating: 5,
      text: 'Lovely hospitality from the team. They accommodated our large family gathering of 10 effortlessly. Food arrived quickly.',
      date: '4 months ago'
    },
    {
      id: 'rev-46',
      author: 'Parvez Koul',
      rating: 4,
      text: 'Great Kashmiri Pulao loaded with dry fruits and pomegranate seeds. Very rich and flavourful.',
      date: '5 months ago'
    },
    {
      id: 'rev-47',
      author: 'Asma Shahdad',
      rating: 5,
      text: 'Such a chic and classy bistro in Srinagar. We need more places like Barnacle Bistro. Definitely a must-visit for foodies!',
      date: '5 months ago'
    },
    {
      id: 'rev-48',
      author: 'Irfan Ul Haq',
      rating: 5,
      text: 'Chicken Kanti with tandoori roti was incredible. Spices were well balanced and meat was tender. 5 stars all the way.',
      date: '5 months ago'
    },
    {
      id: 'rev-49',
      author: 'Afifa Qureshi',
      rating: 5,
      text: 'Warm ambiance, delicious hot momos, and soothing music. Perfect hangout spot on chilly Srinagar evenings.',
      date: '5 months ago'
    },
    {
      id: 'rev-50',
      author: 'Showkat Ali Wani',
      rating: 5,
      text: 'Barnacle Bistro represents modern Srinagar hospitality at its finest. From wazwan rista to continental sizzlers, everything was flawless.',
      date: '6 months ago'
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
