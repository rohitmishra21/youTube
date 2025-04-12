import React from "react";
import { useLocation, useParams } from "react-router-dom";
import CommentData from "./CommentData";
import { buttonData } from "../utils/contants";
import VidioContaner from "./VidioContaner";
import ScrollToTop from "../utils/Scroll";


const WatchFullContaner = () => {

    const search = useParams()
    const location = useLocation()
    const info = location.state
    const { snippet, statistics } = info || {};
    const { title, channelTitle } = snippet || {};
    const { viewCount } = statistics || {};

    return (

        <div className="flex  gap-10">
            <ScrollToTop />
            <div className="mt-1  ">
                <div className="flex ">
                    <div className="md:w-[800px]">
                        <div className="relative  pb-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${search.id}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div>
                            <h1 className="md:text-2xl py-3 font-bold">{title}</h1>
                            <div className="flex justify-between items-center py-2">
                                <div className="flex">

                                    <div className="flex items-center gap-1">
                                        <h1 className="font-bold text-lg">{channelTitle}</h1>
                                        <h1 className="font-serif ml-7">{viewCount}</h1>
                                        <button className="text-white bg-black px-3 py-2 rounded-full ">Subscribe</button>
                                    </div>
                                </div>
                                <div className="text-2xl flex gap-2 items-center">
                                    {buttonData.map((data) => (
                                        <div key={data.id} className="bg-black cursor-pointer text-slate-100 flex px-4 py-2 gap-6 rounded-full">
                                            {data.icon}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <CommentData id={search.id} />
                </div>
                <div className="h-[100vh] block md:hidden w-full">
                    <VidioContaner />
                </div>
            </div >
            <div className="h-[100vh] md:block hidden overflow-y-scroll">
                <VidioContaner />
            </div>
        </div>
    );
};

export default WatchFullContaner;
