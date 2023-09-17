import React,{useState} from 'react';

import './App.css';

function App() {

  
const [todoList, settodoList] = useState([])

let [task,setTask]=useState("")


let edit=(ind)=>{
  

  let update=prompt("enter a value")
  
  let arr=[...todoList]


  arr[ind]=update



  settodoList(arr)


}


let remove=(ind)=>{
  let arr= [...todoList]
  arr.splice(ind,1)
  settodoList(arr)

}


  return (
    <div className='App' >


        <input type="text" onChange={(e)=>setTask(e.target.value)} />

      <button onClick={()=>settodoList([...todoList,task])}>add</button>
        

       {
          todoList.map((value,index)=>{
            return <li key={index}>
              {value} 
              <button onClick={()=>edit(index)}>Update</button>
              
              <button onClick={()=>remove(index)}>Delete</button>
              {/* <button onClick={()=>delete(index)}>Update</button> */}
            </li>
          })
       }


  
    </div>
  );
}

export default App;
