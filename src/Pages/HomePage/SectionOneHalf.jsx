import React from 'react'
import imageOne from '../../assets/ImageOne.jpeg'
import imageTwo from '../../assets/ImageTwo.jpeg'
import imageThree from '../../assets/ImageThree.jpeg'
import imageFour from '../../assets/ImageFour.jpeg'
import imageFive from '../../assets/ImageFive.jpeg'
import imageSix from '../../assets/ImageSix.jpeg'

const SectionOneHalf = () => {
  return (
    <main style={{backgroundColor:'#f8f8f8'}}>
    <section className='heroImages  mx-auto w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50%  section !pt-0'>
        <div className='images'>
            <div className='image1'>
                <img  src={imageOne}></img>

            </div>
            <div className='image2'>
                <img  src={imageTwo}></img>

            </div>
            <div className='image3'>
                <img  src={imageThree}></img>

            </div>

        </div>
        <div className='images'>
            <div className='image4'>
                <img  src={imageFour}></img>
            </div>
            <div className='image5'>
                <img  src={imageSix}></img>
            </div>
            <div className='image6'>
                <img  src={imageFive}></img>
            </div>

        </div>

    </section>
    </main>
  )
}

export default SectionOneHalf