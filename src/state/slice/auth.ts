import { createSlice } from "@reduxjs/toolkit"
import Consumer from "../../interfaces/user/consumer";
import Merchant from "../../interfaces/user/merchant";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null as Consumer|Merchant|null,
        logged_in: false,
        auth_loading: false
    },
    reducers: {
        setProfile(state, action) {
            state.user = action.payload;
            state.logged_in = true;
        },
        logout(state, action) {
            state.user = null;
            state.logged_in = false;
        },
        toggleLoading(state, action) {
            state.auth_loading = !state.auth_loading
        }
    }
})

export const { setProfile, logout, toggleLoading } = authSlice.actions

export default authSlice.reducer