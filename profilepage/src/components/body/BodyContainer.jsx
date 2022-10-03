import React from 'react'
import LeftBody from './LeftBody'
import './bodyContainer.css'

const BodyContainer = ({children}) => {
  return (
    <section className='body'>
        <div className='body_left'>
            <LeftBody />
        </div>
        <div className='body_right'>
        {children}
        </div>
    </section>
  )
}

export default BodyContainer