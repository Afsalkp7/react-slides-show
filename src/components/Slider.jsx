import React, { useEffect, useState } from 'react'
import images from '../utils/constants'

export default function Slider() {
    const [active,setActive] = useState(0)

    const handleNext = ()=> {
        setActive(active===images.length-1?0:active+1)
    }

    const handlePrevious = ()=> {
        setActive(active===0?images.length-1:active-1)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            handleNext() 
        },2000)
        return() => {
            clearTimeout(timer)
        }
    },[active])

  return (
    <div className='flex justify-center'>
        <button className='m-10 p-5 font-bold' onClick={handlePrevious}>Previous</button>
     {images.map((url, i) => (
        <img className={`w-[700px] h-[300px] my-32 ${active===i?'block':'hidden'}`} key={url} src={url} alt={`Slide ${i + 1}`} />
      ))}
      <button className='m-10 p-5 font-bold' onClick={handleNext}>Next</button>
    </div>
    
  )
}
