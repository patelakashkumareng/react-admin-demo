import { configureStore } from '@reduxjs/toolkit'
import AdminSlice from './admin/AdminSlice'
import AuthSlice from './admin/AuthSlice'
import SideBarSlice from './admin/SideBarSlice'

const store = configureStore({
    reducer: {
        admin: AdminSlice.reducer,
        auth: AuthSlice.reducer,
        sidebar: SideBarSlice.reducer
    }
})

export default store