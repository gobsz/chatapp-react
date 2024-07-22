import React from "react";
import search from "../assets/svgs/search.svg"

export default function SearchBar (props) {
    
    const [contactSearch, setContactSearch] = React.useState("")

    function handleSearch (event) {
        setContactSearch( () => event.target.value )
        props.find(contactSearch)
    }

    return (
        <div className="SearchBar">
            <img className="IconImg" src={search} />
            <input className="SearchInput" 
                placeholder="Search..." 
                value={contactSearch}
                onChange={handleSearch}
            >
            </input>
        </div>
    )
}