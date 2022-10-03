import React from 'react'
import './input.css'


const Input = ({type, placeholder, dis}) => {
  return (
    <input type={type} placeholder={placeholder} className='Input' />
  )
}

export default Input