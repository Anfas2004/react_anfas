import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>MY APP</Typography>&nbsp;&nbsp;
                    <Button variant='contained' color='warning'>
                        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Login</Link>
                    </Button>&nbsp;&nbsp;
                    <Button variant='contained' color='error'>
                        <Link to={'/signin'} style={{ textDecoration: "none", color: "white" }}>Signin</Link>
                    </Button>&nbsp;&nbsp;
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
