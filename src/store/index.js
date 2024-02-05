import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './admin/AuthSlice'
import UISlice from './admin/UISlice'

const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        ui: UISlice.reducer
    }
})

export default store