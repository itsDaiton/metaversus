'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TitleText, TypingText } from '../components/CustomTexts';
import { newFeatures } from '../constants/data'
import NewFeatures from '../components/NewFeatures';

const WhatsNew = () => {
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
        className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className='flex-[0.75] flex justify-center flex-col'
        >
          <TypingText title="| What's New"/>
          <TitleText title={<>What's new about Metaversus?</>} />
          <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
            {newFeatures.map((feature) => (
              <NewFeatures
                key={feature.title}
                {...feature}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className='flex-1 flex justify-center items-center'
        >
          <img
            src='/whats-new.png'
            alt='whats-new'
            className='w-[90%] h-[90%] object-contain'
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatsNew