import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
    const navigate=useNavigate()
    const [passData,setPassData]=useState()
    const forPasswordStore=(e)=>{
        const { name, value } = e.target
        setPassData({
            ...passData,
            [name]: value,
        })

     }
     const newPassword=(event)=>{
        event.preventDefault()
        axios.put('https://api.oopacks.com/api/test/forgotpassword',passData)
        .then(passres=>{
            console.log(passres);
            if(passres.status==200){
                navigate('/')
            }
            else{
                alert("Failed")
            }
        })
     }
  return (
    <div>
        <div className="login">
        <h2>Reset Password</h2>
                <form className="login-form" onSubmit={newPassword}>
                    <div className="textbox">
                        <input type="text" placeholder="Username" name="emailorphonenumber" onChange={forPasswordStore}/>
                        
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder="New Password" name="password" onChange={forPasswordStore}/>
                        
                    </div>
                    <button type="submit">RESET</button>

                </form>
            </div>
    </div>
  )
}
