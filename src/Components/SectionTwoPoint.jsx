import React from 'react'

const SectionTwoPoint = ({number=0,text=''}) => {
  return (
    <div className='sectionTwoPoint'>
        <div>
            {number}
        </div>
        <p>{text}</p>

    </div>
  )
}

export default SectionTwoPoint