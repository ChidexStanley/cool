import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    setEmail('');
    setPassword('');

    Axios.post('http://localhost:3001/signIn', {
      email: email,
      password: password,

    }).then(function (response) {
      console.log(response.data);
    })
      .catch(function (error) {
        console.log(error);
      })

  }

  return (
    <div>

      <h1>Sign in</h1>

      <div>
        <label>Enter your email:</label><br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label>Enter your password:</label><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div> <br />

      <button onClick={handleSignIn}>Login  </button>

      <br />
      <Link to='/'> create an account</Link>

    </div>
  )
}
