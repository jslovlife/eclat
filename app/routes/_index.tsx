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
    <section className="h-[75vh] md:h-screen bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 overflow-hidden relative rounded-b-[40px] md:rounded-b-[60px] flex flex-col">
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
    <section id="story" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-slate-800 text-center mb-16 lg:mb-24"
        >
          OUR STORY
        </motion.h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 xl:gap-32 items-center">
          
          {/* Left Side - Logo and Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 order-1 md:order-1 text-center md:text-left flex flex-col justify-center"
          >
            {/* Makanlor Logo */}
            <div className="mb-8 lg:mb-12 flex justify-center md:justify-start">
              <img 
                src="/mainpage/main-logo-small.png" 
                alt="Makanlor" 
                className="w-80 md:w-96 lg:w-[350px] xl:w-[400px] h-auto"
              />
            </div>
            
            {/* Poetic Text */}
            <div className="space-y-4 lg:space-y-6 text-md md:text-lg lg:text-xl xl:text-2xl text-slate-700 leading-relaxed lg:leading-loose">
              <p>isn't just a name; it's our promise</p>
              <p>Crafted with love by kopitiam food lovers</p>
              <p>We pour passion into every dish</p>
              <p>Every bite celebrates, and joy is found</p>
            </div>
          </motion.div>

          {/* Right Side - Single Food Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 md:order-2 flex justify-center md:justify-end"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
              <div className="w-full h-full bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/mainpage/food-1.png" 
                  alt="Kopitiam Food" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    {/* Foods Section */}
    <section id="foods" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-10xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-slate-800 text-center mb-16 lg:mb-24"
        >
          OUR SIGNATURES
        </motion.h2>

        {/* Scrollable Food Cards */}
        <div className="relative">
          {/* Gradient Overlays for Scroll Indication */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Horizontal Scroll Container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar"
          >
            {/* Food Card 1 - Teh Tarik */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex-none w-64 md:w-72 lg:w-80 snap-center"
            >
              <div className="bg-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-96 md:h-[420px] flex flex-col">
                {/* Food Image */}
                <div className="flex-1 mb-4 rounded-2xl overflow-hidden bg-white">
                  <img 
                    src="/mainpage/food-1.png" 
                    alt="Teh Tarik" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Food Info */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">Teh Tarik</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Traditional Malaysian pulled tea with rich, creamy flavor and frothy texture
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Food Card 2 - Nasi Lemak */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex-none w-64 md:w-72 lg:w-80 snap-center"
            >
              <div className="bg-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-96 md:h-[420px] flex flex-col">
                {/* Food Image */}
                <div className="flex-1 mb-4 rounded-2xl overflow-hidden bg-white">
                  <img 
                    src="/mainpage/food-2.png" 
                    alt="Nasi Lemak" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Food Info */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">Nasi Lemak</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Fragrant coconut rice with sambal, anchovies, egg, and cucumber
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Food Card 3 - Char Kway Teow */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex-none w-64 md:w-72 lg:w-80 snap-center"
            >
              <div className="bg-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-96 md:h-[420px] flex flex-col">
                {/* Food Image */}
                <div className="flex-1 mb-4 rounded-2xl overflow-hidden bg-white">
                  <img 
                    src="/mainpage/food-3.png" 
                    alt="Char Kway Teow" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Food Info */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">Char Kway Teow</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Stir-fried flat rice noodles with prawns, cockles, and bean sprouts
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Food Card 4 - Kopi O */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex-none w-64 md:w-72 lg:w-80 snap-center"
            >
              <div className="bg-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-96 md:h-[420px] flex flex-col">
                {/* Food Image */}
                <div className="flex-1 mb-4 rounded-2xl overflow-hidden bg-white">
                  <img 
                    src="/mainpage/food-1.png" 
                    alt="Kopi O" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Food Info */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">Kopi O</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Traditional black coffee with sugar, bold and aromatic
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Food Card 5 - Roti Bakar */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex-none w-64 md:w-72 lg:w-80 snap-center"
            >
              <div className="bg-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-96 md:h-[420px] flex flex-col">
                {/* Food Image */}
                <div className="flex-1 mb-4 rounded-2xl overflow-hidden bg-white">
                  <img 
                    src="/mainpage/food-2.png" 
                    alt="Roti Bakar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Food Info */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">Roti Bakar</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Crispy toasted bread with kaya and butter, a kopitiam classic
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Instruction */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 mt-8 text-sm md:text-base"
        >
          Swipe to explore more delicious kopitiam treats →
        </motion.p>
      </div>
    </section>
    {/* Contact Section */}
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-white text-center mb-16 lg:mb-24"
        >
          CONTACT US
        </motion.h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-12"
          >
            {/* Address */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-400 flex items-center gap-3">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Our Location
              </h3>
              <div className="text-gray-300 text-lg md:text-xl leading-relaxed pl-9 md:pl-11">
                <p>Makanlor Kopitiam</p>
                <p>123 Jalan Petaling,</p>
                <p>Chinatown, 50000 Kuala Lumpur,</p>
                <p>Federal Territory of Kuala Lumpur, Malaysia</p>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-400 flex items-center gap-3">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us
              </h3>
              <div className="text-gray-300 text-lg md:text-xl pl-9 md:pl-11">
                <a href="tel:+60321234567" className="hover:text-orange-400 transition-colors duration-300">
                  +60 3-2123 4567
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-400 flex items-center gap-3">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Opening Hours
              </h3>
              <div className="text-gray-300 text-lg md:text-xl pl-9 md:pl-11 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="text-orange-300">7:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday - Sunday</span>
                  <span className="text-orange-300">6:30 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Public Holidays</span>
                  <span className="text-orange-300">8:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-400 flex items-center gap-3">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Follow Us
              </h3>
              <div className="flex space-x-6 pl-9 md:pl-11">
                {/* Facebook */}
                <motion.a
                  href="https://facebook.com/makanlor"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                
                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/makanlor"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8158469832896!2d101.69498931475385!3d3.1412620975285957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e58d%3A0x6019837c7c767df1!2sJalan%20Petaling%2C%20City%20Centre%2C%2050000%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1624987432123!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Makanlor Kopitiam Location"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm md:text-base">
            Powered by <span className="text-orange-400 font-semibold">Makanlor Technologies</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm mt-2">
            © 2024 Makanlor Kopitiam. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
    </>
  );
}
