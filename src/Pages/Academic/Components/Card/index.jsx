import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  const specialities = [
    {
      image: "",
      title: "Jonathan Burns",
      description: "Founder",
    },
    {
      image: "",
      title: "Helen Dean",
      description: "Editor",
    },
    {
      image: "",
      title: "William Graham",
      description: "Photographer",
    },
  ];

  return (
    <section className="text-center py-16 px-4 sm:py-10 container">
      <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800 mb-4">
        Here we are
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        We’re located in the heart of the city, where creativity meets
        convenience. Visit us to bring your vision to life.
      </p>
      <div className="grid grid-cols-3 md:grid-cols-1 xl:grid-cols-3 gap-8">
        {specialities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            // whileHover={{
            //   scale: 1.05,
            //   boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
            // }}
            className="rounded-lg overflow-hidden transition-transform duration-300"
          >
            <div className="overflow-hidden mb-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-md font-semibold uppercase mb-3 text-black">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Card;
