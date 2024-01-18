import { createSlice } from '@reduxjs/toolkit'
import { PER_PAGE } from './../../config/constant'

const initialState = {
    list: [],
    perPage: PER_PAGE,
    currentPage: 1,
    totalRecords: 0
}

const AdminSlice = createSlice({
    name: 'admin',
    initialState: initialState,
    reducers: {
        fetchList(state, action){
            const payload = action.payload
            state.list = payload.list
            state.perPage = payload.perPage
            state.currentPage = payload.currentPage
            state.totalRecords = payload.totalRecords
        }
    }
})

export const AdminListAction = AdminSlice.actions
export default AdminSlice