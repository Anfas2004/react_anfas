import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setCount]=useState(0)

    const incCount = () =>{
        setCount(count + 1)
    }
    const decCount = () =>{
        if(count>0){
        setCount(count - 1)}
      
    }
  return (
    <div style={{paddingTop:"80px"}}>
        <Typography variant='h3'>counter value: {count}</Typography>
      <Button variant='contained' onClick={incCount}>size up</Button>&nbsp;
      <Button variant='contained' onClick={decCount}>size down</Button>
      
    </div>
  )
}

export default Counter
