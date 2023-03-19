import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UpdateBook() {
    const [bookName,setBookName] = useState('');
    const [authorName,setAuthorName] = useState('');
    const [genre,setGenre] = useState('');
    const navigate = useNavigate();

    const handleUpadte = () => {
        const url = "";
        axios.put(url,{
            bookName : bookName,
            authorName : authorName,
            genre : genre
        }).then(() => {
            navigate("/")
        }).catch(error => {
            console.log(error)
        })
    }
    return(
        <div>
            <Link to="/">
                <button>Back</button>
            </Link>  
            <h1>This is the Update page</h1> 
        </div>   
    )   
}

export default UpdateBook;