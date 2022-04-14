import React from "react"
import { Link } from "react-router-dom"

const HumanResourcesHome = ()=> {
    return(
        <div className="body py-5">
            <Link className="btn btn-primary" to='/users' >
                Usuarios
            </Link>
        </div>
    )
}

export default HumanResourcesHome;