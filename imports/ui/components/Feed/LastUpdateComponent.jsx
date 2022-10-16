import React, { useEffect } from "react";
import { FeedCollection } from '../../../api/feed';
import { useTracker } from 'meteor/react-meteor-data';

export default function LastUpdate(props){
    const feed = useTracker(() => FeedCollection.find({}).fetch());
    const lastResult = feed.slice(-1)[0];

    var resultDate = lastResult ? lastResult.time : "...";

    if (!resultDate)
        return;
    
    resultDate = new Date(resultDate);

    const day = resultDate.getDate();
    const month = resultDate.getMonth() + 1;
    const year = resultDate.getFullYear();
    const hour = resultDate.getHours() + ":" + resultDate.getMinutes() + ":" + resultDate.getSeconds();
    const allDate = lastResult ? `${day}/${month}/${year} às ${hour}` : "...";

    return(
        <p id="last-update" className="text-white mt-4">
            Última atualização: {allDate ? allDate : "..."}
        </p>
    );
}