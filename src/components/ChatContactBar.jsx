import React from "react";
import IconButton from "./ui/IconButton";
import search from "../assets/svgs/search.svg"
import infobar from "../assets/svgs/infobar.svg"
import "../index.css"

export default function ChatContactBar (props) {

    const [ activeSearch, setActiveSearch ] = React.useState(false)

    function SearchBar () {
        setActiveSearch( p => !p )
    }

    return (
        <div className="ChatContactBar">
            <div className="ChatContactBarProfile">
                <button className="ProfileButton">
                    <img className="ProfileImg" src={props.foto} />
                </button>
                <h3>{props.contactname}</h3>
            </div>
            <div className="ChatContactBarOptions">
                <IconButton img={search} Click={SearchBar} />
                { activeSearch && 
                <input className="SearchMessageInput" 
                placeholder="Search Message..."
                value={props.searchValue}
                onChange={props.searchingMethod} >
                </input> }
                <IconButton img={infobar} Click={props.displayBar} />
            </div>
        </div>
    )
}