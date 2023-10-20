import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import counterContext from './CounterContext'

function Child({name}) {
    let {count,setCount}=useContext(counterContext)
  return (
    <div>
        <h1>child {count}</h1>
        <button onClick={()=>setCount(count+1)}>increament</button>
    
    {/* <GrandChild name={name}/> */}

    </div>

  )
}

export default Child