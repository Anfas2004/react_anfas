import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signin = () => {
  return (
    <div style={{paddingTop:"80px"}}>
       <Typography variant='h4'>SIGN IN</Typography><br /><br />
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <br /><br />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <br /><br />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <br /><br />
      <TextField id="outlined-basic" label="confirm password" variant="outlined" />
      <br /><br />  
      <Button variant='contained' color='success'>continue</Button>
    </div>
  )
}

export default Signin
