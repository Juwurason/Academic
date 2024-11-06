// import React from "react";

// function Card() {
//   return (
//     <>
//       <a
//         href="#"
//         className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
//       >
//         <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

//         <div className="sm:flex sm:justify-between sm:gap-4">
//           <div>
//             <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
//               Building a SaaS product as a software developer
//             </h3>

//             <p className="mt-1 text-xs font-medium text-gray-600">
//               By John Doe
//             </p>
//           </div>

//           <div className="hidden sm:block sm:shrink-0">
//             <img
//               alt=""
//               src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
//               className="size-16 rounded-lg object-cover shadow-sm"
//             />
//           </div>
//         </div>

//         <div className="mt-4">
//           <p className="text-pretty text-sm text-gray-500">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
//             illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
//           </p>
//         </div>

//         <dl className="mt-6 flex gap-4 sm:gap-6">
//           <div className="flex flex-col-reverse">
//             <dt className="text-sm font-medium text-gray-600">Published</dt>
//             <dd className="text-xs text-gray-500">31st June, 2021</dd>
//           </div>

//           <div className="flex flex-col-reverse">
//             <dt className="text-sm font-medium text-gray-600">Reading time</dt>
//             <dd className="text-xs text-gray-500">3 minute</dd>
//           </div>
//         </dl>
//       </a>
//     </>
//   );
// }

// export default Card;

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
