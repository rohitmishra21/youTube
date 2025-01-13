import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'



const WatchFullContaner = () => {
    const search = useParams()
    const data = useSelector((state) => state.app.data)
    console.log(data);

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
                <div>

                </div>
            </div>
        </div>
    );
};

export default WatchFullContaner;
