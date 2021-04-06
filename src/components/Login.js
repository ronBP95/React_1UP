import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
console.log(REACT_APP_SERVER_URL)

const Login = (props) => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let handleEmail = (e) => {
        setEmail(e.target.value);
    }

    let handlePassword = (e) => {
        setPassword(e.target.value);
    }


    let handleSubmit = (e) => {
        e.preventDefault();

        const userData = { email, password };

        axios.post(`${REACT_APP_SERVER_URL}/user/login`, userData)
        .then(response => {
            const { token } = response.data;
            // Save token to localStorage
            localStorage.setItem('jwtToken', token);
            // Set token to auth header
            setAuthToken(token);
            // Decode token to get the user data
            const decoded = jwt_decode(token);
            // Set current user
            props.nowCurrentUser(decoded);
            <Redirect to="/productivity" />
        })
        .catch(error => console.log(`Login error`, error));
    }

    if (props.user) {
    console.log(props.user)
    return <Redirect to="/productivity" user={props.user} />;
    }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                <img id="loginlogo"src="https://fontmeme.com/permalink/210406/6fddd43098a7b3558a467f0d4b63241c.png" alt="super-mario-font" border="0"></img>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={email} onChange={handleEmail} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;   