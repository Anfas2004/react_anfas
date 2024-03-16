import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Statebasic2 = () => {

    var [name,setName] = useState("HOME")

    const changeHname = () =>{
        setName("HOME")
    }
    const changeCname = () =>{
        setName("CONTACT")
    }
    const changeAname = () =>{
        setName("ABOUT")
    }
    useEffect(()=>{
        changeCname()
    },[])
  return (
    <div style={{paddingTop:'80px'}}>
        <Button variant='contained' onClick={changeHname}>Home</Button>&nbsp;
        <Button variant='contained' onClick={changeCname}>contact</Button>&nbsp;
        <Button variant='contained' onClick={changeAname}>About</Button><br /><br />
        <Typography variant='h4'>WELCOME TO {name} PAGE</Typography>
    </div>
  )
}

export default Statebasic2
