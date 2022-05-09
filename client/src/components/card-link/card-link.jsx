import React from "react"
import { Link } from "react-router-dom"

class CardLink extends React.Component {
    render() {
        return (
            <div className="container my-5">
                <div className="card mb-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> {this.props.departamento} </h5>
                                <p className="card-text">
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#${this.props.id}`} aria-expanded="false" aria-controls="collapse">
                                      Opciones
                                    </button>
                                </p>
                                <div className="collapse" id={this.props.id}>
                                    <div className="card card-body">
                                        <Link className="btn btn-primary" to={this.props.url}> {this.props.btnName} </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default CardLink