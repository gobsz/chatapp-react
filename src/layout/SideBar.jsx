import React from "react";
import SearchBar from "../components/SearchBar";
import ContactCard from "../components/ContactCard";
import "../index.css"

export default function SideBar (props) {

    const ContactDoc = props.contactlist
    
    const ContactCards = ContactDoc.map( obj => <ContactCard 
                                                icon={obj.foto} 
                                                name={obj.name} 
                                                id={obj.id}
                                                changeChat={ (id) => props.changeChat(id) }
                                                /> )
    
    const [ displayed, setDisplayed ] = React.useState(ContactCards)

    function findContact (chars) {
        const remaining = ContactDoc.map( obj => {
            let N = (obj.name).toLowerCase()
            return (
                N.includes(chars.toLowerCase()) ? obj : ""
            )
        } )
        setDisplayed(
            remaining.map( obj => obj ? <ContactCard icon={obj.foto} name={obj.name} /> : "" )
         )
    }


    return (
        <aside className="SideBar">
            <SearchBar find={findContact} />
            <div className="Chats">
                {...displayed}
            </div>
        </aside>
    )
}