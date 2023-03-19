import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Booklist(){
    const [booklist,setBooklist] = useState([]);
    const [searchParams, setSearchParams] = useState('');

    const GetBooklist = () =>{
        const url = "http://localhost:3001/booklist";
        axios.get(url).then((response) => {
            console.log(response.data);
            setBooklist(response.data);
        })
    }

    useEffect(() => {
        GetBooklist();
    },[]);

    const handleDelete = (id) => {
        const url = `http://localhost:3001/booklist/${id}`;
        const confirmationMessage = "Are you sure you want to delete this book?"
        if (window.confirm(confirmationMessage)) {
            axios.delete(url)
                .then(() => {
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
            }
    }

    const handleSearch = () => {
        const url = `http://localhost:3001/searchBook?query=${searchParams}`;
        axios.get(url).then((response) => {
            console.log(response.data);
            setBooklist(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        handleSearch();
    },[searchParams]);
    return(
        <div >           
            <h1>Book List</h1>
            <input type="text" value={searchParams}  onChange={(e) => setSearchParams(e.target.value)} placeholder="Search"/> 
            <table >
                <thead>
                    <tr>
                        <th>SL No.</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                {booklist.map((book) => (
                <tbody key={book.id}>
                    <tr >
                        <td>
                            {book.id}
                        </td>
                        <td>
                            {book.name}
                       </td>
                        <td>
                            {book.author}
                        </td>
                        <td>
                            {book.genre}
                        </td>
                        <td>
                            <button>Update</button>
                        </td>
                        <td>
                            <button onClick={()=>handleDelete(book.id)}>Delete</button>
                        </td>
                    </tr>
                </tbody> 
                ))}
            </table>
            <Link to="/bookform">
                <button>ADD BOOK</button>
            </Link>
        </div>
    )
}
export default Booklist;