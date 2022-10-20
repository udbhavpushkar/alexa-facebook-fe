import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PostList from './components/postList';

function App() {
  const [formData, setFormData] = useState({})

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.post(`http://localhost:8005/post`, formData)
      console.log(response.data);
      document.getElementById("post-form").reset() //reset form
      setFormData({}) //reset formData state variable
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
    <div className="App">
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
      <PostList />
    </div>
  );
}

export default App;
