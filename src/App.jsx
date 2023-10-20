import React,{useState} from 'react';
import ComponentDidMount from './component/lifecycle/componentDidMount';
import ComponetWillUnmounnt from './component/lifecycle/lifecycle';
import Parent1 from './component/Parent1';
import counterContext from './component/CounterContext';
import Child from './component/Child';
import ProductPage from './ReuseAbility/ProductPage';
import Popup from './ReuseAbility/Popup';
import './App.css';


function App() {

let  [count, setCount] = useState(2)
  
 

// const [todoList, settodoList] = useState([])
//  let [todoList,settodoList] = useState([])
//   let [task,setTask]=useState("")


// let edit=(ind)=>{
//   // console.log(ind)

//   let update=prompt("enter a value")
  
//   let arr=[...todoList]


//   arr[ind]=update

//   settodoList(arr)


// }


// let remove=(ind)=>{
//   let arr= [...todoList]

//   arr.splice(ind,1)
//   settodoList(arr)

// }


  return (
    // <div className='App' >


    //     <input type="text" onChange={(e)=>setTask(e.target.value)} />



    //   <button onClick={()=>settodoList([...todoList,task])}>add</button>
       

    //    {

    //     todoList.map((value,index)=>{
    //       return <li key={index}>
    //           {value}
    //           <button onClick={()=>edit(index)}>upadet</button>
    //           <button onClick={()=>remove(index)}>delete</button>
    //       </li>

    //     })
    //       // todoList.map((value,index)=>{
    //       //   return <li key={index}>
    //       //     {value} 
    //       //     {/* <button onClick={()=>edit(index)}>Update</button>
              
    //       //     <button onClick={()=>remove(index)}>Delete</button> */}
    //       //     {/* <button onClick={()=>delete(index)}>Update</button> */}
    //       //   </li>
    //       // })
    //    }


  
    // </div>
  //  <counterContext.Provider value={{count,setCount}}>
  //    <Parent1/>
  //    <Child/>




     


  //  </counterContext.Provider>


  <ProductPage/>
  // <Popup/>

   
  );
}

export default App;
