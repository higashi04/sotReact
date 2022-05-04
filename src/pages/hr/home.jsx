import React from "react"
import Title from "../../components/title/title"
import { Link } from "react-router-dom"

const HumanResourcesHome = ()=> {
    return(
        <div className="body py-5 my-5">
            <Title title='Administración de Personal'/>
            <div className="container my-5">
            <div className="row">
                <div className="col-6">
                    <Link className="btn btn-primary" to='/users' >
                        Usuarios
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HumanResourcesHome;