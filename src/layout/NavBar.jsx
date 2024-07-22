import React from "react"
import IconButton from "../components/ui/IconButton"
import chat from "../assets/svgs/chat.svg"
import settings from "../assets/svgs/settings.svg"
import groups from "../assets/svgs/groups.svg"
import "../index.css"


export default function NavBar (props) {

    return (
        <nav className="NavBar">
            <div className="ButtonWrapper">
                <IconButton img={chat} />
                <IconButton img={settings} />
            </div>
            <div>
                <button className="AddButton">+</button>
                <img className="ProfileImg" src={props.pfp} style={{boxShadow: "0 0 16px #00ffa680"}} />
            </div>
        </nav>
    )
}