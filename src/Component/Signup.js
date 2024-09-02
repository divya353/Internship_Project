import { Icon } from '@iconify/react/dist/iconify.js';
import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const navigate = useNavigate()
    const[username,SetUsername]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleusername=(e)=>
    {
        SetUsername(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Username',username);
        console.log('Email', email);
        console.log('Password', password);
        const signupData = { 
            'Username': username,
             'Email': email, 
            'Password':password
     }; 
   

        // Store authentication state as a string
        localStorage.setItem("signupData",JSON.stringify(signupData));
        navigate('/login')
    };

    

    return (
        <Card sx={{
            maxWidth: 400, 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            m: 'auto',
            gap: 0
        }}>
            <Typography fontSize={30} align="left" sx={{ width: '100%', mb: 2 }}>
                Get Started Now!
            </Typography>
    
            <TextField 
                id="username" 
                label="Username" 
                variant="outlined"
                onChange={handleusername}
                value={username}
                 size='small'
                fullWidth
                sx={{ mb: 2 }}
            />
            
            <TextField 
                id="email" 
                label="Email" 
                variant="outlined"
                onChange={handleEmail}
                value={email}
                 size='small'
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField 
                id="password" 
                label="Password" 
                variant="outlined"
                onChange={handlePassword} 
                value={password}
                type='password'
                size='small'
                fullWidth
                sx={{ mb: 2 }}
            />
            
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'start', 
                width: '100%',
                mb: 2 
            }}>
                <Checkbox sx={{ mr:0.5  }} size='small' />
                <Typography>I agree to the terms and conditions</Typography>
            </Box>

            <Button onClick={submitForm} variant="outlined" fullWidth>Sign Up</Button>
            <Typography sx={{ textAlign: 'left', width: '100%', mt: 2 }}>
           Already have account?<span>Sign In </span> Or
            </Typography>
            <Typography sx={{ textAlign: 'left', width: '100%', mt: 2 }}>

            <Button onClick={submitForm} variant="outlined" fullWidth><Icon icon="flat-color-icons:google" fontSize={20}/>
            Sign up with Google</Button>
            </Typography>

        </Card>
    );

}


