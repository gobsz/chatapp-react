import React from "react";
import "../index.css"

export default function ContactChats (props) {

    return (
        <div className="Chats">
            {...props.contacts}
        </div>
    )
}