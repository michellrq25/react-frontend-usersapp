import { createSlice } from "@reduxjs/toolkit";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
    isLoginLoading: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialLogin,
    reducers: {
        onLogin: (state, { payload }) => {
            state.isAuth = true;
            state.isAdmin = payload.isAdmin;
            state.user = payload.user;
            state.isLoginLoading = false;
        },
        onLogout: (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
            state.isLoginLoading = false;
        },
        onInitLogin: (state) => {
            state.isLoginLoading = true;
        }
    }
});

export const { onLogin, onLogout, onInitLogin } = authSlice.actions;