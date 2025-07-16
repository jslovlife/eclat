import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Makanlor - Awaken Your Taste at Kopitiam" },
    { name: "description", content: "Welcome to Makanlor! Awaken Your Taste at Kopitiam!" },
  ];
};

export default function Index() {
  return (
    <>
    <section className="h-[70vh] md:h-screen bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 overflow-hidden relative rounded-b-[40px] md:rounded-b-[60px] flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content - Mobile: Column layout, Desktop: Row layout */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row md:items-end md:justify-between px-4 md:px-8 lg:px-16 pb-20 md:pb-12 lg:pb-16">
        
        {/* Food Illustration - Mobile: Center top, Desktop: Right side */}
        <div className="flex-1 flex justify-center items-center md:order-2 md:-ml-16 lg:-ml-32 pt-8 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: -10 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotate: 0,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              opacity: { duration: 1, delay: 0.5, ease: "easeOut" },
              x: { duration: 1, delay: 0.5, ease: "easeOut" },
              rotate: { duration: 1, delay: 0.5, ease: "easeOut" },
              scale: { 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.5
              }
            }}
            className="relative"
          >
            <img 
              src="/mainpage/food.png" 
              alt="Kopitiam Food and Drinks" 
              className="w-[350px] md:w-[450px] lg:w-[600px] xl:w-[750px] 2xl:w-[850px] h-auto drop-shadow-2xl max-h-[45vh] md:max-h-[65vh] object-contain"
            />
            
            {/* Floating Animation */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0"
            >
              <img 
                src="/mainpage/food.png" 
                alt="Kopitiam Food and Drinks" 
                className="w-[350px] md:w-[450px] lg:w-[600px] xl:w-[750px] 2xl:w-[850px] h-auto opacity-0 max-h-[45vh] md:max-h-[65vh] object-contain"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Tagline - Mobile: Below food, Desktop: Left side */}
        <div className="flex-1 max-w-xl flex justify-center md:justify-start items-end md:order-1 pt-2 md:pt-0 pb-0 md:pb-12 lg:pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-white text-xl md:text-xl lg:text-2xl font-bold leading-relaxed text-center md:text-left"
          >
            Awaken Your Taste at Kopitiam!
          </motion.h1>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-orange-900/10" />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </section>

    {/* Story Section */}
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8"
          >
            OUR STORY
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
              Welcome to <span className="font-semibold text-orange-500">Makanlor</span>, where traditional kopitiam culture meets modern culinary excellence. Our journey began with a simple dream: to recreate the authentic flavors and warm atmosphere of the classic Malaysian coffee shops.
            </p>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
              Every cup of coffee is carefully brewed using time-honored techniques, while our signature toast is prepared with love and precision. We believe that great food brings people together, creating moments of joy and connection in our fast-paced world.
            </p>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              At Makanlor, we're not just serving food and drinks – we're preserving a rich cultural heritage and sharing it with a new generation. Come experience the authentic taste of kopitiam tradition, where every bite tells a story.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              Discover Our Menu
            </button>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
