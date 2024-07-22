import React from "react";
import "../index.css"

export default function MessageBar (props) {

    const [textMessage, setTextMessage] = React.useState("")

    function handleTextMessage (e) {
        setTextMessage( () => e.target.value )
    }

    return (
        <div className="MessageBar">
            <input className="MessageInput" 
                placeholder="Message..."
                value={textMessage}
                onChange={handleTextMessage}
            >
            </input>
            <button className="MessageButton" onClick={() => { textMessage && props.send(textMessage); setTextMessage("") }}>↑</button>
        </div>
    )
}