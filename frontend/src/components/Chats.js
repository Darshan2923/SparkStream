import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Chats() {
    const [chats, SetChats] = useState([])
    const fetchChats = async () => {
        const { data } = await axios.get('/api/chat');

        SetChats(data);
    }

    useEffect(() => {
        fetchChats();
    }, []);
    return (
        <div>
            {chats.map((e) => (
                <div key={e._id}>{e.chatName}</div>
            ))}
        </div>
    )
}

export default Chats