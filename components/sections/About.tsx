"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = {
  company: "Ellecon Pvt Ltd",
  location: "India",
  period: "May 2023 - July 2023",
  role: "Full Stack Developer Intern",
  description: "Built full-stack web applications using the MERN stack. Developed real-time inventory updates and admin dashboard. Integrated RESTful APIs and improved UI/UX for better usability.",
};

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="scroll-mt-24 px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-3xl font-semibold text-ink md:text-5xl text-center mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="squiggle">About</span>
          <span className="text-mint-deep">.</span>
        </motion.h2>

        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4">
            <span className="text-2xl text-mint-soft">/</span>
            <h3 className="font-script text-4xl md:text-5xl relative" style={{ color: "#3fa885" }}>
              education
              <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2" viewBox="0 0 100 10">
                <path d="M5,5 Q25,2 50,5 T95,5" stroke="#3fa885" strokeWidth="2" fill="none" />
              </svg>
            </h3>
            <span className="text-2xl text-mint-soft">\</span>
          </div>
        </motion.div>
        
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Bachelor's Degree Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-md relative max-w-sm w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Graduation Cap Icon */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-mint-soft rounded-full p-2">
                <svg className="w-5 h-5 text-mint-deep" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
            </div>
            
            {/* Sparkle decoration */}
            <div className="absolute top-4 right-4">
              <svg className="w-3 h-3 text-mint-soft" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-ink text-center mb-3 relative">
              Bachelor's Degree
              <svg className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1" viewBox="0 0 60 6">
                <path d="M5,3 Q15,1 30,3 T55,3" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
              </svg>
            </h3>
            <p className="text-lg text-ink text-center mb-2">Computer Engineering</p>
            <p className="text-ink-muted text-center mb-2">Gujarat Technological University, Gujarat, India</p>
            <p className="text-center mb-3 font-medium" style={{ color: "#ff6b6b" }}>8.69 CGPA</p>
            <div className="flex justify-center">
              <span className="px-4 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: "#fdf6ea", color: "inherit" }}>2019 - 2023</span>
            </div>
            
            {/* Leaf decoration */}
            <div className="absolute -bottom-2 -left-2 text-mint-soft opacity-70">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
            </div>
          </motion.div>

          {/* Connecting Line with Airplane */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative flex items-center">
              {/* Left dot */}
              <div className="w-2 h-2 bg-mint-soft rounded-full mr-1"></div>
              {/* Dashed line */}
              <div className="w-20 h-0.5 border-t-2 border-dashed border-mint-soft"></div>
              {/* Right dot */}
              <div className="w-2 h-2 bg-mint-soft rounded-full ml-1"></div>
              {/* Airplane in the middle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-mint-soft rounded-full p-1">
                <svg className="w-4 h-4 text-mint-deep transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,16V14L13,9V3.5C13,2.67 12.33,2 11.5,2C10.67,2 10,2.67 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Master's Degree Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-md relative max-w-sm w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Graduation Cap Icon */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-mint-soft rounded-full p-2">
                <svg className="w-5 h-5 text-mint-deep" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
            </div>
            
            {/* Sparkle decoration */}
            <div className="absolute top-4 right-4">
              <svg className="w-3 h-3 text-mint-soft" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-ink text-center mb-3 relative">
              Master's Degree
              <svg className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1" viewBox="0 0 60 6">
                <path d="M5,3 Q15,1 30,3 T55,3" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
              </svg>
            </h3>
            <p className="text-lg text-ink text-center mb-2">MS in Computer Science</p>
            <p className="text-ink-muted text-center mb-2">Rowan University, New Jersey, USA</p>
            <p className="text-center mb-3 font-medium" style={{ color: "#ff6b6b" }}>3.55 GPA</p>
            <div className="flex justify-center">
              <span className="px-4 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: "#fdf6ea", color: "inherit" }}>2024 - 2026</span>
            </div>
            
            {/* Leaf decoration */}
            <div className="absolute -bottom-2 -right-2 text-mint-soft opacity-70">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="/resume.docx"
            download
            className="inline-flex items-center gap-3 border-2 px-8 py-4 rounded-full font-display text-lg font-medium text-white hover:bg-[#2a7a5d] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl" style={{ backgroundColor: "#3fa885", borderColor: "#3fa885" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l10.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
            Download Resume
          </a>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl text-mint-soft">/</span>
              <h3 className="font-script text-4xl md:text-5xl relative" style={{ color: "#3fa885" }}>
                experience
                <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2" viewBox="0 0 100 10">
                  <path d="M5,5 Q25,2 50,5 T95,5" stroke="#3fa885" strokeWidth="2" fill="none" />
                </svg>
              </h3>
              <span className="text-2xl text-mint-soft">\</span>
            </div>
          </div>

          {/* Single Horizontal Experience Card */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Icon and Date */}
                <div className="flex flex-col items-center md:items-start space-y-6">
                  <div className="w-20 h-20 bg-mint-soft rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-mint-deep" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-sm font-semibold text-ink">{experience.period}</p>
                    <p className="text-xs text-ink-muted">{experience.location}</p>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h4 className="font-display text-2xl font-bold text-ink mb-3">
                      {experience.role}
                    </h4>
                    <p className="text-xl font-medium mb-6" style={{ color: "#ff6b6b" }}>{experience.company}</p>
                  </div>
                  
                  <p className="text-ink leading-relaxed mb-8 text-lg">
                    {experience.description}
                  </p>

                  {/* Keywords/Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#fdf6ea", color: "inherit" }}>MERN Stack</span>
                    <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#fdf6ea", color: "inherit" }}>RESTful APIs</span>
                    <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#fdf6ea", color: "inherit" }}>UI/UX</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

{/* Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 text-mint-soft opacity-60"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.6, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-32 right-10 text-mint-soft opacity-60"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.6, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}