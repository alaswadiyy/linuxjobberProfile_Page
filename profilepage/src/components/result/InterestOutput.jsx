import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactSlider from 'react-slider';
import './interestOutput.css'

const InterestOutput = () => {
  const location = useLocation()

  const data = location.state?.data;

  const values = [
    {
      name: 'Cybersecurity',
      value: data.Cybersecurity
    },
    {
      name: 'Developer',
      value: data.Developer
    },
    {
      name: 'DevOps',
      value: data.DevOps
    },
    {
      name: 'Designer',
      value: data.Designer
    },
    {
      name: 'Project Manager',
      value: data['Project Manager']
    },
    {
      name: 'Product Manager',
      value: data['Product Manager']
    },
    {
      name: 'Marketer',
      value: data.Marketer
    },
    {
      name: 'Writer',
      value: data.Writer
    }
  ]
  
  return (
    <div className='output_hero'>
      {values.map((data, index) => (
        <div className='out'>
          <div className='output_heading'>
            <p>{data.name}</p>
            <p>{data.value}/10</p>
          </div>
          <div>
            <ReactSlider
                className="horizontal-slider"
                trackClassName="slider-track"
                defaultValue={0}
                max={10}
                value={data.value}
            />
          </div>
        </div>
      ))}      
    </div>
  )
}

export default InterestOutput