import React, { useEffect, useState } from 'react'
import { cardImages } from '../utils/constants'

export default function CardSlider() {
    const [images,setImages] = useState(cardImages)

    const nextSlide = () => {
        setImages((prevContent) => {
          const newContent = [...prevContent];
          newContent.unshift(newContent.pop());
          return newContent;
        });
      };
    
    const prevSlide = () => {
        setImages((nexContent)=>{
            const nextContent = [...nexContent]
            nextContent.push(nextContent.shift());
            return nextContent
        })
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            nextSlide()
        },2000)
        return()=>{
            clearTimeout(timer)
        }
    },[images])

    return (
    <div className='flex justify-around m-10 '>
        <button onClick={prevSlide} className='font-bold'>prev</button>
        {images.map((url,index)=> <div key={url} className='border w-[300px] p-5 bg-black rounded-3xl'><img src={images[index]} /></div>)}
        <button onClick={nextSlide} className='font-bold'>next</button>
    </div>
  )
}
