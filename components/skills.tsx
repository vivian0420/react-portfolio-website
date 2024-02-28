"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {skillsData} from '@/app/lib/data'
import { useSectionInview } from '@/app/lib/hooks'
import { motion } from 'framer-motion'

export default function Skills() {
  const ref = useSectionInview("Skills", 1);
  return (
    <motion.section id="skills" ref={ref} className='max-w-[44rem] mb-28 scroll-mt-32'
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}>
      <SectionHeading>Skills</SectionHeading>
      <ul className='flex flex-wrap gap-2 justify-center'>
        {
         skillsData.map((skill, index)=> (
            <li key={index} className='bg-gray-200 rounded-full px-4 py-1 border border-gray-300'>{skill}</li>
         ))
        }
      </ul>
    </motion.section>
  )
}
