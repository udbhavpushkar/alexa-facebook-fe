import axios from "axios";
import React, { useState } from "react";

const LoginForm = (props) => {

    const [formData, setFormData] = useState({})
    const [currentTab, setCurrentTab] = useState("login")

    const handleChange = (e) => {
        let data = { ...formData }
        data[e.target.name] = e.target.value
        setFormData(data)
    }

    const handleLoginTabClick = () => {
        setCurrentTab("login")
    }

    const handleRegisterTabClick = () => {
        setCurrentTab("register")
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            if (currentTab === "register") {
                //api for registration
                let response = await axios.post("http://localhost:8005/user/register", formData)
                console.log(response.data);
                alert("Registration successfull. Now login !!")
                document.getElementById("loginForm").reset()
            } else {
                let response = await axios.post("http://localhost:8005/user/login", formData)
                console.log(response.data);
                props.setIsLoggedIn(true)
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div className="tabs">
                <div onClick={handleLoginTabClick}>Login</div>
                <div onClick={handleRegisterTabClick}>Register</div>
            </div>
            <div>
                <h2>{currentTab}</h2>
                <form onSubmit={handleFormSubmit} id="loginForm">
                    {currentTab === "register" ? <div>
                        <label htmlFor='name'>name</label>
                        <br />
                        <input type="text" id='name' name='name' onChange={handleChange} />
                    </div> : null}

                    <div>
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input type="email" id='email' name='email' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <br />
                        <input type="password" id='password' name='password' onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm