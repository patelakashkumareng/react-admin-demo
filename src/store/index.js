import { configureStore } from '@reduxjs/toolkit'
import AdminSlice from './admin/AdminSlice'
import AuthSlice from './admin/AuthSlice'
import UISlice from './admin/UISlice'

const store = configureStore({
    reducer: {
        admin: AdminSlice.reducer,
        auth: AuthSlice.reducer,
        ui: UISlice.reducer
    }
})

export default store