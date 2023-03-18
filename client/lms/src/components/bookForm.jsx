import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BookForm() {
    const [bookName,setBookName] = useState('');
    const [authorName,setAuthorName] = useState('');
    const [genre,setGenre] = useState('Fiction');
    const navigate = useNavigate();
 
    const submitForm = (event) => {
        event.preventDefault(); // prevent the form from reloading the page
        console.log(bookName);
        console.log(authorName);
        console.log(genre);
        const url = "http://localhost:3001/addBooks";
        axios.post(url, {
            bookName: bookName,
            authorName: authorName,
            genre: genre
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
        navigate("/");
    }

    return(
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>
            <h1>ADD A BOOK</h1>
            <form onSubmit={submitForm}>
                <label>Book Name: </label>
                <input type="text" placeholder="Enter Book Name" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                <br />
                <br />
                <label htmlFor="">Auhtor Name: </label>
                <input type="text" placeholder="Enter Author Name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                <br />
                <br />
                <label htmlFor="">Genre: </label>
                <select name="" id="" value={genre} onChange={(e) => setGenre(e.target.value)} >
                    <option value="Fiction">Fiction</option>
                    <option value="Non-fiction">Non Fiction</option>
                    <option value="Novel">Novel</option>
                </select>
                <br />
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default BookForm;
