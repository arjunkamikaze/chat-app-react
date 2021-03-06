import { auth_types } from "./auth.types";

export const authStart = (userInput) => ({
    type:auth_types.AUTH_START,
    payload:userInput
});

export const authSuccess = (userDetails) => ({
    type:auth_types.AUTH_SUCCESS,
    payload:userDetails
});

export const authFaliure = (error) => ({
    type:auth_types.AUTH_FALIURE,
    payload:error
});

export const deleteUserStart = (userDetails) => ({
    type:auth_types.DELETE_START,
    payload:userDetails
});

export const deleteUserSuccess = (message)=>({
    type:auth_types.DELETE_SUCCESS,
    payload:message
});

export const deleteUserFaliure = (error) => ({
    type:auth_types.DELETE_FALIURE,
    payload:error
});

export const checkSessionStart = (bearer) =>({
    type:auth_types.CHECK_SESSION_START,
    payload:bearer
});

export const checkSessionSuccess = (user) =>({
    type:auth_types.CHECK_SESSION_SUCCESS,
    payload:user
});

export const checkSessionFaliure = (error) =>({
    type:auth_types.CHECK_SESSION_FALIURE,
    payload:error
});

export const clearUser = () => ({
    type:auth_types.CLEAR_USER,
    payload:null
});