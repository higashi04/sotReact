import React from "react";
import { Link, Outlet } from "react-router-dom";
import AnchorBtn from "../../components/anchor-btn/anchor-btn";
import Title from "../../components/title/title";

// const List = (props) => {
    
// }

const UsersHome = () =>{
    return(
        <div className="mt-5">
            <br />
            <Title className="mt-5" title='Usuarios' />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <AnchorBtn name={'Listado'} url='#' />
                    </div>
                    <div className="col-4">
                        <AnchorBtn name={'Crear Usuario'} url='new' />
                    </div>
                    <div className="col-4">
                        
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default UsersHome;