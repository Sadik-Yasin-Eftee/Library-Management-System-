import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SeacrhBook(){
    const [booklist,setBooklist] = useState([]);
    const [searchParams, setSearchParams] = useState('');

    const handleSearch = () => {
        // const url = `http://localhost:3001/booklist/search?params=${searchParams}`;
        const url = "";
        axios.get(url).then((response) => {
            console.log(response.data);
            setBooklist(response.data);
        })
    }

    useEffect(() => {
        handleSearch();
    },[searchParams]);

    return(
        <div >
            <h1>Book List</h1>
            <input type="text" value={searchParams}  onChange={(e) => setSearchParams(e.target.value)} placeholder="Search"/>
            <table>
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
                    <tr>
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
                    </tr>
                </tbody> 
                ))}
            </table>
        </div>
    )
}
export default SeacrhBook;
