import React from "react";
//Pages
import LoginForm from "../components/LoginForm";

function Login({ LoginFunction }) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm  LoginFunction={LoginFunction}/>
        </div>
    );
}

export default Login;