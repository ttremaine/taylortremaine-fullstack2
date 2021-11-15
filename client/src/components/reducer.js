import React from "react";

function usersReducer(state, action) {
    
    switch(action.type) {
        case "CREATE_USER": {
            const newUser = action.payload.newUser;
            return { 
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                balance: newUser.balance,
                isLogin: newUser.isLogin,
                isAuth: newUser.isAuth
            };
        }
        case "LOGIN_USER": {
            const loginUser = action.payload.loginUser;
            return {
                name: loginUser.name,
                email: loginUser.email,
                password: loginUser.password,
                balance: loginUser.balance,
                isLogin: true,
                isAuth: loginUser.isAuth
            };
        }
        case "LOGOUT_USER": {
            const logoutUser = action.payload.logoutUser;
            return {
                name: "",
                email: "",
                password: "",
                balance: 0,
                isLogin: false,
                isAuth: false
            };
        }
        case "UPDATE_BALANCE": {
            const userDeposit = action.payload.userDeposit;
            return {
                name: userDeposit.name,
                email: userDeposit.email,
                password: userDeposit.password,
                balance: userDeposit.balance + userDeposit.amount,
                isLogin: userDeposit.isLogin,
                isAuth: userDeposit.isAuth
            };
        }
        default:
            return state;
    } 
}

export default usersReducer;