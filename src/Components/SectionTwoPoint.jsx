import React from 'react'

const SectionTwoPoint = ({number=0,text='',span='',textMore=''}) => {
  return (
    <div className='sectionTwoPoint'>
        <div>
            {number}
        </div>
        <p>{text} <span className='text-yellow-400'>{span}</span> {textMore}</p>

    </div>
  )
}

export default SectionTwoPoint