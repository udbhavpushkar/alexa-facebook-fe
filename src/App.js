import { useEffect, useState, useSyncExternalStore } from 'react';
import './App.css';
import LoginForm from './components/loginForm';
import PostForm from './components/postForm';
import PostList from './components/postList';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [updated, setUpdated] = useState(0)

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user_id")
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      {isLoggedIn ?
        <>
          <button onClick={logout}>Logout</button>
          <PostForm setUpdated={setUpdated} />
          <PostList updated={updated} />
        </>
        : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

    </div>
  );
}

export default App;
