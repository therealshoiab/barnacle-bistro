export interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
  ogImage?: string;
}

const defaultMetadata: PageMetadata = {
  title: "Barnacle Bistro | Best Restaurant & Cafe in Srinagar",
  description: "Savor the premium culinary experience at Barnacle Bistro in Hyderpora, Srinagar. From delicious starters and legendary momos to authentic Kashmiri grills and main courses. Taste the difference!",
  keywords: "Restaurant in Srinagar, Cafe in Srinagar, Best Momos in Srinagar, Best Grills in Srinagar, Barnacle Bistro Srinagar, Restaurants Near Hyderpora, Hyderpora Food, Kashmir dining",
  ogType: "website",
  ogImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
};

const pagesMeta: Record<string, PageMetadata> = {
  home: {
    title: "Barnacle Bistro | Premium Restaurant & Cafe in Srinagar",
    description: "Welcome to Barnacle Bistro, Srinagar's ultimate dining destination for premium grills, momos, and multi-cuisine delicacies. Located in Hyderpora, Srinagar.",
    keywords: "Barnacle Bistro, Cafe in Srinagar, Best Grill in Srinagar, Restaurant Hyderpora"
  },
  about: {
    title: "About Us | Barnacle Bistro Srinagar",
    description: "Discover the story of Barnacle Bistro. Learn about our commitment to fresh ingredients, comfortable atmosphere, and excellent customer-first hospitality in Kashmir.",
    keywords: "Barnacle Bistro story, about restaurant srinagar, family restaurant srinagar"
  },
  menu: {
    title: "Our Menu | Grills, Momos, Main Course & More | Barnacle Bistro",
    description: "Explore the delicious menu at Barnacle Bistro. From chicken starters and malai momos to mutton dishes, mocktails, and desserts, we have it all at affordable prices.",
    keywords: "Barnacle Bistro menu, best momos menu, wazwan price srinagar, fast food menu srinagar"
  },
  signatures: {
    title: "Signature Dishes | Barnacle Bistro",
    description: "Taste our absolute favorites! Try Srinagar's best Shawarma Roll, Mutton Seekh Grills, Butter Chicken, and mocktails at Barnacle Bistro.",
    keywords: "best seekh kebab srinagar, chicken kanti srinagar, signature food srinagar"
  },
  gallery: {
    title: "Gallery | Food & Ambience Visuals | Barnacle Bistro",
    description: "Take a virtual tour of Barnacle Bistro. Browse high-quality images and videos of our mouth-watering dishes, dining space, customers, and restaurant vibe.",
    keywords: "Srinagar cafe photos, restaurant ambiance pictures, food gallery srinagar"
  },
  reviews: {
    title: "Customer Reviews (4.5★) | Barnacle Bistro",
    description: "Read what our customers say about our delicious food and cozy atmosphere. Rated 4.5 stars with over 500+ reviews in Srinagar.",
    keywords: "Barnacle Bistro reviews, customer rating srinagar, best chicken momos feedback"
  },
  order: {
    title: "Order Online | Swiggy & Zomato Delivery | Barnacle Bistro",
    description: "Order food online from Barnacle Bistro. Fast delivery via Zomato and Swiggy or call us directly for takeaway and drive-through orders in Srinagar.",
    keywords: "order online srinagar, Barnacle Zomato, Barnacle Swiggy, food delivery Hyderpora"
  },
  contact: {
    title: "Contact & Table Reservations | Barnacle Bistro",
    description: "Find us at Gulshanabad, Hyderpora, Srinagar. Call +91 9906387311 or chat on WhatsApp to make a reservation or get driving directions.",
    keywords: "Barnacle Bistro contact, table booking srinagar, Hyderpora cafe directions"
  },
  faq: {
    title: "Frequently Asked Questions | Barnacle Bistro",
    description: "Have questions about reservations, home delivery, average cost, or menu options? Find all the answers in our FAQ page.",
    keywords: "restaurant FAQ srinagar, delivery details srinagar"
  },
  privacy: {
    title: "Privacy Policy | Barnacle Bistro",
    description: "Read the privacy policy of Barnacle Bistro regarding customer data protection.",
    keywords: "privacy policy"
  },
  terms: {
    title: "Terms & Conditions | Barnacle Bistro",
    description: "Read the terms of service and dining conditions for Barnacle Bistro.",
    keywords: "terms and conditions"
  }
};

export function updateSEO(pageKey: string): void {
  const meta = pagesMeta[pageKey] || defaultMetadata;
  
  // Update Document Title
  document.title = meta.title;
  
  // Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', meta.description);

  // Update Meta Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', meta.keywords || defaultMetadata.keywords);

  // Update Open Graph Tags
  updateMetaTag('og:title', meta.title);
  updateMetaTag('og:description', meta.description);
  updateMetaTag('og:type', meta.ogType || defaultMetadata.ogType!);
  updateMetaTag('og:image', meta.ogImage || defaultMetadata.ogImage!);
  updateMetaTag('og:url', window.location.href);

  // Update Twitter Cards
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', meta.title);
  updateMetaTag('twitter:description', meta.description);
  updateMetaTag('twitter:image', meta.ogImage || defaultMetadata.ogImage!);

  // Inject/Update JSON-LD Schema
  injectJSONLD();
}

function updateMetaTag(property: string, content: string): void {
  let tag = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    if (property.startsWith('og:')) {
      tag.setAttribute('property', property);
    } else {
      tag.setAttribute('name', property);
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function injectJSONLD(): void {
  const schemaId = "jsonld-restaurant-schema";
  let script = document.getElementById(schemaId) as HTMLScriptElement;
  if (!script) {
    script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Barnacle Bistro",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
    "url": "https://www.zomato.com/srinagar/barnacle-bistro-chanapora/order",
    "telephone": "+919906387311",
    "priceRange": "₹150-600 per person",
    "servesCuisine": ["Continental", "Momos", "Wazwan", "Biryani", "North Indian", "Fast Food"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 2, And 3, Gulshanabad, Hyderpora",
      "addressLocality": "Srinagar",
      "addressRegion": "Jammu & Kashmir",
      "postalCode": "190014",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.032128,
      "longitude": 74.801235
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "528"
    },
    "sameAs": [
      "https://www.zomato.com/srinagar/barnacle-bistro-chanapora/order",
      "https://github.com/therealshoiab/barnacle-bistro"
    ]
  };

  script.text = JSON.stringify(restaurantSchema, null, 2);
}
