import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div>
            <Chat
            name="Mark"
            message="Yo"
            timeStamp="40 sec ago"
            //profilePic="..."
            />
        </div>
    )
}

export default Chats
