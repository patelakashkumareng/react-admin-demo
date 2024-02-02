import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeSideMenu: "",
    activeNavBarMenu: ""
}

const UISlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        changeActiveSideMenu(state, action){
            state.activeSideMenu = action.payload
            state.activeNavBarMenu = ""
        },
        changeActiveNavBarMenu(state, action){
            state.activeNavBarMenu = action.payload
        }
    }
})

export const UIActions = UISlice.actions
export default UISlice
