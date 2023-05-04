import React from 'react'
import { SECTION_THREE_DATA } from '../../Constants/Constants'
import SectionThreePoint from '../../Components/SectionThreePoint'

const SectionThree = () => {
  return (
    <section className='section sectionThree'>
        <div>
            <h1 className='sectionHeader' style={{padding:0,textAlign:'left',color:'#3a44a1'}}>want to know what it's like to work at CRED?</h1>
            <p>hard truths: pushing oneself comes with the role. and we realise pushing oneself is hard work. which is why CRED is in the continuous process of building an environment that helps the team rejuvenate oneself.</p>
        </div>
        <div>
        {
            SECTION_THREE_DATA.map(
                (data,index)=>
                    <SectionThreePoint key={index} image={data.image} header={data.header} text={data.text}>

                    </SectionThreePoint>
            )
        }
        </div>

    </section>
  )
}

export default SectionThree