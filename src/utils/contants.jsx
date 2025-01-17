const GOOGLE_API_KEY = "AIzaSyB7cxpiQT9xxp-BGWwrP6_7dSFinGU_k7c"
export const YOUTUBE_VIDIOS_API = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&key=" + GOOGLE_API_KEY
export const COMMENT_URL = "https://www.googleapis.com/youtube/v3/commentThreads?key=" + GOOGLE_API_KEY + "&textFormat=plainText&part=snippet&videoId="
export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${GOOGLE_API_KEY}&q=`;


import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
export const buttonData = [
    {
        id: 1,
        icon: <BiLike />
    },
    {
        id: 2,
        icon: <BiDislike />,
    },
    {
        id: 3,
        icon: < TiArrowForwardOutline />,
    },
    {
        id: 4,
        icon: <LiaDownloadSolid />,
    },
    {
        id: 5,
        icon: < HiOutlineDotsHorizontal />
    }

]
export const categories = [
    { id: 1, icon: '🔥', name: 'Trending' },
    { id: 2, icon: '🛒', name: 'Shopping' },
    { id: 3, icon: '🎵', name: 'Music' },
    { id: 4, icon: '🎬', name: 'Films' },
    { id: 5, icon: '📺', name: 'Live' },
    { id: 6, icon: '🎮', name: 'Gaming' },
    { id: 7, icon: '📰', name: 'News' },
    { id: 8, icon: '⚽', name: 'Sport' },
    { id: 9, icon: '📚', name: 'Courses' },
    { id: 10, icon: '💄', name: 'Fashion & beauty' },
    { id: 11, icon: '🎙️', name: 'Podcasts' }
];