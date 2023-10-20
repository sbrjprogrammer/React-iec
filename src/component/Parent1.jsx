import React,{useContext, useState} from 'react'
import Child from './Child'
import counterContext from './CounterContext'

function Parent1() {
   let {count,setCount}  =useContext(counterContext)

 
      
  
  return (
    <div> <h2>parent</h2>{count}
    <button onClick={()=>setCount(count-1)}> decreament</button>
   

    </div>
  )
}

export default Parent1