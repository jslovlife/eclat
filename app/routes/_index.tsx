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
    <div className="h-[70vh] md:h-screen bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 overflow-hidden relative rounded-b-[40px] md:rounded-b-[60px] flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content - Mobile: Column layout, Desktop: Row layout */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row md:items-end md:justify-between px-4 md:px-8 lg:px-16 pb-20 md:pb-12 lg:pb-16">
        
        {/* Food Illustration - Mobile: Center top, Desktop: Right side */}
        <div className="flex-1 flex justify-center items-center md:order-2 md:-ml-16 lg:-ml-32 pt-8 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
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


    </div>
  );
}
