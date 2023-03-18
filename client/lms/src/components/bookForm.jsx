import axios from "axios";
import { useState } from "react";

function BookForm() {
    const [bookName,setBookName] = useState('');
    const [authorName,setAuthorName] = useState('');
    const [genre,setGenre] = useState('');
    // const [booklist,setBooklist] = useState([]);

    const submitForm = () => {
        console.log(bookName);
        console.log(authorName);
        console.log(genre);
        const url = "http://localhost:3001/addBooks";
        axios.post(url, {
            bookName : bookName,
            authorName : authorName,
            genre : genre
        })
    }

    return(
        <div>
            <h1>ADD A BOOK</h1>
            <form action="">
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
                    <option value="">Fiction</option>
                    <option value="">Non Fiction</option>
                    <option value="">Novel</option>
                </select>
                <br />
                <br />
                <button type="submit" onClick={submitForm}>Add</button>
            </form>
        </div>
    )
}
export default BookForm;



