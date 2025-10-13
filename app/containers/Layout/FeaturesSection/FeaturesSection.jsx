import React from "react";
import { motion } from "framer-motion";
import { Car, Building2, Globe2, Shield } from "lucide-react";

const features = [
  {
    id: 1,
    icon: (
      <Car className="w-10 h-10 text-indigo-700 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
    ),
    title: "Unlimited km to drive",
  },
  {
    id: 2,
    icon: (
      <Building2 className="w-10 h-10 text-indigo-700 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
    ),
    title: "100+ Locations in 16 cities",
  },
  {
    id: 3,
    icon: (
      <Globe2 className="w-10 h-10 text-indigo-700 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
    ),
    title: "Anywhere delivery",
  },
  {
    id: 4,
    icon: (
      <Shield className="w-10 h-10 text-indigo-700 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
    ),
    title: "Privacy & freedom",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 h-full">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Features & Benefits of Renting a{" "}
          <span className="text-indigo-700">Self-Drive Car</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mb-20
       mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={feature.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            variants={cardVariants}
            className="group relative bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm overflow-hidden cursor-pointer transition-all duration-700
                       hover:text-white hover:shadow-2xl
                       before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-600 before:via-purple-600 before:to-pink-500
                       before:opacity-0 hover:before:opacity-100
                       before:bg-[length:200%_200%] hover:before:animate-[gradientMove_3s_ease_infinite]
                       before:transition-opacity before:rounded-xl"
          >
            <div className="relative z-10 bg-indigo-100 group-hover:bg-white/20 rounded-full p-3 flex items-center justify-center transition-all duration-300">
              {feature.icon}
            </div>
            <p className="relative z-10 text-lg font-semibold text-gray-800 group-hover:text-white transition-all duration-300">
              {feature.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
