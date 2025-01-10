import appSlice from "./Reducers/appSlice"
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
    reducer: {
        app: appSlice,
    }
})

export default store