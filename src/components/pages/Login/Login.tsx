import React from 'react'
import LoginForm from '../../organisms/Form/LoginForm'
import style from './Login.module.scss'

export default function Login() {
    return (<div className={style.login}>
        <h1>Login</h1>
        <LoginForm/>
    </div>)
}
