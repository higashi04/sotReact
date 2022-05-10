import React, { useState } from "react";
import bg from '../../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png'


const Register = () => {
    const url = 'http://localhost:8085/'
    const puesto = [
        'Recepcionista', 
        'Programador', 
        'Gerente de Operaciones', 
        'Gerente de Mantenimiento', 
        'Contador', 
        'Auxiliar Contable', 
        'Ejecutivo de Mantenimiento y Almacen',
        'Ejecutivo de Almacen y Diesel', 
        'Supervisor de Coordinadores', 
        'Auxiliar de Operaciones',
        'Supervisor de Mantenimiento',
        'Jefe de Mecánicos',
        'Analista de Procesos',
        'Ejecutivo de Compras',
    ]
    

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [position, setPosition] = useState('')
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false)

    const eyeToggle = () => {
      setPasswordShown(!passwordShown)
    }

    return(
        <div className="mt-5">
            <br className="mt-5"/>
            <br className="mt-5"/>
            <h1 className="my-3 offset-md-4">Registro de Usuarios</h1>
            <div className="mb-3 container">
                <div className="row bg">
                    <div className="col-7 bg-img">
                        <img className="bg-logo" src={bg} alt="bus shaped logo" />
                    </div>
                    <div className="col-5 my-3">
                        <h4>Registre sus datos</h4>
                        <form action ={`${url}users/register`} method="POST" noValidate>
                            <div className="form-floating col-6 pb-2">
                                <input type="text" className="form-control form-control-lg" name="username" id="floatingUsername" placeholder="Usuario:" required value={username} onChange={ e => setUsername(e.target.value)} />
                                <label htmlFor="floatingUsername" className="form-label">Usuario: </label>
                            </div>
                            <div className="form-floating col-6 pb-2">
                                <input type="text" className="form-control form-control-lg" name="firstName" id="floatingFirstName" placeholder="Nombre(s):" required value={firstName} onChange={e => setFirstName(e.target.value)} />
                                <label htmlFor="floatingFirstName" className="form-label">Nombre(s): </label>
                            </div>
                            <div className="form-floating col-6 pb-2">
                                <input type="text" className="form-control form-control-lg" name="lastName" id="floatingLastName" placeholder="Apellido:" required value={lastName} onChange={e => setLastName(e.target.value)} />
                                <label htmlFor="floatingLastName" className="form-label">Apellido: </label>
                            </div>
                            <div className="form-floating col-6 pb-2">
                                <input type="email" className="form-control form-control-lg" name="email" id="floatingInput" placeholder="Email: " required value={email} onChange={e => setEmail(e.target.value)} />
                                <label htmlFor="floatingInput" className="form-label">Email: </label>
                            </div>
                            <div className="form-floating col-6 pb-2">
                                <input type={passwordShown ? "text" : "password"} className="form-control form-control-lg" name="password" autoComplete="off" id="floatingPassword" placeholder="Contraseña:" required value={password} onChange={e => setPassword(e.target.value)} />
                                <label htmlFor="floatingPassword" className="form-label">Contraseña: </label> 
                                <span className="pass-toggle" onClick={eyeToggle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={passwordShown ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"} id="eye-toggle" viewBox="0 0 16 16">
                                        <path d={passwordShown ? "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" : "m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"}/>
                                        <path d={ passwordShown ? "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" : "M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"}/>
                                    </svg>
                                </span>
                            </div>
                            <div className="form-floating col-6 pb-2">
                                <select className="form-select form-select-sm mb-3" aria-label=".form-select-lg example" id="floatingPuesto" name="puesto" value={position} onChange={e => setPosition(e.target.value)}>
                                    {puesto.map((i) => {
                                        return <option key={i} value={i}>{i}</option>
                                    })}
                                </select>
                                <label htmlFor="floatingPuesto" className="form-label">Puesto: </label>
                            </div>
                            <button className="btn btn-success m-3">Mandar</button>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Register;