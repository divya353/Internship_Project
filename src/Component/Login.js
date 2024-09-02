import { Icon } from '@iconify/react/dist/iconify.js';
import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BasicCard() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    // Load signup data from localStorage
    const signupData = JSON.parse(localStorage.getItem('signupData')) || {};
    
    // Handle email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // Handle password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    // Handle form submission
    const submitForm = (e) => {
        e.preventDefault();
        console.log('Email', email);
        console.log('Password', password);
        
        const isAuthenticated = email === signupData?.Email && password === signupData?.Password;
const payload={
    name:password,
    email:email
}
axios.post('http://localhost/PHP Program/blog.php',payload)

console.log('isAuthenticated',isAuthenticated)
        if (isAuthenticated) {
            setAuth(true);
            toast.success('LogIn Successfull')

            localStorage.setItem('Auth', isAuthenticated); // Store authentication state as a string
            navigate('/home');
        } else {
            setAuth(false);
            toast.error('Invalid Username or Password. Please Signup!')
            localStorage.setItem('Auth', auth); // Store authentication state as a string
        }
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
            gap: 2
        }}>
            <Typography fontSize={30} align="left" sx={{ width: '100%', mb: 2 }}>
                Sign In
            </Typography>
            <Icon icon="cil:user" width={40} />
            
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
            }}>
                <Checkbox sx={{ mr: 0.5 }} size='small'/>
                <Typography>Remember me?</Typography>
            </Box>

            <Typography sx={{ textAlign: 'left', width: '100%' }}>
                <a href="/forgot-password" style={{ textDecoration: 'none', color: '#1976d2' }}>
                    Forget Password
                </a>
            </Typography>
            <Button onClick={submitForm} variant="outlined">Sign in</Button>
            <Typography>Or Login with</Typography>
            <Box>
                <Icon icon="flat-color-icons:google" fontSize={30} style={{marginRight:10}}/>
                <Icon icon="logos:facebook" fontSize={30} style={{marginRight:10}}/>
                <Icon icon="devicon:linkedin" fontSize={30} />
            </Box>
            <Typography sx={{ textAlign: 'left', width: '100%', mt: 2 }}>
                Do you have an account? <a href="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>Sign up</a>
            </Typography>
            <ToastContainer/>
        </Card>
    );
}
