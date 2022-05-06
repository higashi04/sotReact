import React from "react";

export default function Forgot() {
    return(
        <div className="body mt-5">
            <br />
            <div className="container mt-5">
                <h2 className="mt*5">Proporcione su dirección de email:</h2>
                <form action="/forgot" method="post">
                    <div className="form-floating col-6 pb-2">
                        <input type="email" className="form-control form-control-lg" name="email" id="floatingInput" placeholder="Email: " required />
                        <label htmlFor="floatingInput" className="form-label">Email: </label>
                    </div>
                    <button className="btn btn-info">Mandar</button>
                </form>
            </div>
        </div>
    
    )
}