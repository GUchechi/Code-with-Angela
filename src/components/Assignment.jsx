import React from 'react'

const Assignment = () => {
    const date = new Date(2019, 1, 1, 11);
    const currentDate = date.getHours()
    let greeting;

    if (currentDate < 12){
        greeting = "Good Morning";
    } else if ( currentDate < 18) {
        greeting = "Good Afternoon";
    } else{
        greeting = "Good Nite";
    }

  return (
    <div>
        <h1 className='heading'>{greeting}</h1>
    </div>
  )
}

export default Assignment