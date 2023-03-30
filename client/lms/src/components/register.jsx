import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register () {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPass,setConfirmPass] = useState('');
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        if (password !== confirmPass){
            return alert("Passwords do not match");
        }
        const url = "http://localhost:3001/register"; 
        
        axios.post(url,{
            name: name,
            email: email,
            password: password
        }).then(response => {
            alert("Account was created successfully");
            console.log(response);
            localStorage.setItem('token',response.data.token);
            navigate('/');
        }).catch(error =>{
            console.log(error);
            alert("Couldn't create account");
        });        
    }
    return(
        <div>
            <Link to='/'>
                <button>Sign In</button>
            </Link>
           <form onSubmit={handleForm}>
                <label>Name: </label>
                <input type="text" placeholder="Enter your name" value = {name} onChange={(e) => setName(e.target.value)}/>
                <br />
                <br />
                <label>Email: </label>
                <input type="email" placeholder="Enter your email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <br />
                <label>Password: </label>
                <input type="password" placeholder="Enter your password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <br />
                <label>Confirm Password: </label>
                <input type="password" placeholder="Confirm your password" value = {confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form> 
        </div>
    );
}
export default Register;