import React, { useState } from "react"; 
import axios from "axios";
function App(){
  const [dataList, setDataList] = useState("")
  
  const apiCall = async()=>{
    const apiUrl = 'http://test.api.boxigo.in/sample-data/' 
    const options = {
      method:'GET'
    }
    const response = await fetch(apiUrl, options) 
    const data = await response.json() 
    setDataList(data)
    console.log(data)
  }
  
  
 return(
  <div>
    <button onClick={()=> apiCall()}>click</button>
    <>
    {dataList && dataList.Customer_Estimate_Flow.map((each)=>{
      return ( <><p>{each.user_id}</p> 
         <p>{each.distance}</p>
         <p>{each.from_address.firstName}</p>
      </>)
})} 
    
    </>
    
   
  </div>
 )

}

export default App;
