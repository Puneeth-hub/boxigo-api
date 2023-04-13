import React from 'react'  
import { useState} from 'react'
import './InvertoryDetails.css'
import {RiArrowDropDownLine} from 'react-icons/ri'

const DataList= [{
    displayName:'Furniture',
    number:'15'
},
{
    displayName:'Electronics',
    number:'9'
},
{
    displayName:'Vehicle',
    number:'1'
}, 
{
    displayName:'Other appliances',
    number:'13'
},
{
    displayName:'Boxes/Trolley',
    number:'1'

 }];




const InvertoryDetails =()=>{
     const [collapse, setCollapse] = useState(true);
     
    
        const toggleCollapse=()=>{
            setCollapse(!collapse)
        }

    return(
        <div >
            <div className='inventory-main'>
            <h3>Invertory Details</h3>
            <button>Edit Invertory</button>
            </div>
            <div className='inventory-middle'>
                {DataList.map((item) =>(
                    <>
                    <li className='button-with' onClick={toggleCollapse}>{item.displayName} <div className='number-round'><span className='spanwithcenter'>{item.number}</span></div>
                    <div><RiArrowDropDownLine className='symbol'/></div></li>
                      {collapse && (
                        <div>
                          <p>Puneet</p>
                        </div>
                     )}
                    </>
                
                ))}
                
              <div>
                    
                    </div>
              
        
          
         </div>
        </div>
    )
}
export default InvertoryDetails