import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './admin/AuthSlice'
import UISlice from './admin/UISlice'
import SportsSlice from './admin/SportsSlice'

const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        ui: UISlice.reducer,
        sport: SportsSlice.reducer
    }
})

export default store