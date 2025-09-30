'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16 bg-gradient-to-b from-blue-50 to-white text-center"
    >
      {/* タイトル */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8"
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* 下向きアイコン */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-gray-600" size={32} />
      </motion.div>
    </section>
  )
}

export default Hero
