import React, {FormEvent} from 'react'
import style from './LoginForm.module.scss'

export default function LoginForm() {
    return (<form onSubmit={(e: FormEvent) => {
        e.preventDefault()
        console.log(e)
    }}>
        <button className={style.submit} type={'submit'}>Connexion</button>
    </form>)
}
