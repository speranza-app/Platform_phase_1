import React from 'react'

const SectionOne = () => {
  return (
    <main style={{backgroundColor:'#f8f8f8'}}>
        <section className='section sectionOne !pb-0 '>
            <div>
              <h1 className="headerStyle">Just code it. </h1>
              <h2 className="my-6 headerPara mx-auto text-center  ">Join our problem-solving event and master coding concepts and data structures and
                algorithms. Get ready for your dream job or higher education with confidence and skills. 
                <br className=' hidden lg:block'/> 
                <span className='text-yellow-400 font-bold'> Code your way to success in 8 weeks! </span>
              </h2>
              <div className='button'>
                    <p>join Us</p>
                    <img id="img_viewAllJob" src="https://careers.cred.club/Images/Arrow.png"/>
              </div>
             
            </div>

        </section>
    </main>
  )
}

export default SectionOne