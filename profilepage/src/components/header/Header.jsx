import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/img/logo.svg'
import photo from '../../assets/img/aswad1.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const activePath = window.location.pathname.split("/")[1]
  const [path] = useState(activePath)
  
  // console.log(activePath)
  return (
    <header className='header'>
        <nav>
            <img src={logo} alt='logo' className='header_img' ></img>
        </nav>
        <p className='header_p1'>Classroom Profile</p>
        {path !== 'classroom' ?
          <Link to='/classroom' ><p className='header_p2'>Go to Classroom &nbsp; &#8250;</p></Link>
        :
          <Link to='/interests' className='link_profile'>
            <p className='header_p2'>Profile </p>
            <div className='header_img_container'>
              <img className='header_img2' src={photo} alt='profile'></img>
            </div>
            </Link>
        }
    </header>
  )
}

export default Header