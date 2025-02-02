import React from "react";
const VidioCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { thumbnails, title, channelTitle } = snippet || {};
  const { viewCount } = statistics || {};



  return (
    <div className=" w-full bg-red-600 md:h-96 py-8">
      <img className="rounded w-full" src={thumbnails?.medium?.url} loading="lazy" alt="" />
      <ul>
        <li className="py-3 font-bold ">{title}</li>
        <li className="pb-2 font-medium">{channelTitle}</li>
        <li>{viewCount}Views</li>
      </ul>
    </div>
  );
};

export default VidioCard;
