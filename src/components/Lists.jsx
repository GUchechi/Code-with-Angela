import React from 'react'
import add,{sub, multiply, divide} from './Calc.js'

const Lists = () => {
  return (
    <div>
        <ul>
            <li>{add(1 , 2)}</li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Lists