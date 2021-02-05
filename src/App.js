import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import Wishlist from './pages/Wishlist/Wishlist';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './pages/Terms/Terms';
import Page404 from './pages/Page404/Page404';
import './utils/utility-classes.css';
// FIREBASE IMPORTS
// import withFirebaseAuth from 'react-with-firebase-auth'//delete
// import * as firebase from 'firebase/app';//delete
// import 'firebase/auth';// moved to apis/firebase.js file
// import firebaseConfig from './config/firebase';// moved to apis/firebase.js file
// const firebaseApp = firebase.initializeApp(firebaseConfig);// moved to apis/firebase.js file

// const firebaseAppAuth = firebaseApp.auth();//
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
//   facebookProvider: new firebase.auth.FacebookAuthProvider()
// }; // moved to apis/firebase.js file

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
          <Route exact path='/' component={Home}/>
          {/* <Route exact
            path='/'
            render={(props) => (
              <Home {...props} signOut={signOut} user={user} />
            )}
          /> */}
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/wishlist' component={Wishlist}/>
          <Route path='/about' component={About}/>
          <Route path='/terms' component={Terms}/>
          <Route path='/privacy-policy' component={PrivacyPolicy}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/category/:categoryName' component={Category}/>
          <Route path='/product/:productId' component={Product}/>

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
// })(App);               // refactoring switching login to Redux
