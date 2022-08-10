import React from 'react'
import Avatar from './Avatar'
import './Card.css'


const Card = ({name,img, telephone, email}) => {
  return (
    <>
    <h1 className="heading">My Contact</h1>
    <Avatar 
      img="https://pbs.twimg.com/profile_images/1523987597751726081/XuQeo7gC_400x400.jpg"
    />
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