import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/title/title";

const BusesHome = () => {
    return(
        <div className="mt-5">
            <br />
            <Title className='mt-5' title='Unidades'/>
            <div className="container my-3">
                <div className="row my-3">
                    <div className="col-6">
                        <Link className="btn btn-primary m-3 fontIncrease" to={"/buses/new"}>Agregar Camión</Link>
                    </div>
                    <div className="col-6">
                        <Link className="btn btn-primary m-3 fontIncrease" to={"/buses/show"}>Lista de Camiones</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link className="btn btn-primary col-3 m-3 fontIncrease" to={"/buses/audit/show"}>Consulta Checklists de Unidad</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusesHome;