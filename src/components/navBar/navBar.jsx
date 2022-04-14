import React from "react";
import logo from '../../assets/272707556_231916139148938_3564323865832014711_n-removebg-preview.png'
import './navBar.css'

import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
                <div className="container-fluid">
                    <Link className="navbar-brand stupidAnchor" to="/"> <img src={logo} className='logo' alt="" /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <span className="nav-link">text</span>
                            <span className="nav-link">text</span>
                            <span className="nav-link">text</span>
                            <span className="nav-link">text</span>
                        </div>
                        <div className="ms-auto navbar-nav">
                            lorem
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar