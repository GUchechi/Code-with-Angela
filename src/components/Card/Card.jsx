import React from 'react'
import Avatar from './Avatar'
import './Card.css'


const Card = ({name,img, telephone, email}) => {
  return (
    <>
    <h1 className="heading">My Contact</h1>
    <div className="card">
        <div className="top">
            <h2 className="name">{name}</h2>
            <Avatar img={img} />
        </div>
        <div className="bottom">
            <p className="info">{telephone}</p>
            <p className="info">{email}</p>
        </div>
    </div>
    </>
  )
}

export default Card