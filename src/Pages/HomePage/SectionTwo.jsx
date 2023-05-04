import React from 'react'
import { SECTION_TWO_DATA } from '../../Constants/Constants'
import SectionTwoPoint from '../../Components/SectionTwoPoint'

const SectionTwo = () => {
  return (
    <main style={{backgroundColor:'#3a44a1'}}>
        <section className='section sectionTwo'>
            <h1 className='sectionHeader'>Why CRED?</h1>
            <p>
                simply because, CRED is the nucleus
                of all great minds at work. to elaborate 
                more on the why, here’s a thought experiment 
                for you:
            </p>
            {
                SECTION_TWO_DATA.map(
                    (data,index)=>
                        <SectionTwoPoint number={index+1} key={index} text={data.text}></SectionTwoPoint>
                    )
            }

            <p>
                the CRED manifesto is crowd sourced from these 
                very people, all rooted in different backgrounds
                 but sharing the same ethos; to continuously push 
                 oneself and in the process, the community.

            </p>



        </section>
    </main>
  )
}

export default SectionTwo