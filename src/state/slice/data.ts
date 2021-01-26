import { createSlice } from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false
    },
    reducers: {
        toggleLoading(state, action) {
            state.loading = !state.loading
        }
    }
})

export const { toggleLoading } = dataSlice.actions

export default dataSlice.reducer