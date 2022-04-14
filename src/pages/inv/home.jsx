import React from "react"
import Title from "../../components/title/title"
import { Link } from "react-router-dom"

const InvHome = ()=> {
    return(
        <div className="body py-5">
            <Title title='Almacén'/>
            <div className="container my-5">
            <div className="row">
                <div className="col-6">
                    <Link className="btn btn-primary" to='/inv/new' >
                        Nuevo
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default InvHome