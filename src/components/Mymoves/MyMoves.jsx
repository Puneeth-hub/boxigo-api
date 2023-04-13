import React,{useState, useEffect} from "react";  

import axios from "axios";
import Samplemove from './Samplemove'

import "./MyMoves.css"

function MyMoves(){
    const [dataList, setDataList] = useState("")
    
    
    console.log(dataList)
    
    
    useEffect(()=>{
        axios.get('http://test.api.boxigo.in/sample-data/').then((response)=>{
            setDataList(response.data)
            
            
        })
            
    }, [])

    
            
    
     
   
  
    return(
        <div className="maincontianer">
            <div>
                    {dataList && dataList.Customer_Estimate_Flow.map((each)=> (<Samplemove each={each}/>)
                       
                    )}
                    
                     
                   
                </div>
                
        </div>
    )
}
export default MyMoves