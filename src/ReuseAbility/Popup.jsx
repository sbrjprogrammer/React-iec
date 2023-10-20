

import { useState } from 'react'
import React from 'react'
import { Modal,ModalBody,ModalFooter,ModalHeader,Button } from 'reactstrap'

function Popup({modal,toggle,product}) {
// const [modal, setmodal] = useState(false)


// const toggle=()=>{
//   setmodal(!modal) 
  return (
    <>
    {/* <Button className="btn-primary" onClick={toggle}>
      toggle karo
    </Button> */}
     <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader>
    <h1>Modal header</h1>
      </ModalHeader>
      <ModalBody>
        <p>name:{product.name}</p>
        <p>price:{product.price}</p>
        <p>description:{product.description}</p>
        <p>category:{product.category}</p>
        <button className=' btn btn-success'>Add to card</button>
        </ModalBody>

        <ModalFooter>
        <p>this is a modal footer</p>
        </ModalFooter>



    </Modal>
    </>
   
  )
}

export default Popup


// import React,{useState} from 'react'
// import { Modal,ModalBody,ModalFooter,ModalHeader,Button } from 'reactstrap'

// function Popup({modal ,toggle ,product}) {
// //   const [modal, setmodal] = useState(false)

// // const toggle=()=>{
// //   setmodal(!modal) 
// // }
//   return (
//     <div>
//        {/* <Button className="btn-primary" onClick={toggle}>
//       toggle karo
//     </Button> */}
//       <Modal isOpen={modal} toggle={toggle}>
//     <ModalHeader>
//       Tittle
//     </ModalHeader>
//     <ModalBody>
//       this is modal body
//     </ModalBody>
//       <ModalFooter>

//       this is modal footer
//       </ModalFooter>
//       </Modal>

//     </div>
//   )
// }

// export default Popup