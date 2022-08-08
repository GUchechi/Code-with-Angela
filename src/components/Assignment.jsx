import React from 'react'

const Assignment = () => {
    const date = new Date(2019, 1, 1, 18);
    const currentDate = date.getHours()
    let greeting;

    const customStyle = {
        color: ""
    }


    if (currentDate < 12){
        greeting = "Good Morning";
        customStyle.color = "green";
    } else if ( currentDate < 18) {
        greeting = "Good Afternoon";
        customStyle.color = "red";
    } else{
        greeting = "Good Nite";
        customStyle.color = "blue";
    }


  return (
    <div>
        <h1 className='heading' style={customStyle}>{greeting}</h1>
    </div>
  )
}

export default Assignment