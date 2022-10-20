import React, { useEffect, useState } from "react";
import './App.css';
import Login from "../User/Login";
import Signup from "../User/Signup";
import Header from "../Component/Header"
import {Route, Routes } from 'react-router-dom'
import { UserContext } from './UserContext'


function App() {

const [user, setUser]=useState(null)
// console.log(user, 'user')
useEffect(()=>{
  fetch("/me").then((res)=>{
  if(res.ok){
    res.json().then((data)=>setUser(data))
    } });
  },[])



  return (
    <>
    <UserContext.Provider value={user}>
      <Header />
      <div className='container-fluid'>
    <div className='container'>
  <div className="container">
                <Routes>
                    {/* <Route exact path="/" element={<Home posts={posts}/>} />
                    <Route exact path="/posts/:id" element={ <Post currentPost={currentPost} onDeletePost={handleUpdatePost} setPosts={setPosts} onUpdatePost={handleUpdatePost} posts={posts} /> }/>
                    <Route exact path="/post" element={<CreatePost handleAddPost={handleAddPost} user={user} setUser={setUser}/>} />  */}
                    <Route exact path="/signup" element={<Signup />} /> 
                    <Route exact path="/login" element={<Login />} />
              </Routes> 
      </div>
    </div>
  </div>
    </UserContext.Provider>

    </>
  );
}

export default App;
