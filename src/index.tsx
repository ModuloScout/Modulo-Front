import React from 'react'
import './global.module.scss'
import {createRoot, Root} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/pages/Login/Login'

const root: Root = createRoot(document.getElementById('root') as Element)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
