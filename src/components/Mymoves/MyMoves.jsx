import React,{useState, useEffect} from "react";  

import axios from "axios";
import Samplemove from './Samplemove'
import InvertoryDetails from '../InvertoryDetails/InvertoryDetails'
import "./MyMoves.css"

function MyMoves(){
    const [dataList, setDataList] = useState("")
    const [invertoryDetails, setInvertoryDetails] = useState('')
    
    console.log(dataList)
    
    useEffect(()=>{
        axios.get('http://test.api.boxigo.in/sample-data/').then((response)=>{
            setDataList(response.data)
            setInvertoryDetails(response.data.Customer_Estimate_Flow[0].items.inventory)
            
        })
            
    }, [])
     
   
  
    return(
        <div className="maincontianer">
            <div>
                    {dataList && dataList.Customer_Estimate_Flow.map((each)=> (<Samplemove each={each}/>)
                       
                    )}
                    {dataList && invertoryDetails.map((deta)=>(<InvertoryDetails deta={deta}/>))}
                  
                    
                </div>
        </div>
    )
}
export default MyMoves