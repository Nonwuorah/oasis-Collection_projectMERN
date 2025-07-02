import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Star,
  Truck,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import bg from "../../public/bg.jpg";

const slides = [
  {
    id: 1,
    title: "Welcome to Your",
    subtitle: "Style Sanctuary",
    description:
      "Discover curated fashion, timeless accessories, and everyday essentials that bring beauty and comfort to your world.",
    backgroundImage: bg,
    primaryButton: {
      text: "Shop Now",
      link: "/category/all",
      icon: ShoppingBag,
    },
    secondaryButton: {
      text: "View Women",
      link: "/category/womens",
      icon: Star,
    },
    theme: "emerald",
  },
  {
    id: 2,
    title: "Summer Collection",
    subtitle: "Hot Deals",
    description:
      "Beat the heat with our stunning summer collection. Fresh styles, vibrant colors, and unbeatable prices.",
    backgroundImage:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    primaryButton: {
      text: "Shop Summer",
      link: "/category/t-shirts",
      icon: ShoppingBag,
    },
    secondaryButton: {
      text: "View Perfumes",
      link: "/category/perfumes",
      icon: Star,
    },
    theme: "orange",
  },
  {
    id: 3,
    title: "Premium",
    subtitle: "Accessories",
    description:
      "Complete your look with our handpicked accessories. From elegant jewelry to stylish bags.",
    backgroundImage:
      "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
    primaryButton: {
      text: "Shop Accessories",
      link: "/category/accessories",
      icon: ShoppingBag,
    },
    secondaryButton: { text: "View Bags", link: "/category/bags", icon: Star },
    theme: "purple",
  },
  {
    id: 4,
    title: "Footwear",
    subtitle: "Collection",
    description:
      "Step into style with our premium footwear collection. Comfort meets fashion in every step.",
    backgroundImage:
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
    primaryButton: {
      text: "Shop Shoes",
      link: "/category/shoes",
      icon: ShoppingBag,
    },
    secondaryButton: { text: "View All", link: "/category/jeans", icon: Star },
    theme: "blue",
  },
  {
    id: 5,
    title: "Awoof Sales",
    subtitle: "Up to 70% Off",
    description:
      "Don't miss out on our biggest sale of the year. Limited time offers on your favorite brands.",
    backgroundImage:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
    primaryButton: {
      text: "Shop Sale",
      link: "/category/awoof-sales",
      icon: Star,
    },
    secondaryButton: {
      text: "All Categories",
      link: "/all",
      icon: ShoppingBag,
    },
    theme: "red",
  },
];

const themeColors = {
  emerald: {
    primary: "bg-emerald-600 hover:bg-emerald-700",
    secondary: "border-emerald-400 text-emerald-400 hover:bg-emerald-400",
    accent: "text-emerald-400",
    feature: "bg-emerald-600",
  },
  orange: {
    primary: "bg-orange-600 hover:bg-orange-700",
    secondary: "border-orange-400 text-orange-400 hover:bg-orange-400",
    accent: "text-orange-400",
    feature: "bg-orange-600",
  },
  purple: {
    primary: "bg-purple-600 hover:bg-purple-700",
    secondary: "border-purple-400 text-purple-400 hover:bg-purple-400",
    accent: "text-purple-400",
    feature: "bg-purple-600",
  },
  blue: {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "border-blue-400 text-blue-400 hover:bg-blue-400",
    accent: "text-blue-400",
    feature: "bg-blue-600",
  },
  red: {
    primary: "bg-red-600 hover:bg-red-700",
    secondary: "border-red-400 text-red-400 hover:bg-red-400",
    accent: "text-red-400",
    feature: "bg-red-600",
  },
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];
  const theme = themeColors[currentSlideData.theme];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Images with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90 z-10" />
          <img
            src={currentSlideData.backgroundImage}
            alt="Fashion Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                {currentSlideData.title}
                <span className={`block ${theme.accent}`}>
                  {currentSlideData.subtitle}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4"
              >
                {currentSlideData.description}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              <Link
                to={currentSlideData.primaryButton.link}
                className={`group ${theme.primary} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center`}
              >
                <currentSlideData.primaryButton.icon
                  size={20}
                  className="sm:w-6 sm:h-6"
                />
                <span>{currentSlideData.primaryButton.text}</span>
              </Link>

              <Link
                to={currentSlideData.secondaryButton.link}
                className={`group border-2 ${theme.secondary} hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center`}
              >
                <currentSlideData.secondaryButton.icon
                  size={20}
                  className="sm:w-6 sm:h-6"
                />
                <span>{currentSlideData.secondaryButton.text}</span>
              </Link>
            </motion.div>

            {/* Features - Only show on first slide */}
            {currentSlide === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto px-4"
              >
                <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-emerald-500/30">
                  <div className={`p-2 sm:p-3 ${theme.feature} rounded-full`}>
                    <Truck className="text-white" size={20} />
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    Free Shipping
                  </h3>
                  <p className="text-gray-300 text-sm text-center">
                    Free delivery on orders over $500
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-emerald-500/30">
                  <div className={`p-2 sm:p-3 ${theme.feature} rounded-full`}>
                    <Shield className="text-white" size={20} />
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    Secure Payment
                  </h3>
                  <p className="text-gray-300 text-sm text-center">
                    100% secure and encrypted transactions
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-emerald-500/30">
                  <div className={`p-2 sm:p-3 ${theme.feature} rounded-full`}>
                    <Star className="text-white" size={20} />
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    Premium Quality
                  </h3>
                  <p className="text-gray-300 text-sm text-center">
                    Carefully curated products for you
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? `${theme.feature.replace("bg-", "bg-")} scale-125`
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-30">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 15, ease: "linear" }}
          className={`h-full ${theme.feature}`}
        />
      </div>

      {/* Scroll Indicator - Only show on first slide */}
      {currentSlide === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-300 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center`}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;
