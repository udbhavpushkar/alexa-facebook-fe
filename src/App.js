import { useState } from 'react';
import './App.css';
import LoginForm from './components/loginForm';
import PostForm from './components/postForm';
import PostList from './components/postList';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      {isLoggedIn ?
        <>
          <PostForm />
          <PostList />
        </>
        : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

    </div>
  );
}

export default App;
