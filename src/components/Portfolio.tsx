"use client"

import { motion } from "framer-motion";

const projects = [
 "Интернет-магазин",
 "Брендинг кофейни",
 "SMM кампания",
 "Лендинг продукта"
];

export default function Portfolio() {
 return (
  <section
  id="portfolio"
  className="section">

   <h2 className="pixel text-3xl mb-12">
    КЕЙСЫ
   </h2>

   <div className="grid md:grid-cols-2 gap-8">

    {projects.map((project)=>(
     <motion.div
      key={project}
      whileHover={{
       y:-10,
       scale:1.03
      }}
      className="
      glass
      p-10
      rounded-3xl
      cursor-pointer">

      <div className="
      h-60
      rounded-2xl
      bg-zinc-900 mb-6" />

      <h3>{project}</h3>

     </motion.div>
    ))}

   </div>

  </section>
 )
}