import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Add() {

  const [book,setBook]=useState({
    title:"",
    description:"",
    cover:"",
    price:null,
  });

  const navigate =useNavigate()


  const handleChange=(e)=>{
    setBook((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }));
  };

  const handleClick =async e=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/book",book)
      navigate("/")
    }catch(err){
      console.log(err)

    }
  }

  return (
    <div className="add">
    <div className='form'>
      <h1>Add New Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title'/>
      <input type="text" placeholder='description' onChange={handleChange} name='description' />
      <input type="text" placeholder='cover' onChange={handleChange} name='cover'/>
      <input type="text" placeholder='price' onChange={handleChange} name='price'/>

      <button onClick={handleClick}>Add</button>
        
      
    </div>
    </div>
  )
}

