import React from "react"
import Title from "../../components/title/title"
import { Link } from "react-router-dom"
import './inv.css'

const InvHome = ()=> {
    return(
        <div className="body page py-5 my-5">
            <Title title='Almacén'/>
            <div className="container my-5">
            <div className="row">
                <div className="col-4">
                    <Link className="btn btn-primary" to='/inv/new' >
                        Nuevo
                    </Link>
                </div>
                <div className="col-4">
                <Link className="btn btn-primary" to='/inv/show' >
                        Consultar
                    </Link>
                </div>
                <div className="col-4">
                <Link className="btn btn-primary" to='/inv/list' >
                        Listado
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default InvHome