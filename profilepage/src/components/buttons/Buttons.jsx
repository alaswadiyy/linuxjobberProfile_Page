import React from 'react'
import './buttons.css'

const Buttons = ({text, src, alt, num}) => {
  return (
    <div className='classroom_btn'>
        <div>
            <img src={src} alt={alt} className='classroom_img'></img>
        </div>
        <button>{text}</button>
        <span>{num}</span>
    </div>
  )
}

export default Buttons