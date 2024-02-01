import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenu: ""
}

const SideBarSlice = createSlice({
    name: 'sidebar',
    initialState: initialState,
    reducers: {
        changeActiveMenu(state, action){
            state.activeMenu = action.payload
        }
    }
})

export const SideBarActions = SideBarSlice.actions
export default SideBarSlice
