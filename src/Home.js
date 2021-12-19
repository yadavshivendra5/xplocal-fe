import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

 const Home =() => {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Home Page</h1>
       <Link className='App-link' to ='/blog'>Go to Blog</Link>
      </header>
    </div>
  );
}

export default Home;
