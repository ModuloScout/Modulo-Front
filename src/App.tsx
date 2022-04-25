import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Homepage from "./components/Homepage"
import Login from "./components/Login/Login"
import ForgottenPassword from "./components/Login/ForgottenPassword"

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgottenPassword" element={<ForgottenPassword/>}/>
            </Routes>
            <footer>
                <a>Aide</a>
                <a>A propos</a>
                <a>Gestion des cookies</a>
                <a>Mentions légales</a>
            </footer>
        </div>
    )
}
