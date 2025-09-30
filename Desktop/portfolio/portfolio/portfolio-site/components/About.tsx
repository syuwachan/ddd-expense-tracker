'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 md:py-24 px-6 md:px-8" style={{ textAlign: 'center', marginTop: '60px', marginBottom: '60px' }}>
      <div className="max-w-6xl mx-auto text-center" style={{ margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900"
           style={{ marginBottom: "60px" }}>
            About Me
          </h2>

          <div className="max-w-4xl mx-auto text-center" style={{ margin: '0 auto' }}>
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                東京都在住のエンジニア。大学時代のIT業界でのインターン経験からプログラミングに興味を持ち、学生時代から複数社で業務委託案件を経験した後、現職ではフルリモートの自社開発企業にて、インターンから2年間Next.js や React を用いたフルスタックな開発に携わっております。
                Webアプリケーションの設計から実装まで幅広く経験し、ユーザビリティを重視した開発を行っています。
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                モダンな技術を活用し、保守性の高いコードとUXの向上に取り組んでいます。
                業務と並行して個人開発も積極的に行い、新しい技術の習得や実験的な機能の実装に挑戦しています。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About