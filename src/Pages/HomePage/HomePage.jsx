import React from 'react'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionOne from './SectionOne'
import SectionOneHalf from './SectionOneHalf'

const HomePage = () => {
  return (
    <section>
        <SectionOne></SectionOne>
        <SectionOneHalf></SectionOneHalf>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
        <SectionFive></SectionFive>
    </section>

  )
}

export default HomePage