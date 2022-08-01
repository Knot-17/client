import React from 'react'

const Button = ({color , text , onClick ,isDisabled, hcolor}) => {
  return (
    <button className={`bg-${color} rounded-sm hover:bg-${hcolor} p-1`} onClick={onClick} disabled={isDisabled} >

      {text}
    
    </button>
  )
}

export default Button;