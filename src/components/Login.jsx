import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{paddingTop:"80px"}}>
      <br /><br />

<Typography variant='h3'>LOGIN</Typography>
<br /><br />

<TextField id="outlined-basic" label="username" variant="outlined" />
<br /><br />

<TextField id="outlined-basic" label="password" variant="outlined" />
<br /><br />
<Button variant="contained" color='success'>submit</Button>
    
    </div>
  )
}

export default Login
