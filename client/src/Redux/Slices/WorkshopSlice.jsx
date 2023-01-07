import axios from "axios";
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";



const initialState = {
    events: [],
    status: "idle",
}
const api = 'http://localhost:5000/api'



// export const addNewProduct = createAsyncThunk("product/addNewProduct",
//     async (product) => {
//         const response = await axios.post(`${api}/image`, { file: product.file }, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//         const res = await axios.post(`${api}/products`, {
//             title: product.title,
//             userId: product.userId,
//             description: product.description,
//             category: product.category,
//             price: product.price,
//             state: product.state,
//             image: response.data.url
//         }).catch((err) => {
//             errors = err.response.data.errors
//             throw err
//         })
//         errors = null
//         window.location.pathname = `/home`
//         return res.data
//     }
// );



const WorkshopSlice = createSlice({
    name: 'workshop',
    initialState,
    // extraReducers: {
    //     [getAllProducts.pending]: (state, action) => {
    //         state.status = "loading"
    //     },
    //     [getAllProducts.fulfilled]: (state, action) => {
    //         state.status = "succeeded"
    //         state.products = action.payload
    //     },
    //     [getAllProducts.rejected]: (state, action) => {
    //         state.status = "failed"
    //         state.error = action.error.message
    //     },
    //     [getSearchProducts.fulfilled]: (state, action) => {
    //         state.status = "succeeded"
    //         state.searchProducts = action.payload
    //     },
    //     [getSearchProducts.rejected]: (state, action) => {
    //         state.status = "failed"
    //         state.error = action.error.message
    //     },
    //     [addNewProduct.fulfilled]: (state, action) => {
    //         state.error = errors
    //         state.creatStatus = "succeeded"
    //         state.products = state.products.concat(action.payload)
    //     },
    //     [addNewProduct.rejected]: (state, action) => {
    //         state.creatStatus = "failed"
    //         state.error = errors
    //     },
    //     [getUserProducts.fulfilled]: (state, action) => {
    //         state.status = "succeeded"
    //         state.UserProducts = action.payload
    //     },
    //     [getUserProducts.rejected]: (state, action) => {
    //         state.status = "failed"
    //         state.error = action.error.message
    //     },
    //     [findProduct.fulfilled]: (state, action) => {
    //         state.status = "succeeded"
    //         state.productFound = action.payload
    //     }

    //}

})


export default WorkshopSlice.reducer