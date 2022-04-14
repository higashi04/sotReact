import React from "react";
import { Link } from "react-router-dom";

class AnchorBtn extends React.Component {
    render(){
        return(
            <Link className="btn btn-primary" to={this.props.url}> {this.props.name} </Link>
        )
    }
}

export default AnchorBtn