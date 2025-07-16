import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20 md:relative bg-slate-800/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
      {/* Logo */}
      <div className="flex justify-center md:justify-start px-8 lg:px-16 pt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="/mainpage/main-logo.png" 
            alt="Makanlor" 
            className="w-32 md:w-48 lg:w-56 h-auto"
          />
        </motion.div>
      </div>
      
      {/* Navigation Links - Mobile: Under logo, Desktop: Top right */}
      <nav className="flex flex-row md:absolute md:top-6 md:right-8 lg:right-16 items-center justify-center md:justify-end px-8 lg:px-16 pb-4 md:pb-0 space-x-4 md:space-x-6">
        <motion.a 
          href="#story" 
          className="text-white hover:text-orange-300 transition-colors duration-300 font-medium tracking-wide text-sm md:text-base"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          STORY
        </motion.a>
        <motion.a 
          href="#foods" 
          className="text-white hover:text-orange-300 transition-colors duration-300 font-medium tracking-wide text-sm md:text-base"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          FOODS
        </motion.a>
        <motion.a 
          href="#contact" 
          className="text-white hover:text-orange-300 transition-colors duration-300 font-medium tracking-wide text-sm md:text-base"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          CONTACT
        </motion.a>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold tracking-wide shadow-lg transition-all duration-300 text-sm md:text-base"
        >
          ORDER
        </motion.button>
      </nav>
    </div>
  );
} 