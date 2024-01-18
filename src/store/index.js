import { configureStore } from '@reduxjs/toolkit'
import AdminSlice from './admin/AdminSlice'

const store = configureStore({
    reducer: {
        admin: AdminSlice.reducer
    }
})

export default store