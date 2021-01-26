import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        current_product: null,
        selected_variation: null
    },
    reducers: {
        setProduct(state, action) {
            state.current_product = action.payload;
        },
        setVariation(state, action) {
            state.selected_variation = action.payload;
        }
    }
})

export const { setProduct, setVariation } = productsSlice.actions

export default productsSlice.reducer