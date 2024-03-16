import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
    // var name="class"
    var [name,setName] = useState("CLASS")
    var [val,setval] = useState()


    const changeName = ()=>{
        console.log("clicked")
        setName(val)
    } 

    const inputhandler=(e)=>{
        console.log(e.target.value)
        setval(e.target.value)
    }
  return (
    <div style={{paddingTop:"80px"}}>
      <Typography variant='h4'>WELCOME : {name}</Typography>
      <TextField variant='outlined' label='enter text' onChange={inputhandler}/><br />
      <Button variant='contained' color='error' onClick={changeName}>Change</Button>
    </div>
  )
}



export default StateBasic
