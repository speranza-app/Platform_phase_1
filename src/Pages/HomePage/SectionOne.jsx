import React from 'react'

const SectionOne = () => {
  return (
    <main style={{backgroundColor:'#f8f8f8'}}>
        <section className='section sectionOne'>
            <div>
              <h1 className=" text-[36px] min-[700px]:text-[40px]  lg:text-[48px] font-extrabold !text-textColor  text-center">Inspire. Educate. Empower</h1>
              <h2 className="my-6 headerPara mx-auto text-center  ">This is an 8-week problem-solving curriculum that offers a comprehensive approach <br className=' hidden lg:block'/> to
                <span className='text-yellow-400'> coding concepts, emphasizing mastery of DSA and preparing students </span>
              </h2>
              <div className='button'>
                    <p>find yours </p>
                    <img id="img_viewAllJob" src="https://careers.cred.club/Images/Arrow.png"/>
              </div>
             
            </div>

        </section>
    </main>
  )
}

export default SectionOne