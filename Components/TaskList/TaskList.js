import React from 'react'
import SingleTask from '../SingleTask/SingleTask'

const TaskList = ({list,changeStats,supTask}) => {
  return (
    <div>
        <h1>TaskList</h1>
        {list.length ?list.map((el , i)  => <SingleTask elp ={el} nbr ={i+1} key={el.id} changeStats={changeStats} supTask={supTask}/> ):<h1>kamilna</h1>}
    </div>

  )
}

export default TaskList