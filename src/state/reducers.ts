import products from "./slice/products";
import auth from "./slice/auth";
import data from "./slice/data"
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
    products: products,
    auth: auth,
    data: data
})