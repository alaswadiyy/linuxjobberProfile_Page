import React from 'react'
import ProfileInput from '../input/ProfileInput'
import edit from '../../assets/img/edit.svg'
import user from '../../assets/img/user.svg'
import './profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile_top'>
        <div className='option_bg'>
          <img src={user} alt='profile' className='option_img'></img>
        </div>
        <p>Your Profile</p>
      </div>
      <div className='profile_left'>
        <div className='edit_field'>
          <p>First Name</p>
          <input disabled className='Input' placeholder='First name' />
          <img src={edit} alt='edit' className='edit'></img>
        </div>
        <div className='edit_field'>
          <p>Last Name</p>
          <input disabled className='Input' placeholder='Last name' />
          <img src={edit} alt='edit' className='edit'></img>
        </div>
        <ProfileInput
          text='Email:'
          placeholder='Email'
        />
      </div>

      <div className='profile_right'>
        <ProfileInput
        text='Course of study in school:'
        placeholder='English language'
        />

        <ProfileInput
        text='I am a student'
        placeholder='Writer'
        />

        <ProfileInput
        text='Graduation date:'
        placeholder='October 4th, 2021'
        />
      </div>
    </div>
  )
}

export default Profile
