import React, { useState } from 'react'
import DiscordIcon from '../../Components/DiscordIcon'
import CustomTextInput from '../../Components/CustomTextInput'

const SectionFive = () => {
  const [fname,setFname]=useState('')
  const [lname,setLName]=useState('')
  const [email,setEmail]=useState('')
  return (
    <div className='mx-auto w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50%  section sectionFive'>
        <div >
          <h2 className='headerStyleTwo'>Join Us</h2>
          <div className='discord'>
              <div>
                  <DiscordIcon></DiscordIcon>
              </div>
          </div>

        </div>
        <div>
          <h2 className='headerStyleTwo'>Subscribe to our newsletter</h2>
          <p className='subscribePara'>Stay updated and never miss an opportunity.</p>
          <div className='textInputs'>
             <CustomTextInput header={'First name'} placeholder={'Enter your First Name'} state={fname} setState={setFname}></CustomTextInput>
             <CustomTextInput header={'Last name'} placeholder={'Enter your Last Name'} state={lname} setState={setLName}></CustomTextInput>
             <CustomTextInput header={'Email'} placeholder={'Enter your Email'} state={email} setState={setEmail}></CustomTextInput>
             <div style={{width:'80%',margin:"auto"}}>
              <div className='subsribeButton'>
                  <p>Subscribe</p>

                </div>
             </div>
          </div>
         

        </div>
    </div>
  )
}

export default SectionFive