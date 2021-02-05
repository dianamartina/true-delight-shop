import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/model-logo.png';
import { ReactComponent as G } from '../../assets/icons/G.svg';
import { ReactComponent as F } from '../../assets/icons/f.svg';
// import {signInWithGoogle} from '../apis/firebase';
import {signInWithGoogleAction} from '../../redux/User/UserActions';
import {signInWithFacebookAction} from '../../redux/User/UserActions';
import { connect } from "react-redux";
import './Login.css';

class Login extends React.Component {
    // (functions using signInWithGoogle with withFirebaseAuth)
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
            <div className="d-flex align-items-center justify-content-center flex-column vh-100 text-center bkg-light-gold">
                <div className="d-flex flex-column align-content-center align-items-center">
                    <Link to="/" className="d-flex flex-column text-decoration-none mb-5">
                        <span className="logo-name-gold">True Delight</span>
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <div className="gold-border d-flex flex-column mt-5">
                        <h2 class="mb-2 mt-3 title-h2 h1">Login</h2>
                        <p className="text-18 mb-3">Select your login provider</p>
                        <button onClick={()=> {signInToGoogleInjected()}} className="btn btn-gold mb-3"><span className="login-icon-G px-3"><G/></span>Sign in with Google</button>
                        <button onClick={()=> {signInToFacebookInjected()}} className="btn btn-gold"><span className="login-icon-F px-3"><F/></span>Sign in with Facebook</button>
                    </div>
                </div>
            </div>
        )
    }
}

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
