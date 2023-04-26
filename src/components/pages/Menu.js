import React from 'react'
import "../styling/Menu.css"
import  "./MenuItem"
import MenuItmes from "./MenuItem"
import data from "../Files/menuitems.json"



function Menu() {

  const {appetizers, maincourses, desserts, drinks} =  data
  
      
  return(

      <div className="menu">
       
       <h2>Appetizers</h2>
      <div className='apetizer d-flex'>
     

     {appetizers.map((item) => (
      
      <MenuItmes
        title= {item.title}
        description= {item.description}
        price={item.price}
        image= {item.image}
        

     />
  ))  }
        
      </div>

      <h2>Maincourse</h2>
      <div className='maincourse d-flex'>
      
          {maincourses.map((item) => (
      <MenuItmes
        title= {item.title}
        image= {item.image}
        description= {item.description}
        price={item.price}

     />
  ))  }
      </div>
      <h3>Desserts</h3>
      <div className='dessertss d-flex'>
    
      {desserts.map((item) => (
      <MenuItmes
        title= {item.title}
        image= {item.image}
        description= {item.description}
        price={item.price}

     />
  ))  }
       
      </div>

      <h2>Drinks</h2>
      <div className='drink d-flex'>
     
      {drinks.map((item) => (
      <MenuItmes
        title= {item.title}
        image= {item.image}
        description= {item.description}
        price={item.price}

     />
  ))  }
       
      </div> 
      </div>
   
  )
}


export default Menu