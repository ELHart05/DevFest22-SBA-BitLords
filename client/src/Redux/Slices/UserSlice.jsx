import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


const api = 'http://localhost:5000/api'

const initialState = {
    user: {
        email: ""
    },
    status: "idle",
}

export const createUserAuth = createAsyncThunk("user/login",
    async (user) => {
        const response = await axios.post(`${api}/users/signin`, {
            email: user.email,
            password: user.password,
            role: user.role,
            firstname: user.firstname,
            lastname: user.lastname
        }).catch(err => {
            console.log(err.response.data);
        })
        window.location.pathname = `/home`
        return response.data
    }

);

export const userLogin = createAsyncThunk("user/signup",
    async (user) => {
        const response = await axios.post(`${api}/users/login`, user)
                window.location.pathname = `/home`
        return response.data
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        CreateUser: (state, action) => {
            state.user = action.payload
        },
        deletUser: (state) => {
            state.user = {
                email: ""
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.user = action.payload.user
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = "failed"
            })
            .addCase(createUserAuth.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(createUserAuth.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.user = action.payload.user
            })
            .addCase(createUserAuth.rejected, (state, action) => {
                state.status = "failed"
                state.error = errors
            })
    }
})



export const { CreateUser, deletUser } = userSlice.actions
export default userSlice.reducer