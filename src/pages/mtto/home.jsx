import React from "react"
import Title from "../../components/title/title"
import { Link } from "react-router-dom"

const MttoHome = ()=> {
    return(
        <div className="body py-5">
            <Title title='Mantenimiento Preventivo y Correctivo'/>
            <div className="container my-5">
            <div className="row">
                <div className="col-6">
                    <Link className="btn btn-primary" to='/buses' >
                        Camiones
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MttoHome