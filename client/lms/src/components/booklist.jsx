import axios from 'axios';
import { useEffect, useState } from 'react';
function Booklist(){
    const [booklist,setBooklist] = useState([]);

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
    
    return(
        <div>
            <h1>Book List</h1>
            <table>
                <tr>
                    <th>SL No.</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Genre</th>
                </tr>
                {booklist.map((book) => (
                    <div key={book.id}>
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
                    </div>
                ))}
            </table>
        </div>
    )
}
export default Booklist;