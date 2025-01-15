import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import Comment from "./Comment";
import CommentData from "./CommentData";



const WatchFullContaner = () => {
    const search = useParams()
    const data = useSelector((state) => state.app.data)

    return (
        <div className="mt-1">
            <div className="flex">
                <div className="">
                    <div className=" ">
                        <iframe
                            width="1000"
                            height="550"
                            src={"https://www.youtube.com/embed/" + search.id}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>

            </div>
            <CommentData />
        </div>
    );
};

export default WatchFullContaner;
