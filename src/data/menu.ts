export type FoodItem = {
  name: string;
  slug: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  featured?: boolean;
  image: string;
  isVeg: boolean;
  category?: string;
};

export const menuItems: FoodItem[] = [
  {
    name: "Pepper Chicken",
    slug: "pepper-chicken",
    description: "Chicken, black pepper, onions, spices",
    price: "$ 56.82 USD",
    originalPrice: "$ 5,093.58 USD",
    image: "/images/shop-image-01.png",
    isVeg: false,
    category: "Appetizers",
  },
  {
    name: "Chicken Biryani",
    slug: "chicken-biryani",
    description: "Chicken, rice, spices, onions, yogurt",
    price: "$ 38.92 USD",
    originalPrice: "$ 3,912.04 USD",
    image: "/images/shop-image-02.png",
    isVeg: false,
    category: "Main Courses",
  },
  {
    name: "Pot Rice",
    slug: "pot-rice",
    description: "Rice, vegetables, spices, oil, salt",
    price: "$ 10.38 USD",
    originalPrice: "$ 8,853.90 USD",
    image: "/images/shop-image-03.png",
    isVeg: true,
    badge: "50% OFF",
    featured: true,
    category: "Main Courses",
  },
  {
    name: "Mongolian Beef",
    slug: "mongolian-beef",
    description: "Beef, soy sauce, garlic, ginger, green onions",
    price: "$ 72.85 USD",
    originalPrice: "$ 2,246.80 USD",
    image: "/images/shop-image-04.png",
    isVeg: false,
    badge: "25% OFF",
    category: "Main Courses",
  },
  {
    name: "Broccoli with Meat",
    slug: "broccoli-with-meat",
    description: "Broccoli, meat, soy sauce, garlic, ginger, green onions",
    price: "$ 42.85 USD",
    originalPrice: "$ 7,684.09 USD",
    image: "/images/food 1.png",
    isVeg: false,
    category: "Starters",
  },
];
