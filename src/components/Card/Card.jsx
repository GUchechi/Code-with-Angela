import React from 'react'
import './Card.css'


const Card = ({name,img, telephone, email}) => {
  return (
    <>
    <h1 className="heading">My Contact</h1>
    <div className="card">
        <div className="top">
            <h2 className="name">{name}</h2>
            <img className="circle-img"
            src={img}
            alt="avatar_img"
            />
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