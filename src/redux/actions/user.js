import {signInWithGoogle} from '../../apis/firebase';
import {signInWithFacebook} from '../../apis/firebase';
import {signOut} from '../../apis/firebase';

export function updateUserData(payload) {
    return {
        type: 'UPDATE_USER_DATA',
        payload
    }
}

export function startLoading() {
    return {
        type: 'START_LOADING'
       
    }
}

export function updateError(payload) {
    return {
        type: 'UPDATE_ERROR',
        payload
    }
}

// are request asincron =  actiuni speciale - va returna o functie
// functiile normale returneaza un obiect
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

// are request asincron =  actiuni speciale
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
