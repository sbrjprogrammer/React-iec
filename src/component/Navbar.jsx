import React from 'react'

function Navbar({name,rollNo}) {
  return (
    <div><h1>{name}</h1>
    <h2>{rollNo}</h2>
    </div>
  )
}

export default Navbar