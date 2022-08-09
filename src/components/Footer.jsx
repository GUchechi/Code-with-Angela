import React from 'react'

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();


  return (
    <div>
        <p>
            Copyright © {currentYear}
        </p>
    </div>
  )
}

export default Footer