import { configureStore } from '@reduxjs/toolkit'
import AdminSlice from './admin/AdminSlice'
import AuthSlice from './admin/AuthSlice'

const store = configureStore({
    reducer: {
        admin: AdminSlice.reducer,
        auth: AuthSlice.reducer
    }
})

export default store