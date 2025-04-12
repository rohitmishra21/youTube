import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { LOGO_SVG } from "../utils/svg.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/Reducers/appSlice.jsx";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_SUGGESTION_API,
} from "../utils/contants.jsx";
import { vidioUpdate } from "../store/Reducers/vidioData.jsx";
import { setSearchQuery } from "../store/Reducers/searchSlice.jsx";


const Head = () => {
  const [searchlist, setSearchlist] = useState([]);
  const [focus, setFocus] = useState(false)
  const [cahcheData, setcahcheData] = useState({})
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search);

  function toggleHendler() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    const timer = setTimeout(searchHendler, 3000)
    return (() => {
      clearTimeout(timer)
    })
  }, [query]);

  async function searchHendler() {
    if (cahcheData[query]) {
      setSearchlist(cahcheData[query][1]); 
      return;
    }

    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + query);
    const json = await data.json();
    setSearchlist(json[1]);
    setcahcheData({ ...cahcheData, [query]: json });
  }
  console.log(cahcheData);


  async function fetchVideos(suggestion) {
    setSearchlist(searchlist.length > 0);
    const data = await fetch(YOUTUBE_SEARCH_API + suggestion);
    const json = await data.json();
    dispatch(vidioUpdate(json.items));

  }

  return (
    <>
      <div className="flex  items-center  shadow-sm px-2 shadow-gray-400 justify-between w-full   py-4 ">
        <div className="flex items-center gap-3">
          <FiMenu
            size={30}
            onClick={toggleHendler}
            className="cursor-pointer"
          />
          {LOGO_SVG}
        </div>
        <div className="flex items-center md:w-[70%]">
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            type="text"
            placeholder="Search"
            className="border-black px-5 border py-1 rounded-full w-[80%]"
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            value={query}
          />
          {focus && (
            <div className="absolute top-[53px] rounded w-full md:left-72  left-0 md:w-[52.5rem] py-4  z-20 bg-white">
              {searchlist.map((s, i) => (
                <ul key={i} className="">
                  <li
                    onClick={() => fetchVideos(s)}
                    className="text-lg px-5 py-2 shadow-sm cursor-pointer "

                  >
                    {s}
                  </li>
                </ul>
              ))}
            </div>
          )}

        </div>
        <div>
          <img
            className="w-10"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Head;
