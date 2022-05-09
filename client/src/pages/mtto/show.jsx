import React from "react";
import logo from '../../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png'

const MttoShow = () => {
    return(
        <div className="container m-3" id="data">
            <div className="container">
                <div className="row my-3 text-muted header">
                   <div className="col-4">
                      TV-PRO-009
                   </div>
                   <div className="col-4">
                      EMISION 06-04-22  
                   </div>
                   <div className="col-4">
                      REVISION 06-04-22
                   </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="logo-form" src={logo} alt="logo"/>
                    </div>
                    <div className="col-4">
                        <h1 className="text-decoration-underline">Transporte Villarreal</h1>
                    </div>
                    <div className="col-4 fs-4">
                        Sistema Integral de Mantenimiento
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-6">
                        <span className="title">Plan:</span>  
                    </div>
                    <div className="col-6">
                        <span className="title">MarcaTC: </span> 
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-6">
                        <span className="title">Unidad: </span> 
                    </div>
                    <div className="col-6">
                        <span className="title">Modelo: </span>  
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-6">
                        <span className="title">Ubicación: </span> 
                    </div>
                    <div className="col-6">
                        <span className="title">AñoTC: </span> 
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-6">
                        <span className="title">Kilometraje: </span>  
                    </div>
                    <div className="col-6">
                        <span className="title">Serie:</span>  
                    </div>
                </div>
                <div className="row">
                        <div className="container form-data rutas-table">
                            <div className="row rutas-head">
                                <div className="col field">Inicio Programado: </div>
                                <div className="col field">Fin Programado</div>
                                <div className="col field">Planta</div>
                                <div className="col field">Tipo de Trabajo</div>
                                <div className="col field">Plan de Trabajo</div>
                                <div className="col field">Taller Asignado</div>
                                <div className="col"> Supervisor</div>
                            </div>
                            <div className="row rutas-row">
                                <div className="col field"></div>
                                <div className="col field"></div>
                                <div className="col field"></div>
                                <div className="col field"></div>
                                <div className="col field"></div>
                                <div className="col field"></div>
                                <div className="col"></div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default MttoShow