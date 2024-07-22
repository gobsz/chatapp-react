import { useState } from "react";
import SideBar from "./SideBar";
import ChatContactBar from "../components/ChatContactBar";
import MessageBar from "../components/MessageBar";
import InfoBar from "./InfoBar";
import icone from "../assets/icone.jpg"
import ICON2 from "../assets/ICON2.jpeg"
import "../index.css"

export default function MainContent () {

    const Contacts = [
        {
            id: 0,
            name: "Me, Myself and I",
            foto: ICON2,
            phoneNum: "+11 97739994",
            messagehistory: [
                <div className="UserMessage">
                        <div className="UserMessageContent">money</div>
                        <div className="MessageTime">00:27</div>
                </div>,
                <div className="UserMessage">
                        <div className="UserMessageContent">007</div>
                        <div className="MessageTime">00:51</div>
                </div>,
                <div className="UserMessage">
                        <div className="UserMessageContent">EU só eu</div>
                        <div className="MessageTime">01:07</div>
                </div>,
            ]
        },
        {
            id: 1,
            name: "Foo Bar",
            foto: icone,
            phoneNum: "+11 958565753",
            messagehistory: [
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
        },
        {
            id: 2,
            name: "Boo Far",
            foto: icone,
            phoneNum: "+11 912131415",
            messagehistory: [
                <div className="UserMessage">
                        <div className="UserMessageContent">Eu tentei...</div>
                        <div className="MessageTime">19:32</div>
                </div>,
                <div className="ContactMessage">
                        <div className="ContactMessageContent">O que?</div>
                        <div className="MessageTime">19:44</div>
                </div>,
                <div className="UserMessage">
                        <div className="UserMessageContent">Não ser mlk com voce</div>
                        <div className="MessageTime">20:17</div>
                </div>,
            ]
        },
        {
            id: 3,
            name: "Zoo Car",
            foto: icone,
            phoneNum: "+11 999887654",
            messagehistory: [
                <div className="ContactMessage">
                        <div className="ContactMessageContent">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="MessageTime">12:52</div>
                </div>,
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
        },
        {
            id: 4,
            name: "Goo Zar",
            foto: icone,
            phoneNum: "+11 908761337",
            messagehistory: [
                <div className="UserMessage">
                        <div className="UserMessageContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="MessageTime">12:50</div>
                </div>,
                <div className="ContactMessage">
                    <div className="ContactMessageContent">Lorem ipsum dolor sit amet consectetur.</div>
                    <div className="MessageTime">12:52</div>
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
        }
    ]

    const [ ctt, changeCtt ] = useState(Contacts[0])

    const [ displayInfoBar, setDisplayInfoBar ] = useState(false)

    const [chatMessages, setChatMessages] = useState(Contacts[0].messagehistory)

    const [ searchForMessage, setSearchForMessage ] = useState("")

    function sendMessage (msg) {
        const atTime = new Date();
        const atHours = atTime.getHours().toString().padStart(2, 0);
        const atMinutes = atTime.getMinutes().toString().padStart(2, 0);
        
        const newMessage = (
            <div className="UserMessage">
                <div className="UserMessageContent">{msg}</div>
                <div className="MessageTime">{`${atHours}:${atMinutes}`}</div>
            </div>
        )
        
        setChatMessages(p => [...p,newMessage] )
    }

    function SearchingForMessage (e) {
        setSearchForMessage(e.target.value)
        const srch = (e.target.value).toLowerCase()
        const remainMH = ctt.messagehistory.map( obj => {
            const trgt = (obj.props.children[0].props.children).toLowerCase()
            return (
                trgt.includes(srch) ? obj : ""
            )
        } )
        setChatMessages(remainMH)
    }

    function displayContactInfo () {
        setDisplayInfoBar( p => !p )
    }

    function changeContactChat (id) {
        setChatMessages(Contacts[id].messagehistory)
        changeCtt(Contacts[id])
    }

    return (
        <>
            <SideBar conptactlist={Contacts} changeChat={changeContactChat} />
            <main className="Main">
                <ChatContactBar 
                searchValue={searchForMessage} 
                searchingMethod={SearchingForMessage} 
                displayBar={displayContactInfo}
                foto={ctt.foto}
                contactname={ctt.name} />
                <div className="ChatContainer">
                    {...chatMessages}
                </div>
                <MessageBar send={sendMessage} />
            </main>
            { displayInfoBar && <InfoBar 
                                foto={ctt.foto} 
                                contactname={ctt.name}
                                phone={ctt.phoneNum}
                                /> }
        </>
    )
}