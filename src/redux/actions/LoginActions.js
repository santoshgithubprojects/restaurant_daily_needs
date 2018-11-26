import * as types from '../actionTypes/LoginTypes';


export function login(username, password, signIn) {
    return {
        type: types.LOGIN,
        memberDetails : {
            username: username,
            password: password,
            keepSignIn: signIn
        }
    };
}
