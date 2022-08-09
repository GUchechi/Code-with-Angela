import React from 'react'
import Pi,{doublePi, triplePi} from './Maths.js'

const Lists = () => {
  return (
    <div>
        <ul>
            <li>{Pi}</li>
            <li>{doublePi}</li>
            <li>{triplePi}</li>
        </ul>
    </div>
  )
}

export default Lists