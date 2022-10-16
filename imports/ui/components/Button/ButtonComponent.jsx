import '../../css/Main.css';

import { FeedCollection } from '../../../api/feed';
import React, { useEffect } from "react";

const insertFeed = (inputUsername, inputMessage) => {
    const dateToday = new Date();
    FeedCollection.insert({
        user: inputUsername,
        message: inputMessage,
        time: dateToday.toString(),
    })
};

export const Button = () => {
    var inputUsername, inputMessage;
    useEffect(() => {
        inputUsername = document.getElementById("username");
        inputMessage = document.getElementById("message");
    }, []);
    return(
        <div>
            <button className="btn-live-feed mt-3" onClick={_ => insertFeed(inputUsername.value, inputMessage.value)}>
                Post Message
            </button>
        </div>
    );
};