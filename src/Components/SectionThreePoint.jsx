import React from 'react'

const SectionThreePoint = ({image='',header='',text=''}) => {
  return (
    <div className='sectionThreePoint'>
        <div>
            <img src={image}></img>
        </div>
        <div>
            <h2>
                {header}
            </h2>
            <p>
                {text}
            </p>
        </div>


    </div>
  )
}

export default SectionThreePoint