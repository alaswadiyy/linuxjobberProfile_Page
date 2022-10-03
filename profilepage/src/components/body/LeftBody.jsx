import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../../assets/img/aswad1.png'
import upload from '../../assets/img/upload.svg'
import user from '../../assets/img/user.svg'
import course from '../../assets/img/course.svg'
import tick from '../../assets/img/tick1.svg'
import logout from '../../assets/img/logout.svg'
import Options from '../sidebar/Options'
import './body.css'

const LeftBody = () => {
  return (
    <section className='Hero_left'>
            <div className='Hero_left_img'>
                <div className='Hero_img'>
                    <img src={photo} alt='profile' className='Hero_user'></img>
                </div>
                <div className='Hero_icon'>
                    <img src={upload} alt='upload'></img>
                </div>
            </div>
            <h2>Olayemi</h2>

            <article  className='hero_left_article'>
                <Link to='/' ><Options icon={user} alt='user' text='Profile'/></Link>
                <Options icon={course} alt='user' text='Courses'/>
                <Options icon={tick} alt='tick' text='Attendance'/>
            </article>

            <div className='Logout'>
                <img src={logout} alt='logout'></img>
                <p>Logout</p>
            </div>

        </section>
  )
}

export default LeftBody