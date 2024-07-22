import React from "react"
import "../index.css"

export default function InfoBar (props) {
     
    return (
        <div className="InfoBar">
            <img src={props.foto} className="InfoProfileIcon" />
            <h1>{props.contactname}</h1>
            <h4>{props.phone}</h4>
        </div>
    )
}