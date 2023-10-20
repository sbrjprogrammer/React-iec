import React,{useEffect,useState} from 'react'
import axios from 'axios'
function ComponentDidMount() {

    let [data, setData] = useState([])

    let [count,setCount]=useState(0)
    let [count2,setCoun2]=useState(0)




    useEffect(()=>{
        // componentdidmount
            // axios.get("https://jsonplaceholder.typicode.com/users")
            // .then((response)=>{
            //     let dataRes = response.data
            //     // setData(response?.data)
            //     setData(dataRes)
            //     // console.log(data)

                
            // }).catch((err)=>{
            //     console.log(err)
            // })

            setCoun2(count2+1)
            console.log(count2)

    },[count])


           



  return (
    <div>
       <table border={1}>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>

        {data.map((value,index)=>{
            return <tr>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
            </tr>
        })}
       </table>

    </div>
  )
}

export default ComponentDidMount