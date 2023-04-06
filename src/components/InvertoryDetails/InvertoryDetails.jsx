import React from 'react'  
import { useState} from 'react'


const InvertoryDetails =(props)=>{
     const [collapse, setCollapse] = useState(true);
     const data = props 
     const deta = data.deta
     console.log(deta.name)
    
        const toggleCollapse=()=>{
            setCollapse(!collapse)
        }

    return(
        <div>
            <h3>Invertory Details</h3>
            <button>Edit Invertory</button>
            <div>
            <button onClick={toggleCollapse}>{deta.name}</button>
                
                    <div>
                        
                      {collapse && (
                        <div>
                        
                        </div>
           )}
                    </div>
              
        
          
         </div>
        </div>
    )
}
export default InvertoryDetails