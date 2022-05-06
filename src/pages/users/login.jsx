import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Login() {

    const [toggle, setToggle] = useState()


    return(
        <div className="body my-5">
            <br />
            <h1 className="mx-3 mt-5">Inicio de Sesión</h1>
            <div className="mb-3 container">
            <form action ="http://localhost:8085/login" method="POST">
                <div className="form-floating col-6 pb-2">
                    <input type="text" className="form-control form-control-lg" name="username" id="floatingUsername" placeholder="Usuario:" required/>
                    <label htmlFor="floatingUsername" className="form-label">Usuario: </label>
                </div>
                <div className="form-floating col-6 pb-2">
                    <input type="password" className="form-control form-control-lg" name="password" id="floatingPassword" placeholder="Contraseña:" required/>
                    <label htmlFor="floatingPassword" className="form-label">Contraseña: </label>
                    <span className="pass-toggle" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" id="eye-toggle" viewBox="0 0 16 16" onClick={console.log('./.')}>
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                    </span>
                </div>
                 <button className="btn btn-success m-3">Iniciar Sesión</button>
            </form>
            <Link to={'/forgot'} className="btn btn-warning">Olvidé mi contraseña</Link>
          </div>
        </div>
    )
}