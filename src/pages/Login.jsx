import React from 'react';
import {Link} from 'react-router-dom';
// import {signInWithGoogle} from '../apis/firebase';
import {signInWithGoogleAction} from '../redux/actions/user';
import {signInWithFacebookAction} from '../redux/actions/user';
import { connect } from "react-redux";

class Login extends React.Component {
    // const {signInWithGoogle, signInWithFacebook, history} = props;
    

    
    // function handleButtonClickGoogle() {
    //     signInWithGoogle();
    //     history.push('/');
    // }

    // function handleButtonClickFacebook() {
    //     signInWithFacebook();
    //     history.push('/');
    // }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userData !== prevProps.userData) {
            this.props.history.push('/');
        }
      }

    render(){
        const {signInToGoogleInjected, signInToFacebookInjected} = this.props;
        return (
            <div>
                <Link to="/">Home</Link>
                <button onClick={()=> {signInToGoogleInjected()}}>Sign in with Google</button>
                <button onClick={()=> {signInToFacebookInjected()}}>Sign in with Facebook</button>
            </div>
        )
    }

}

// export default Login

function mapStateToProps (state) {
    
    return {
        userData: state.user.data
        
    };
  }

function mapDispatchToProps(dispatch) {
    
    return {
        signInToGoogleInjected: () => {
            dispatch(signInWithGoogleAction())
        },
        signInToFacebookInjected: () => {
            dispatch(signInWithFacebookAction())
        }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
