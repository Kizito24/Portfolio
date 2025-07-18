/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
        words: ["My name is Kizito Chiazor", "I Design", "I Develop", "I Deliver"] ,
        loop: true,
        delaySpeed: 2000,
    })
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/> 
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="Portfolio\portfolio\public\lion.jpg" alt='lion-image'></img>
        <h1>
        <span>{text}<Cursor cursorColor='Black'></Cursor></span>
        </h1>
    </div>
  )
}

