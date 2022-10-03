import React from 'react'
import Input from '../input/Input'
import './body.css'
import tick from '../../assets/img/tick.svg'
import FirstOption from './optionOutput/FirstOption'
import SecondOption from './optionOutput/SecondOption'
import ThirdOption from './optionOutput/ThirdOption'

const RightBody = ({name}) => {

  return (
    <section className='Hero_right'>
        <ol>
            <div>
            <li>Course of study in school:</li>
            <Input type='text' placeholder='Course of study' />
            </div>

            <div>
                <li>Are you a student?</li>
                <FirstOption />
            </div>

            <div>
                <li>Did you graduate?</li>
                <SecondOption />
            </div>

            <div>
                <li>Does your country require post-graduation service?</li>
                <ThirdOption />
            </div>
        </ol>
        <div className='hero_tick_container'>
            <p className='hero_p'>
                <img src={tick} alt='tick'></img>
            </p>
        </div>
    </section>
  )
}

export default RightBody