import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    userData: null
}

const AuthSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {
        login(state, action){
            state.isLoggedIn = true
            state.userData = action.payload
        },
        logout(state){
            state.isLoggedIn = false
            state.userData = null
        }
    }
})

export const AuthAction = AuthSlice.actions
export default AuthSlice