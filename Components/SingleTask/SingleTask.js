import React from 'react'
import './SingleTask.css'

const SingleTask = ({elp , nbr, changeStats,supTask}) => {
    //console.log(elp.id)
  return (
    <div style={{display: 'flex' , justifyContent:'space-around'}}>
        <h3 className={elp.isDone? 'Green' : 'Red'} style={{margin:0}}> {nbr} -{elp.desc}</h3>
        <div>
            <button onClick={()=>{supTask(elp.id)}} >X</button>
            <button onClick={()=>{changeStats(elp.id)}} >{ elp.isDone ?'Done':'Undone'}</button>
            <button >Edit</button>
        </div>
      

    </div>
  )
}

export default SingleTask