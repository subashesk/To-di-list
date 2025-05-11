import React from 'react'
import {useState } from 'react'
import { FaBeer } from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState(
        [
            { id:1,
                checkeed: true,
                item: "pratice coding"
            },
            { id:2,
                checkeed: false,
                item: "play Cricket"
            },

            { id:3,
                checked: false,
                item: "Read about AI"
            },
]);

const handleCheck = (id) =>{
    const listItems = items.map((item) => item.
    id==id ? {...item, checked:!item.
        checked} :item )
    setItems(listItems)
   
}
    
const handledelete = (id) => {
    
}
     return (
      <main>
        <ul>
            {items.map((item) => (
                <li className="item" key={item.id}>
                    <input
                     type = "checkbox"
                     onChange={ () => handleCheck(item
                        .id)}

                     checked ={item.checked}
                    />
                        <lb>{item.item}</lb>
                         <FaBeer
                         role = "button" 
                         onClick={handledelete(item
                            .id)}
                         tabIndex = "0"/>?
                </li>
                
            ))}
        </ul>
    
   </main>
    
  )
}

export default Content