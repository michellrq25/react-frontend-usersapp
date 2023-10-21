import { createSlice } from "@reduxjs/toolkit";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialLogin,
    reducers: {
        onLogin: (state, { payload }) => {
            state.isAuth = true;
            state.isAdmin = payload.isAdmin;
            state.user = payload.user;
        },
        onLogout: (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
        },
    }
});

export const { onLogin, onLogout } = authSlice.actions;