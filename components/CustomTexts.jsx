import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-poppins font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span
          variants={textVariant2}
          key={index}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>     
      ))}
    </motion.p>
  )
}

export const TitleText = ({ title, textStyles }) => {
   return (
    <motion.h2
      variants={textVariant2}
      initial='hidden'
      whileInView='show'
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
   )
}
