import React from 'react'
import add,{sub, multiply, divide} from './Calc.js'

const Lists = () => {
  return (
    <div>
        <ul>
            <li>{add(1 , 2)}</li>
            <li>{multiply(2,3)}</li>
            <li>{sub(7,2)}</li>
            <li>{divide(5,2)}</li>
        </ul>
    </div>
  )
}

export default Lists