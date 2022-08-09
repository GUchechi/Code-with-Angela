import React from 'react'
import Pi,{doublePi} from './Maths.js'

const Lists = () => {
  return (
    <div>
        <ul>
            <li>{Pi}</li>
            <li>{doublePi}</li>
            <li>Noodles</li>
        </ul>
    </div>
  )
}

export default Lists