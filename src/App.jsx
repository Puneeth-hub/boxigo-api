import React, { useState }  from "react";
import MyMoves from './components/Mymoves/MyMoves'
function App(){
  const [handleSelect, setHandleSelect] = useState(null) 
  
  const handleClicked = (click) =>{
    setHandleSelect(click)
  }
  
  return(
    <div className="silder-container">
      <div className="silder-component">
        <button className="button" onClick={()=>handleClicked('clickOne')}>My Moves</button>
      </div>
      <div className="App">
        {handleSelect === 'clickOne' && <MyMovesOne/>}
      </div>
    </div>
  )
}

function MyMovesOne(){
  return(
    <div className="container-div-half">
      <div>
        <MyMoves/>
      </div>
    </div>
  )
}
export default App