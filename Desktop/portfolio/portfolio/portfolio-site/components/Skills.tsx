"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiPrisma,
  SiAmazonwebservices,
  SiDocker,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
  { name: "React", icon: <SiReact className="w-6 h-6 text-sky-500" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
  },
  { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-green-600" /> },
  {
    name: "Supabase",
    icon: <SiSupabase className="w-6 h-6 text-emerald-500" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="w-6 h-6 text-gray-700 dark:text-white" />,
  },
  {
    name: "AWS",
    icon: <SiAmazonwebservices className="w-6 h-6 text-orange-500" />,
  },
  { name: "Docker", icon: <SiDocker className="w-6 h-6 text-blue-500" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-6 h-6 text-sky-700" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "Figma", "CI/CD"],
      color: "from-green-400 to-blue-500",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-24 px-6 md:px-8 bg-gray-50"
      style={{ textAlign: "center", marginTop: "60px", marginBottom: "60px" }}
    >
      <div
        className="max-w-6xl mx-auto text-center"
        style={{ margin: "0 auto" }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            style={{ marginBottom: "60px" }}
          >
            Skills
          </h2>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center px-4 py-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
              >
                {skill.icon}
                <span className="mt-2 text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
