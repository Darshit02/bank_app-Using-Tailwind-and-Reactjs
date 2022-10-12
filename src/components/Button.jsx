import React from 'react'
import styles from '../style'

const Button = ({style}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gredient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
      Get Started
    </button>
   )
}

export default Button
