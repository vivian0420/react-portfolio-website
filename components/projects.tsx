"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/app/lib/data'
import Project from '@/components/project'
import { motion } from 'framer-motion'
import { useSectionInview } from '@/app/lib/hooks'

export default function Projects() {
  const ref = useSectionInview("Projects", 0.4);

  return (
    <motion.section ref={ref} id="projects" className='scroll-mt-32 mb-28'
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.175}}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
            projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))
        }
      </div>
    </motion.section>
  )
}
