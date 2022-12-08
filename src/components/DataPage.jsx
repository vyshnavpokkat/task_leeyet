import axios from 'axios'
import React, { useState } from 'react'
import './datapage.css'


export default function DataPage() {
    const [file, setFile] = useState()
    const [otpdata, setotpdata] = useState()
    const token = localStorage.getItem("token")
    // console.log("token===>", token);
    const sentOtp = (event) => {
        const { name, value } = event.target
        setotpdata({
            ...otpdata,
            [name]: value
        })
    }
    const submit = async (e) => {
        e.preventDefault()
        if (file) {
            console.log("token===>", token);
            console.log("token===>", file);
            const data = new FormData();
            data.append("files", file)
            for (const value of data.values()) {
                console.log("===========================>",value);
              }
            let response = await fetch("https://api.oopacks.com/api/test/upload", {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,

                }
            })

            console.log("reponse==>",response)
            // axios.put('https://api.oopacks.com/api/test/upload', { headers: { "Authorization": `Bearer ${token}` } })
            //     // .then(response=>response.json())
            //     .then(res => console.log(res))
        }
        // console.log(otpdata);
        // axios.post('https://api.oopacks.com/api/auth/sendotp', otpdata)
        //     .then(res => console.log(res))
    }
    return (
        <>
            <form className="login-form" onSubmit={submit}>

                <div className="textbox">
                    <input type="file" placeholder="Password" onChange={(e) => { setFile(e.target.files[0]) }} required />
                </div>
                <div className="textbox">
                    {/* <input type="text" placeholder="Number" name='phonenumber' onChange={sentOtp} required /> */}
                </div>
                <button type="submit">LOGIN</button>
                <a href="/regPage">Register</a>
                <a href="/forgetpage">Forgot password</a>
            </form>
        </>
    )
}
