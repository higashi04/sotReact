import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BusShow = () => {
    const [unitName, setUnitName] = useState('')
    const url = 'http://localhost:8085/'

    const fetchBuses = () => {
        axios.get(`${url}buses`).then((res) => {
            console.log(res)
        })
    }
    useEffect(() => {
       
    })
    fetchBuses()
    return(
        <div></div>
    )
}

export default BusShow;