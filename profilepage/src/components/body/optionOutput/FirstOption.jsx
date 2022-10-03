import React, { useState } from 'react'
import Input from '../../input/Input'
import YesNo from '../../yesNo/YesNo'
import back from '../../../assets/img/back.svg'
import '../../body/body.css'


const FirstOption = () => {
    const [yesOption, setYesOption] = useState(false)
    const [noOption, setNoOption] = useState(false)

  return (
    <div className='Yesno_option'>
        <YesNo text='Yes' 
        name={` ${yesOption && 'hide yes_selected'} ${noOption && 'hide'} `}
        action={()=>setYesOption(!yesOption)} /> 
        {yesOption && (
        <div className='yesOption yes_selected'>
            <Input
            type='text'
            placeholder='Course of study'
            display='none'
            />
            <Input
            type='text'
            placeholder='Expected Graduation date'
            display='none'
            />
            <img src={back} alt='go back' className='yesOption_img' onClick={()=>setYesOption(!yesOption)}></img>
        </div>
        )}

        <YesNo text='No'
        name={` ${yesOption && 'hide'} ${noOption && ' hide'}`}
        action={()=>setNoOption(!noOption)} 
        />
        {noOption && (
        <div className='no_selected yesOption '>
            <Input
                type='text'
                placeholder='Course of study'
                />
            <Input
            type='text'
            placeholder='Expected Graduation date'
            />
            <img src={back} alt='go back' className='yesOption_1_img' onClick={()=>setNoOption(!noOption)}></img>

            {/* <img src={back} alt='go back' onClick={()=>setNoOption(!noOption)}></img> */}
        </div>)}
    </div>
  )
}

export default FirstOption
