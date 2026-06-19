"use client"

import { motion } from "framer-motion";

export default function Hero() {
 return (
  <section className="
  min-h-screen
  flex items-center
  justify-center
  grid-bg">

   <div className="text-center max-w-5xl">

    <motion.h1
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    className="
    pixel
    text-5xl
    md:text-7xl
    leading-relaxed">

      Создаю сайты и визуал,
      которые цепляют
      с первого экрана
    </motion.h1>

    <motion.p
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:.5}}
    className="
    mt-8
    text-xl
    text-zinc-400">

      Веб-дизайн • SMM • Брендинг • Motion
    </motion.p>

    <motion.button
    whileHover={{
      scale:1.05
    }}
    className="
    mt-10
    px-8 py-4
    rounded-xl
    bg-cyan-400
    text-black
    font-semibold">

      Смотреть проекты
    </motion.button>

   </div>

  </section>
 )
}