import React,{ useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

 const Pages =() => {
   const [data, setData] = useState({pages: []})
   useEffect(() => {
     const fetchData = async () => {
       try{
         const response = await axios.get('http://localhost:5000/api/v3/content/pages');
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
       <h1>Test Page</h1>
       <ul>
      {data.pages.map(page => (
        <li key={page.id} >
       <Link className='App-link' to = {`/blog/pages/${page.id}`}>{page.title}</Link>
        </li>
      ))}
      
       </ul>
       <Link className='App-link' to = '/'>Go to Home</Link>
      </header>
    </div>
  );
}

export default Pages;
