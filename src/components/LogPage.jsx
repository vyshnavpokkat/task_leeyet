import React, { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './log.css'

export default function LogPage() {
    const navigate=useNavigate()
    const [logData,setLogData]=useState()
    const success = () => toast("Login Success...!");
    const failed = () => toast("Login Failed...!");
    const storeLog=(e)=>{
        
        const { name, value } = e.target
        setLogData({
            ...logData,
            [name]: value
        })
    }
    const logSummit=(event)=>{
        
        event.preventDefault()
        axios.post('https://api.oopacks.com/api/test/login',logData)
        .then(logres=>{
            console.log(logres);
            if(logres.status==200){
                success()
            }
            else{
                failed()
            }
            
    })
}
    console.log(logData);
  return (
    <>
        <div className="login">
                <h2>LogIn</h2>
                <form className="login-form" onSubmit={logSummit}>
                    <div className="textbox">
                        <input type="text" placeholder="Username" name="emailorphonenumber" onChange={storeLog}/>
                        <span className="material-symbols-outlined"> <AccountBoxIcon/> </span>
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder="Password" name="password" onChange={storeLog}/>
                        <span className="material-symbols-outlined"> <LockIcon/> </span>
                    </div>
                    <button type="submit">LOGIN</button>
                    <a href="/regPage">Register</a>
                    <a href="/forgetpage">Forgot password</a>
                </form>
                <ToastContainer />
            </div>
    </>
  )
}
