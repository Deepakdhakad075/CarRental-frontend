import React from "react";
import { motion } from "framer-motion";
import { Car, MapPin, KeyRound, DollarSign } from "lucide-react";

const features = [
  {
    id: 1,
    icon: (
      <Car className="w-8 h-8 text-indigo-700 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
    ),
    title: "Explore Our Car Rental Services",
    description:
      "Looking for a vehicle for an upcoming journey or a quick errand? We offer a variety of options.",
  },
  {
    id: 2,
    icon: (
      <MapPin className="w-8 h-8 text-indigo-700 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
    ),
    title: "Choose From Our Car Rentals",
    description:
      "Unlock hidden destinations and unforgettable experiences. Book your car rental now!",
  },
  {
    id: 3,
    icon: (
      <DollarSign className="w-8 h-8 text-indigo-700 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
    ),
    title: "Affordable Car Rentals",
    description:
      "Unlock adventure and freedom on your trip with a budget-friendly car rental.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const FeaturesSection = () => {
  return (
    <section className="bg-slate-200 py-12 md:py-20 px-6 font-montserrat">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
          Unlock Freedom with Our{" "}
          <span className="text-red-600">Car Rentals</span>
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Reliable, affordable, and convenient travel solutions for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={feature.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            variants={cardVariants}
            className="group relative bg-white border border-gray-200 rounded-xl p-5 shadow-md 
                       flex flex-col items-center text-center cursor-pointer overflow-hidden 
                       transition-all duration-500 hover:shadow-xl hover:scale-[1.02]
                       before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-600 before:via-purple-600 before:to-pink-500
                       before:opacity-0 hover:before:opacity-100 before:transition-opacity before:rounded-xl
                       mobile-border-animate"
          >
            <div className="relative z-10 bg-indigo-100 group-hover:bg-white/20 rounded-full p-3 flex items-center justify-center transition-all duration-300">
              {feature.icon}
            </div>
            <h3 className="relative z-10 mt-3 text-base md:text-lg font-semibold text-gray-800 group-hover:text-white">
              {feature.title}
            </h3>
            <p className="relative z-10 mt-1 text-xs md:text-sm text-gray-600 group-hover:text-white/90">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
