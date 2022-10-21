import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = (props) => {
    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        fetchAllPosts()
    }, [])

    const fetchAllPosts = async () => {
        try {
            let response = await axios.get(`http://localhost:8005/post`)
            console.log(response.data);
            setPostsData(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    const handleDeletePost = async (id) => {
        //api for deleting a post
        try {
            let response = await axios.delete(`http://localhost:8005/post/${id}`)
            console.log(response.data);
            fetchAllPosts()
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            {postsData.map((post) => {
                return (
                    <div key={post._id} style={{ marginBottom: "20px" }}>
                        <div style={{ fontSize: "22px", fontWeight: "bolder" }}>{post.title}</div>
                        <div>{post.content}</div>
                        <button onClick={() => { handleDeletePost(post._id) }}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}

export default PostList