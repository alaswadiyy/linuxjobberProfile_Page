import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import tick from '../../assets/img/tick.svg'
import Slider from './Slider'


const SliderPage = () => {
    const [points, setPoints] = useState({
        'Cybersecurity': 0,
        'Developer': 0,
        'DevOps' : 0,
        'Designer' : 0,
        'Project Manager' : 0,
        'Product Manager' : 0,
        'Marketer' : 0,
        'Writer' : 0
    })

    // console.log(value)
    // useEffect(() => {
    //     setPoints(points)
    // }, [points])
    // console.log({points})
    

    const handleChange = (name, value) =>{
        setPoints({...points, [name]: value})
        // console.log(points)
        const extractValues = Object.values(points)
        // console.log(extractValues)
        
        const hasDuplicates = (arr) => arr.length !== new Set(extractValues).size;
        // console.log(hasDuplicates(extractValues))
        
        const msg = document.getElementById("warn")
        const done = document.getElementById("done")
        if(hasDuplicates(extractValues)){
            msg.classList.add("warning")
            msg.classList.remove("hide")
        } else{
            msg.classList.add("hide")
            msg.classList.remove("warning")
            done.classList.add("interest_btn")
            done.classList.remove("hide")
        }
    }

  return (
    <section className='sliderpage'>
        <div className='sliderpage_left'>
            <p >Score your level of interest in these job titles:</p>
            <div className='slides'>
                <div className='slides_left'>
                    <Slider text='Cybersecurity' onChange={handleChange} value={points.Cybersecurity} />
                    <Slider text='Developer' onChange={handleChange} value={points.Developer} />
                    <Slider text='DevOps' onChange={handleChange} value={points.DevOps} />
                    <Slider text='Designer' onChange={handleChange} value={points.Designer} />
                </div>
                <div className='slides_right'>
                    <Slider text='Project Manager' onChange={handleChange} value={points['Project Manager']} />
                    <Slider text='Product Manager' onChange={handleChange} value={points['Product Manager']} />
                    <Slider text='Marketer' onChange={handleChange} value={points.Marketer} />
                    <Slider text='Writer' onChange={handleChange} value={points.Writer} />
                </div>
            </div>
            <p id='warn' className='hide'>* You cannot pick a number twice</p>
            <div>
                <Link to='/result'  state={{data: points}} >
                    <button id='done' className='hide'>Done</button>
                </Link>
            </div>
        </div>
        <div className='sliderpage_right'
        >
            <p className='hero_p'>
                <img src={tick} alt='tick'></img>
            </p>
        </div>
    </section>
  )
}

export default SliderPage