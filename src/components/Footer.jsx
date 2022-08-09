import React from 'react'

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();


  return (
    <Footer>
        <p>
            Copyright © {currentYear}
        </p>
    </Footer>
  )
}

export default Footer