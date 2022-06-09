import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Homepage from "./components/Homepage"
import Login from "./components/Login/Login"
import ForgottenPassword from "./components/Login/ForgottenPassword"
import Help from "./components/Footer/Help"
import AboutUs from "./components/Footer/AboutUs"
import Mentions from "./components/Footer/Mentions"
import ChoiceScope from "./components/Scope/ChoiceScope";
import GestionCookies from "./components/Footer/GestionCookies";
import Agenda from "./components/Agenda/agenda";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/help"} element={<Help/>}/>
                <Route path={"/aboutUs"} element={<AboutUs/>}/>
                <Route path={"/cookies"} element={<GestionCookies/>}/>
                <Route path={"/mentions"} element={<Mentions/>}/>
                <Route path={"/forgottenPassword"} element={<ForgottenPassword/>}/>
                <Route path={"/choiceScope"} element={<ChoiceScope/>}/>
                <Route path={"/agenda"} element={<Agenda/>}/>
            </Routes>
            <footer>
                <div>
                    <a href={"/help"}>Aide</a>
                    <a href={"/aboutUs"}>A propos</a>
                    <a href={"/cookies"}>Gestion des cookies</a>
                    <a href={"/mentions"}>Mentions légales</a>
                </div>
            </footer>
        </div>
    )
}
