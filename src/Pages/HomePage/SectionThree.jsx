import React from 'react'
import { SECTION_THREE_DATA } from '../../Constants/Constants'
import SectionThreePoint from '../../Components/SectionThreePoint'

const SectionThree = () => {
  return (
    <section className='mx-auto w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50%  section sectionThree'>
        <div>
            <h1 className='sectionHeader' style={{padding:0,textAlign:'left',color:'#3a44a1'}}>Want to know what it’s like to learn from Placement Cracker? </h1>
            <p>pushing oneself comes with the role. and we realise pushing oneself is hard work. which is why coign
              is in the continuous process of building an innovative event that helps the every individual
              rejuvenate oneself. 
            </p>
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