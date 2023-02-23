'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components/CustomTexts';
import { insights } from '../constants/data'
import InsightsCard from '../components/InsightsCard';

const Insights = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{
          once: false,
          amount: 0.25
        }}
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'
      >
        <TypingText title='| Insight' textStyles='text-center'/>
        <TitleText title='Insight about metaverse' textStyles='text-center'/>
        <div className='mt-[50px] flex flex-col gap-[30px]'>
          {insights.map((insight, index) => (
            <InsightsCard key={`insight-${index}`} {...insight} index={index + 1}/>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Insights
