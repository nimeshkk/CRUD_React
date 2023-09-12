import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Book() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/book");
                setBooks(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/book/" + id)
            setBooks(books.filter(book => book.id !== id));
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <div>
            <h1 >Book List</h1>
            <div className="books">
                {
                    books.map((B) => (
                        <div className="book" key={B.id}>
                            <img src={B.cover} alt="" />
                            <h2>{B.title}</h2>
                            <p>{B.description}</p>
                            <span>{B.price}</span>
                            <button className="delete" onClick={() => handleDelete(B.id)}>Delete</button>
                            <button className="update"><Link to={`/update/${B.id}`}>Update</Link></button>
                        </div>
                    ))
                }
            </div>
               <button className='bookBtn'>
                <Link to="/add">Add New</Link>
                </button>
        </div>
    );
}
