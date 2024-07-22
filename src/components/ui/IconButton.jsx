import React from "react";
import "../../index.css"

export default function IconButton (props) {

    return (
        <button className="IconButton">
            <img className="IconImg" src={props.img} onClick={props.Click} />
        </button>
    )
}