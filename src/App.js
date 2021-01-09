import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Page404 from './pages/Page404';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
// FIREBASE IMPORTS
// import withFirebaseAuth from 'react-with-firebase-auth'//il stergem
// import * as firebase from 'firebase/app';//il stergem
// import 'firebase/auth';// l-am mutat in alt fisier
// import firebaseConfig from './config/firebase';// e in alt fisier
// const firebaseApp = firebase.initializeApp(firebaseConfig);// e in alt fisier

// const firebaseAppAuth = firebaseApp.auth();//
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
//   facebookProvider: new firebase.auth.FacebookAuthProvider()
// }; // e in alt fisier


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {

    // const {
    //   user,
    //   signOut,
    //   signInWithGoogle,
    //   signInWithFacebook
    // } = this.props;
    
    // console.log(this.props);
    // console.log(signInWithFacebook);
    
    return(
      <div className="App ">
       {/* { user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>

      } */}
        <Switch>
          
          {/* <Route
            path='/login'
            render={(props) => (
              <Login {...props} signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook}/>
            )}
          /> */}

          <Route path='/login' component={Login}/>

          <Route path='/register' component={Register}/>
          <Route exact path='/' component={Home}/>
          {/* <Route exact
            path='/'
            render={(props) => (
              <Home {...props} signOut={signOut} user={user} />
            )}
          /> */}
          <Route path='/cart' component={Cart}/>
          <Route path='/wishlist' component={Wishlist}/>
          <Route path='/about' component={About}/>
          <Route path='/terms' component={Terms}/>
          <Route path='/privacy-policy' component={PrivacyPolicy}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/category/:categoryName' component={Category}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </div>
    );
  }
}

export default (App);

// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);               // el stergem
