import React from 'react'
import './yesNo.css'
const YesNo = ({text, action, name}) => {
  return (
    <p className={`${name} YesNo`} onClick={action}>
        {text}
    </p>
  )
}

export default YesNo