
import React from 'react';
import Home from './Home'
import Blog from './Blog'
import Post from './Post';
import Authors from './Authors';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Pages from './Pages';
import Tags from './Tags';
// import {  BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts"
const  App = () =>{
  // const data = [
    // {name: 'Geeksforgeeks', students: 400},
    // {name: 'Technical scripter', students: 700},
    // {name: 'Geek-i-knack', students: 200},
    // {name: 'Geek-o-mania', students: 1000}
  // ];
  return (
    // <>
  //   <BarChart width={500} height={300} data={data}>
  //   <Bar dataKey="students" fill="green" />
  //   <CartesianGrid stroke="#ccc" />
  //   <XAxis dataKey="name" />
  //   <YAxis />
  // </BarChart>
  
    <Router>
    <Route path="/" component= {Home}/>
    <Route path = "/blog" component = {Blog}/>
    <Route path = "/post/:id" component={Post}/>
    <Route path = "/authors" component={Authors}/>
    <Route path = "/pages" component={Pages}/>
    <Route path = "/tags" component={Tags}/>
</Router>
// </>

  
  );
}
export default App;