import React from "react"
import Title from "../../components/title/title"
import { Link } from "react-router-dom"

const MttoHome = ()=> {
    return(
        <div className="body page py-5 my-5">
            <Title title='Mantenimiento Correctivo y Preventivo'/>
            <div className="container my-5">
            <div className="row">
                <div className="col-4">
                    <Link className="btn btn-primary" to='/buses' >
                        Camiones
                    </Link>
                </div>
                <div className="col-4">
                    <Link className="btn btn-primary" to='/mtto/repairs'>
                        Nuevo Vale de Refacciones
                    </Link>
                </div>
                <div className="col-4">
                    <Link className="btn btn-primary" to='/mtto/repairs/show'>
                        Consultar Vales de Refacciones
                    </Link>
                </div>
                <div className="col-4"></div>
            </div>
            </div>
        </div>
    )
}

export default MttoHome