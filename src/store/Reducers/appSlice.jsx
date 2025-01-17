
import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        data: [],
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        Details: (state, action) => {
            state.data.push(action.payload)
        }
    }
})


export const { toggleMenu, Details } = appSlice.actions
export default appSlice.reducer