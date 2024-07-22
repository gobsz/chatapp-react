import React from "react";
import "../index.css"

export default function ChatContainer (props) {

    const MessageHistory = [
        <div className="UserMessage">
                <div className="UserMessageContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                <div className="MessageTime">12:50</div>
        </div>,
        <div className="UserMessage">
                <div className="UserMessageContent">Roberto Carlos</div>
                <div className="MessageTime">12:51</div>
        </div>,
        <div className="ContactMessage">
                <div className="ContactMessageContent">Lorem ipsum dolor sit amet consectetur.</div>
                <div className="MessageTime">12:52</div>
        </div>,
    ]
    
    function sendMessage (msg) {
        const atTime = new Date();
        const atHours = atTime.getHours().toString().padStart(2, 0);
        const atMinutes = atTime.getMinutes().toString().padStart(2, 0);
    
        MessageHistory.push(
            <div className="UserMessage">
                <div className="UserMessageContent">{msg}</div>
                <div className="MessageTime">{`${atHours}:${atMinutes}`}</div>
            </div>,
        )
    }
    
    return (
        <div className="ChatContainer">
            {...MessageHistory}
        </div>
    )
}