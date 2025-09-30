'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiGithub } from 'react-icons/si'

const projects = [
  {
    title: 'Classified Site',
    description: 'Next.js、TypeScript、Supabaseを使用したクラシファイドサイト。ユーザー認証、投稿管理、検索機能を実装。',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/syuwachan/clussified',
  },
  {
    title: 'Project 2',
    description: 'プロジェクトの説明がここに入ります。技術スタックや主な機能について記載します。',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 3',
    description: 'プロジェクトの説明がここに入ります。技術スタックや主な機能について記載します。',
    tags: ['Vue.js', 'Firebase', 'TypeScript'],
    github: 'https://github.com/yourusername/project3',
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className=" md:py-24 px-6 md:px-8 bg-gray-50" style={{ marginTop: '60px', marginBottom: '60px' }}>
      <div>
          <h2 className="text-4xl font-bold text-center mb-24 text-gray-900"
           style={{ marginBottom: "60px" }}>
            Works
          </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
         style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "1200px" }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              style={{ paddingBottom: "20px",paddingTop: "20px",paddingLeft: "20px",paddingRight: "20px",}}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                <SiGithub className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects