import React from 'react'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.scss'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./components/app/uuidStore";

const root = createRoot(document.getElementById('root') as Element)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
