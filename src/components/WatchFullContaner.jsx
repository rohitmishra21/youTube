import React from "react";
import { useParams } from "react-router-dom";
import CommentData from "./CommentData";
import SideVidio from "./SideVidio";


const WatchFullContaner = () => {
    const search = useParams()

    
    return (
        <div className="mt-1">
            <div className="flex w-full ">
                <div className=" bg-blue-800">
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
                <div className="w-[30%]  bg-blue-200">
                    <SideVidio />
                </div>

            </div>
            <CommentData id={search.id} />
        </div>
    );
};

export default WatchFullContaner;
