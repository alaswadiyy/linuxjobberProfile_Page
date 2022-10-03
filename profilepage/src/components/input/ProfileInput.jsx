import React from 'react'

const ProfileInput = ({text, placeholder}) => {
  return (
    <div>
        <p>{text}</p>
        <input
        disabled
        placeholder={placeholder}
        className='Input'
        />
    </div>
  )
}

export default ProfileInput;