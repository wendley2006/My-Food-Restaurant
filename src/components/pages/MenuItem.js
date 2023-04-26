import React from 'react'
import "../styling/Menuitem.css"


function Menuitems({image, title, description, price}) {

  return ( 
  <div className='Menuitem'>
    <div className='pic'>
          <img src={image} alt=''/>
    </div>

    <div className='title-desc'>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>

    <div className='price'>
      <h3>${price}</h3>
    </div>
  </div>
     

)    }

export default Menuitems;