import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';



export default function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")

    function handleSubmit() {
        setFirstName('')
        setEmail('');
        setLastName('');
        setPassword('');

        console.log("hey i am")
        Axios.post('http://localhost:3001/register', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password

        }).then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>

            <h1>Sign up </h1>
            <div>
                <label>FirstName:</label><br />
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div>
                <label>LastName:</label><br />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
                <label>Email:</label><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label>Password:</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div><br />

            <button onClick={handleSubmit}>Register</button>
            <br />
            <Link to='/login'>Already have an account</Link>

        </div>

    )
}
