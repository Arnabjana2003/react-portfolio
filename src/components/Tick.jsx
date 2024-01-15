import React from 'react'
import tick from '../Assets/tick-svgrepo-com.svg'

function Tick({className= "w-6"}) {
  return (
    <div className={`${className}`}>
        <img className=' w-full' src={tick}/>
    </div>
  )
}

export default Tick