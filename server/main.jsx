import {FeedCollection} from "../imports/api/feed";

export const insertFeed = (userName, feedText) => {
    FeedCollection.insert({
        user: userName,
        message: feedText
    })
};