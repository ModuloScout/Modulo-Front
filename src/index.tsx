import React from 'react'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.scss'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

const root = createRoot(document.getElementById('root') as Element)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)

