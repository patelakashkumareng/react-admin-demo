import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeSideMenu: "",
    activeNavBarMenu: "",
    toggleSideBar: false
}

const UISlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        changeActiveSideMenu(state, action){
            state.activeSideMenu = action.payload
            state.activeNavBarMenu = ""
            // state.toggleSideBar = (state.toggleSideBar === true) && false
        },
        changeActiveNavBarMenu(state, action){
            state.activeNavBarMenu = action.payload
        },
        changeToggleSideBar(state){
            state.toggleSideBar = !state.toggleSideBar
        }
    }
})

export const UIActions = UISlice.actions
export default UISlice
