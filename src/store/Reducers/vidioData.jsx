import { createSlice } from '@reduxjs/toolkit'

const videoData = createSlice({
    name: "vidio",
    initialState: {
        dataOfVidio: []
    },
    reducers: {
        vidioUpdate: (state, action) => {
            state.dataOfVidio = action.payload;
        }
    }
})


export const { vidioUpdate } = videoData.actions

export default videoData.reducer