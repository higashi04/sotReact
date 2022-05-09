import React from "react";

const NoMatch = () => {
    return (
        <div className="my-5">
            <br className="mt-5" />
            <br />
            <div className="row my-3">
                <div className="col-6 offset-3">
                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">Error 404</h4>
                        <p>Sitio No Existe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoMatch;