import { UserActionTypes } from './UserTypes';
import {signInWithGoogle} from '../../apis/firebase';
import {signInWithFacebook} from '../../apis/firebase';
import {signOut} from '../../apis/firebase';

export function updateUserData(payload) {
    return {
        type: UserActionTypes.UPDATE_USER_DATA,
        payload
    }
}

export function startLoading() {
    return {
        type: UserActionTypes.START_LOADING
    }
}

export function updateError(payload) {
    return {
        type: UserActionTypes.UPDATE_ERROR,
        payload
    }
}

// Asincron request = special actions - will generate a function
export function signInWithGoogleAction() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle()
        .then(result => {
            const userData = result.user;
            dispatch(updateUserData(userData))
        })
        .catch(error => {
            dispatch(updateError(error))
        })
    }
}

export function signInWithFacebookAction() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithFacebook()
        .then(result => {
            const userData = result.user;
            dispatch(updateUserData(userData))
        })
        .catch(error => {
            dispatch(updateError(error))
        })
    }
}

export function signOutAction(payload) {
    return (dispatch) => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch((error) => {
            dispatch(updateError(error));
        });
    }
}
