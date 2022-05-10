import React, { useState, useContext } from "react";
import {UserContext} from '../../context/UserContext'
import { Link } from "react-router-dom";
import { FlashSuccess, FlashError } from "../../components/flash/Flash";

export default function Login() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userContext, setUserContext] = useContext(UserContext)
    const [passwordShown, setPasswordShown] = useState(false)

    const eyeToggle = () => {
      setPasswordShown(!passwordShown)
    }

    const formSubmitHandler = e => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        const errMessage = 'Se generó un error, favor de volver a intentar o solicitar apoyo.'

        fetch("http://localhost:8085/users/login", {
            method: 'POST',
            credentials: 'include',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username: username, password: password })
        })
        .then(async res => {
            setIsSubmitting(false)
            if (!res.ok) {
                switch (res.status) {
                    case 400:
                        setError('Favor de llenar los campos de la manera correcta')
                        break;
                    case 401:
                        setError('Su usuario o su contraseña, o ambos, están incorrectos.')
                        break;
                    default:
                        setError(errMessage)
                        break;
                }
            } else {
                const data = await res.json()
                setUserContext(oldValues => {
                    return {...oldValues, token: data.token}
                })
            }
        }).catch(
            error => {
                setIsSubmitting(false)
                setError(errMessage)
            }
        )
    }


    return(
        <div className="body my-5">
            <br />
            <h1 className="mx-3 mt-5">Inicio de Sesión</h1>
            {error && <FlashError err={error}/> }
            <div className="mb-3 container">
            <form onSubmit={formSubmitHandler}>
                <div className="form-floating col-6 pb-2">
                    <input type="text" className="form-control form-control-lg" name="username" id="floatingUsername" placeholder="Usuario:" value={username} onChange={e => setUsername(e.target.value)} required/>
                    <label htmlFor="floatingUsername" className="form-label">Usuario: </label>
                </div>
                <div className="form-floating col-6 pb-2">
                    <input type={passwordShown ? "text" : "password"} className="form-control form-control-lg" name="password" autoComplete="off" id="floatingPassword" placeholder="Contraseña:" required value={password} onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword" className="form-label">Contraseña: </label> 
                    <span className="pass-toggle" onClick={eyeToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={passwordShown ? "bi bi-eye-slash-fill" : "bi bi-eye-fill" } id="eye-toggle" viewBox="0 0 16 16">
                            <path d={ passwordShown ?  "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" :"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" }/>
                            <path d={ passwordShown ? "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" : "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"  }/>
                        </svg>
                    </span>
                </div>
                 <button 
                    className="btn btn-success m-3"
                    intent="primary"
                    disabled={isSubmitting}
                 > {`${isSubmitting ? 'Espere' : 'Iniciar Sesión'}`} </button>
            </form>
            <Link to={"/forgot"} className="btn btn-warning">Olvidé mi contraseña</Link>
          </div>
        </div>
    )
}