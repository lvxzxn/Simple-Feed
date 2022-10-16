import React from 'react';
import {useTracker} from "meteor/react-meteor-data";
import { FeedCollection } from '../../../api/feed';
import Message from './MessageComponent';

export const GetFeed = () => {
    const feed = useTracker(() => FeedCollection.find({}).fetch());
    return (
        <div>
            {feed.map(m => <Message username={m.user} message={m.message}/>)}
        </div>
    );
};