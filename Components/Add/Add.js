import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
const Add = ({addTask}) => {
const [newDesk, setNewDesk] = useState("")
const handleClick = ()=>{
  addTask({id:uuidv4() , desc: newDesk, isDone: false});
  setNewDesk("")
}
  return (
    
    <div>
        <input type="Text" value={newDesk}  onChange={(e) => {setNewDesk(e.target.value)}} />
        <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Add