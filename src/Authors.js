import React,{ useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

 const Authors =() => {
   const [data, setData] = useState({authors: []})
   useEffect(() => {
     const fetchData = async () => {
       try{
         const response = await axios.get('http://localhost:5000/api/v3/content/authors');
         setData(response.data);
       }
       catch(error){
         console.log(error);
       }
     }
     fetchData();
   }, [])
  return (
    <div className="App">
      <header className="App-header">
       <h1> Authors Page</h1>
       <ul>
      {data.authors.map(author => (
        <li key={author.id} >
       <Link className='App-link' to = {`/blog/authors/${author.id}`}>{author.title}</Link>
        </li>
      ))}
      
       </ul>
       <Link className='App-link' to = '/'>Go to Home</Link>
      </header>
    </div>
  );
}

export default Authors;
