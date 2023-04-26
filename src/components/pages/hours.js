import React from 'react'
import'../styling/hours.css'


function hours (props) {
  
  return (
    <div className='hours'>
     {console.log(props)}
        
        <div className='days'>
          
          <h2>{props.days}</h2>
        </div>

        <div className='opening'>
       <h2>{props.opening}</h2>
        </div>


        <div className='closing'>
       <h2>{props.closing}</h2>
        </div>

    </div>
  )
}

export default hours