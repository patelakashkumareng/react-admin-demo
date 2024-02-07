import { createSlice } from "@reduxjs/toolkit"
import { LOCAL_STORAGE } from "../../config/constant"

const userToken = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)
  ? localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)
  : null

const userData = localStorage.getItem(LOCAL_STORAGE.USER_DATA)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_DATA))
  : null

const initialState = {
    isLoggedIn: userToken ? true : false,
    userData: userData
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