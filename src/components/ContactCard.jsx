import React from "react"
import "../index.css"

export default function ContactCard (props) {

    return (
        <div className="ContactCard" onClick={ () => props.changeChat(props.id) }>
            <img className="ProfileImg" src={props.icon} />
            <div className="DisplayInfo">
                <div className="ContactName">
                    {props.name}
                    <div className="NewMessage"></div>
                </div>
                <div className="PreviewChatText">{/*DISPLAY CERTAIN NUMBER OF CHARACTERS*/}
                Lorem ipsum dolor sit amet consectetur.</div>
            </div>
        </div>
    )
}