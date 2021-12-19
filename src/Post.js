import React,{ useState, useEffect } from 'react';
import './App.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

 const Post =() => {
   console.log('---->',Post)
     let {id} = useParams()
   const [data, setData] = useState({posts: []})
   useEffect(() => {
     const fetchData = async () => {
       try{
         const response = await axios.get(`http://localhost:5000/api/v3/content/posts/${id}`);
         console.log('---->',response)
         setData(response.data);
       }
       catch(error){
         console.log(error);
       }
     }
     fetchData();
   }, [id])
  return (
    <div className="App">
      <header className="App-header">
        {data.posts[0] && (
            <React.Fragment>
            <h1>{data.posts[0].title}</h1>
            <p>{data.posts[0].custom_excerpt}</p>
            </React.Fragment>
        )}
       <Link className='App-link' to = '/blog'>Post single</Link>
      </header>
    </div>
  );
}

export default Post;
