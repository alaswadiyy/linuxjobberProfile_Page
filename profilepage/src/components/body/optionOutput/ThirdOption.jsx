import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import back from '../../../assets/img/back.svg'
import YesNo from '../../yesNo/YesNo'
import '../../body/body.css'

const ThirdOption = () => {
    const [yesOption, setYesOption] = useState(false)
    const [yesTwoOption, setYesTwoOption] = useState(false)
    const [noOption, setNoOption] = useState(false)
    const [noTwoOption, setNoTwoOption] = useState(false)

  return (
    <div className='Yesno_option'>

        {/* first yes option under the number 4 */}
        <YesNo text='Yes' 
        name={` ${yesOption && 'hide yes2_selected'} ${noOption && 'hide'} `}
        action={()=>setYesOption(!yesOption)} /> 
        {yesOption && (
        <div className='yes2_selected'>
            <p className='yes2_p'>Have you completed?</p>
            <div className='Yesno_option'>

                {/* second yes option under number 4 */}
                <YesNo text='Yes'
                name={` ${yesTwoOption && 'hide yes2_selected'} ${noTwoOption && 'hide'} `}
                action={()=>setYesTwoOption(!yesTwoOption)}
                />
                {yesTwoOption && (<div className='yes2_selected'>
                    <div >
                        <img src={back} alt='go back'  onClick={()=>setYesTwoOption(!yesTwoOption)}></img>
                        <div>
                            <Link to='/interests'><button className='hero_right_btn'>Next Step &nbsp; &#8250;</button></Link>
                        </div>
                    </div>
                </div>)}

                {/* second no option under number 4 */}
                <YesNo text='No'
                name={` ${yesTwoOption && 'hide'} ${noTwoOption && ' hide'}`}
                action={()=>setNoTwoOption(!noTwoOption)}
                />
                {noTwoOption && (
                <div className='no2_selected'>
                    <img src={back} alt='go back' onClick={()=>setNoTwoOption(!noTwoOption)}></img>
                    <div>
                        <Link to='/interests'><button className='hero_right_btn'>Next Step &nbsp; &#8250;</button></Link>
                    </div>
                </div>)}
                <img src={back} alt='go back' className={`yesOption_img ${yesTwoOption && 'hide yes2_selected'} ${noTwoOption && 'hide'}`} onClick={()=>setYesOption(!yesOption)}></img>
            </div>
        </div>
        )}

        {/* first no option that has no other option */}
        <YesNo text='No'
        name={` ${yesOption && 'hide'} ${noOption && ' hide'}`}
        action={()=>setNoOption(!noOption)} 
        />
        {noOption && (
        <div className='no2_selected yesOption '>
            <img src={back} alt='go back' className='yesOption_1_img' onClick={()=>setNoOption(!noOption)}></img>
            <div>
                <Link to='/interests'><button className='hero_right_btn'>Next Step &nbsp; &#8250;</button></Link>
            </div>
        </div>)}
    </div>
  )
}

export default ThirdOption
