import React from "react";

const FlashError = props => {
    return(
            <div className="alert alert-danger d-flex align-items-center mx-5" role="alert">
                {props.err}
            </div> 
    )
}

const FlashSuccess = props => {
    return(
        
        <div className="alert alert-success alert-dismissible fade show mx-5" role="alert">
            {props.success}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}


export  {FlashError, FlashSuccess}