import React from 'react'
import { SECTION_TWO_DATA } from '../../Constants/Constants'
import SectionTwoPoint from '../../Components/SectionTwoPoint'

const SectionTwo = () => {
  return (
    <main style={{backgroundColor:'#3a44a1'}}>
        <section className='section sectionTwo'>
            <h1 className='sectionHeader'>Why this Placement Cracker?</h1>
            <p>
            Because Coign unleashes the genius within, empowering all who aspire to master the language of
            code. To elaborate more on the why, here’s a thought experiment for you: 

            </p>
            {
                SECTION_TWO_DATA.map(
                    (data,index)=>
                        <SectionTwoPoint number={index+1} key={index} text={data.text}></SectionTwoPoint>
                    )
            }

            <p>
            The Coign’s manifesto is crowd-sourced from very people, all rooted in different backgrounds but
            sharing the same ethos;- the unwavering dedication to push students beyond limits and uplift the
            community as a whole. 



            </p>



        </section>
    </main>
  )
}

export default SectionTwo