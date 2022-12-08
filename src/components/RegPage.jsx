import React, { useState } from 'react'
import './regpage.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function RegPage() {
    const navigate=useNavigate()
    const success = () => toast("Login Success...!");
    const failed = () => toast("Login Failed...!");
    const [regData,setRegData]=useState()
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneno = /^\d{10}$/;
    const regChange=(e)=>{
        const { name, value } = e.target
        setRegData({
            ...regData,
            [name]: value,
        })

    }

    const regSummit=(event)=>{
        event.preventDefault()
        if (regData.emailorphonenumber.match(validRegex) || regData.emailorphonenumber.match(phoneno)) {
            
            axios.post('https://api.oopacks.com/api/test/register',regData)
            .then(res=>{console.log(res);
                localStorage.setItem('token', JSON.stringify(res.data.token));
                if(res.status==200){
                    success()
                    navigate('/')
                }
            })
        }
        else{
            alert("fail")
        }
        
        
    }
    console.log(regData);
    return (
        <>
            <div className="login">
                <h2>Register</h2>
                <form className="login-form" onSubmit={regSummit}>
                <div className="textbox">
                        <input type="text" placeholder="First Name" name='firstName' onChange={regChange} required/>   
                    </div>
                    <div className="textbox">
                        <input type="text" placeholder="Last Name" name='lastName' onChange={regChange} required/>      
                    </div>
                    <div className="textbox">
                        <input type="text" placeholder="Email or Phone Number" name='emailorphonenumber' onChange={regChange} required/>
                        
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder="Password" name='password' onChange={regChange} required/>
                    </div>
                    
                    <button type="submit">REGISTER</button>
                    <a href="/">Login</a>
                </form>
                <ToastContainer />
            </div>
            
        </>
    )
}