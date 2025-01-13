const GOOGLE_API_KEY = "AIzaSyCFifkid9yDatpFRzUJweZVXJnM32A1WlA"
export const YOUTUBE_VIDIOS_API = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&key=" + GOOGLE_API_KEY

export const COMMENT_URL = "https://www.googleapis.com/youtube/v3/commentThreads?key=" + GOOGLE_API_KEY + "&textFormat=plainText&part=snippet&videoId="

export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

