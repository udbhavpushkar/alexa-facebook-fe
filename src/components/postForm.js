import React, { useState } from "react"
import axios from 'axios';

const PostForm = (props) => {

    const [formData, setFormData] = useState({})

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            let token = localStorage.getItem("token")
            let header = { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
            let response = await axios.post(`http://localhost:8005/post`, formData, { headers: header })
            console.log(response.data);
            document.getElementById("post-form").reset() //reset form
            setFormData({}) //reset formData state variable
            props.setUpdated(prev => prev + 1)
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (e) => {
        let data = { ...formData }
        data[e.target.name] = e.target.value
        setFormData(data)
    }

    return (
        <form onSubmit={handleFormSubmit} id='post-form'>
            <div>
                <label htmlFor='title'>Title</label>
                <br />
                <input type="text" id='title' name='title' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='content'>Create your post</label>
                <br />
                <textarea id='content' name='content' cols={12} rows={4} onChange={handleChange} />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default PostForm