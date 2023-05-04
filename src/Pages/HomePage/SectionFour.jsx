import React, { useEffect } from 'react'
import { JOURNEY_DATA } from '../../Constants/Constants'
import SectionFourItem from '../../Components/SectionFourItem'

const SectionFour = () => {
    useEffect(()=>{
        animateOnScroll()
        

    },[])
    
const animateOnScroll=()=>{
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

          const squareOne = entry.target.querySelector('.journeyClassOne');

        //   const index=entry.target.querySelector('.journeyIndex');
      
          if (entry.isIntersecting) {

            squareOne.classList.add('cirriculumAnimationClass')
            // index.classList.add('journeyIndexAnimationClass')
            return; // if we added the className, exit the function
          }
      
          // We're not intersecting, so remove the className!

          squareOne.classList.remove('cirriculumAnimationClass');
        //   index.classList.remove('journeyIndexAnimationClass')
        });
      });
      
      const boxElList = document.querySelectorAll(".jouneyClassMain");
      boxElList.forEach((el) => {
        observer.observe(el);
      })

}


   
  
    return (
        <main style={{backgroundColor:'aliceblue'}}>
            <section id='cirriculum' className="mx-auto max-w-6xl gap-4 py-9 md:py-16 pt-20 md:pt:30 w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50%  section">
            <div className="flex flex-col md:gap-18">
                <h3 className="text-center text-backgroundColor text-[30px] font-semibold md:text-[36px]">The journey from 0 to 1</h3>
                <div className="flex min-h-screen flex-col justify-center">
                    <div className="w-full py-3 px-2 sm:mx-auto sm:max-w-3xl sm:px-0">
                        <div className="relative font-inter text-sm antialiased">
                            <div className="absolute left-6 h-full w-1 -translate-x-1/2 transform bg-gray-200 sm:left-1/2 ">
                            </div>
                            {
                                JOURNEY_DATA.map((data,index)=><SectionFourItem key={index} index={index} leftData={data.leftData} rightData={data.rightData} date={data.date}></SectionFourItem>)
                            }
    
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
}

export default SectionFour

