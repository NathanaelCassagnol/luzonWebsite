import React, { useState } from 'react';
import "./Login_Form.css";

function Login_Form({ Login, error }) {

    const [details, setDetails] = useState({name:"", email:"",password:""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    const renderErrorMessage = (name) =>
        name === error.name && (
            <div className="error">{error.message}</div>
     );

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
            </div>
            <div className="input-container">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name } />
                {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                {renderErrorMessage("pass")}
            </div>
            <input type="submit" value="LOGIN"/>
        </form>
    )
}

export default Login_Form