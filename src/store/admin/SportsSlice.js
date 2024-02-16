import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    sportId: 1,
    name: 'Cricket'
}

const SportsSlice = createSlice({
    name: 'sport',
    initialState : initialState,
    reducers: {
        currentSport(state, action) {
            state.sportId =  Number(action.payload.sportId)
            state.name = String(action.payload.name)
        }
    }

})


export const { currentSport } = SportsSlice.actions

export default SportsSlice