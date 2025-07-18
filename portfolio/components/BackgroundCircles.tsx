import { motion } from 'framer-motion'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{
      opacity: 0,
    }}
    animate={{
      scale: [1, 2, 2, 3, 1],
      opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
    }}
    transition={{
      duration: 2.5,
    }}
    className='relative flex justify-center items-center p-7 m-5'>
        <div className="absolute border border-gray-500 rounded-full h-[200px] w-[200px]  mt-52 opacity-10 animate-ping"/>
        <div className='rounded-full border border-gray-500  h-[300px] w-[300px] absolute mt-52 opacity-10 animate-ping'/>
        <div className='rounded-full border border-gray-500  h-[500px] w-[500px] absolute mt-52 opacity-10 '/>
        <div className='rounded-full border border-gray-500  h-[650px] w-[650px] absolute mt-52 opacity-30 animate-pulse'/>
    </motion.div>
  )
}

export default BackgroundCircles;