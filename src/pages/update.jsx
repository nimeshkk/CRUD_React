import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Update() {
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
    price: null,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  useEffect(() => {
    
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/book/${bookId}`);
        const existingBook = res.data[0]; 
        setBook(existingBook);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBook();
  }, [bookId]);

  const handleChange = (e) => {
    setBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/book/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className='form'>
        <h1>Update Book</h1>
        <input type="text" placeholder='Title' onChange={handleChange} name='title' value={book.title} />
        <input type="text" placeholder='Description' onChange={handleChange} name='description' value={book.description} />
        <input type="text" placeholder='Cover' onChange={handleChange} name='cover' value={book.cover} />
        <input type="number" placeholder='Price' onChange={handleChange} name='price' value={book.price || ''} />

        <button onClick={handleClick}>Update</button>
      </div>
    </div>
  );
}

 