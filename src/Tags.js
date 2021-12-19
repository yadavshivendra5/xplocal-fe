import React,{ useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

 const Tags =() => {
   const [data, setData] = useState({tags: []})
   useEffect(() => {
     const fetchData = async () => {
       try{
         const response = await axios.get('http://localhost:5000/api/v3/content/tags');
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
       <h1>Tags Page</h1>
       <ul>
      {data.tags.map(tag => (
        <li key={tag.id} >
       <Link className='App-link' to = {`/blog/tags/${tag.id}`}>{tag.title}</Link>
        </li>
      ))}
      
       </ul>
       <Link className='App-link' to = '/'>Go to Home</Link>
      </header>
    </div>
  );
}

export default Tags;
