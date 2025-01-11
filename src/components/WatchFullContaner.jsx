import React from "react";
import { useParams } from "react-router-dom";


const WatchFullContaner = () => {
    const search = useParams()
    return (
        <div>
            <iframe
                width="1000"
                height="500"
                src={"https://www.youtube.com/embed/" + search.id}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default WatchFullContaner;
