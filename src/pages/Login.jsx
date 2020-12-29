import React from 'react';
import {Link} from 'react-router-dom';

function Login(props) {
    const {signInWithGoogle, signInWithFacebook, history} = props;

    function handleButtonClickGoogle() {
        signInWithGoogle();
        history.push('/');
    }

    function handleButtonClickFacebook() {
        signInWithFacebook();
        history.push('/');
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <button onClick={()=> {handleButtonClickGoogle()}}>Sign in with Google</button>
            <button onClick={()=> {handleButtonClickFacebook()}}>Sign in with Facebook</button>
        </div>
    )
}

export default Login