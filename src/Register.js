import React from "react";
import {useParams} from "react-router-dom";

function Register() {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const name = params.get('name');

    return (<div>
        <h1>Register</h1>
        <form>
            <p>Register with {email}</p>
            <p>Register with {name}</p>
            <input type="text" placeholder="Name" value={name}/>
            <input type="text" placeholder="Email" value={email}/>
        </form>
    </div>);
}

export default Register;