import React from 'react'

const CustomTextInput = ({header,placeholder,state,setState}) => {
  return (
    <div className='customTextInput'>
        <label>{header}</label>
        <input placeholder={placeholder} value={state} onChange={(e)=>setState(e.target.value)}>
        </input>
    </div>
  )
}

export default CustomTextInput