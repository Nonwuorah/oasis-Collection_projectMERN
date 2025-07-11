import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroSection from "../components/HeroSection";

const categories = [
  { href: "/all", name: "All Categories", imageUrl: "/all-categories.jpg" },
  { href: "/womens", name: "Womens", imageUrl: "/oasis-womens.JPG" },
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/clothes", name: "Clothes", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
  { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
  { href: "/perfumes", name: "Perfumes", imageUrl: "/perfumes.jpg" },
  { href: "/accessories", name: "Accessories", imageUrl: "/accessories.jpg" },
  { href: "/awoof-sales", name: "Awoof Sales", imageUrl: "/awoof sales.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Explore Our Categories
        </h2>
        <p className="text-center text-xl text-gray-300 mb-12">
          Find exactly what you&apos;re looking for in our carefully curated
          collections
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
};
export default HomePage;
