import appSlice from "./Reducers/appSlice"
import { configureStore } from '@reduxjs/toolkit'
import videoData from '../store/Reducers/vidioData'
const store = configureStore({
    reducer: {
        app: appSlice,
        videoData: videoData
    }
})

export default store