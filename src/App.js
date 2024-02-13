import React from 'react';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Register from "./Register";
import Login from "./login";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <a href="/login">Login</a>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {<Route path={"/"} element={<Home/>}></Route>}
                    {<Route path={"/login"} element={<Login/>}></Route>}
                    {<Route path={"/register"} element={<Register/>}></Route>}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;