import React from "react";
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
                                <input type="text" className="form-control form-control-lg" name="username" id="floatingUsername" placeholder="Usuario:" required />
                                <label htmlFor="floatingUsername" className="form-label">Usuario: </label>
                            </div>
                            <div className="form-floating col-6 pb-2">
                                <input type="text" className="form-control form-control-lg" name="firstName" id="floatingFirstName" placeholder="Nombre(s):" required />
                                <label htmlFor="floatingFirstName" className="form-label">Nombre(s): </label>
                            </div>
                            <div className="form-floating col-6 pb-2">
                                <input type="text" className="form-control form-control-lg" name="lastName" id="floatingLastName" placeholder="Apellido:" required />
                                <label htmlFor="floatingLastName" className="form-label">Apellido: </label>
                            </div>
                            <div className="form-floating col-6 pb-2">
                                <input type="email" className="form-control form-control-lg" name="email" id="floatingInput" placeholder="Email: " required />
                                <label htmlFor="floatingInput" className="form-label">Email: </label>
                            </div>
                            <div className="form-floating col-6 pb-2">
                                <input type="password" className="form-control form-control-lg" name="password" autoComplete="off" id="floatingPassword" placeholder="Contraseña:" required />
                                <label htmlFor="floatingPassword" className="form-label">Contraseña: </label> 
                                <span className="pass-toggle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" id="eye-toggle" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                    </svg>
                                </span>
                            </div>
                            <div className="form-floating col-6 pb-2">
                                <select className="form-select form-select-sm mb-3" aria-label=".form-select-lg example" id="floatingPuesto" name="puesto">
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