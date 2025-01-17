import appSlice from "./Reducers/appSlice"
import searchSlice from "./Reducers/searchSlice"
import { configureStore } from '@reduxjs/toolkit'
import videoData from '../store/Reducers/vidioData'
const store = configureStore({
    reducer: {
        app: appSlice,
        videoData: videoData,
        search: searchSlice
    }
})

export default store