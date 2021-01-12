import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { ReactComponent as WishlistHeartFill } from '../assets/icons/wishlist-heart-fill.svg';
import './Header.css';
import '../utils/utility-classes.css';
import { connect } from "react-redux";
import {signOutAction} from '../redux/actions/user';


// Pentru Home, About si majoritatea paginilor ce vor fi create in urmatoarele cursuri, avem nevoie de un header
// si un footer. Headerul va contine navbar-ul, deci link-urile utile catre alte pagini. Momentan, vom vrea ca
// header-ul sa contina link-uri catre Home si Login
function Header(props) {
    // const {user, signOut, numberOfProducts} = props;
    const {numberOfProducts, user, signOutInjected, numberOfWishProducts} = props;
    // console.log(props);
    
    
    return(
        // <div className="container-max-width"> // asa adaugam o clasa dintr-un fisier de-al nostru de css
        <div className="header d-flex justify-content-between align-items-center mt-3">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            
            <div className="mr-5 d-flex">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/about" className="navbar-item">About us</Link>
                <Link to="/contact" className="navbar-item">Contact</Link>
                {/* <Link to="/">Our products</Link> */}

                {
                    user
                        ?  (<div>
                                <p className="font-italic mr-3 mb-1">Hello, {user.displayName}</p>
                                <button onClick={()=>{signOutInjected()}} className="btn btn-outline-dark btn-sm mb-3">Log out</button>
                           </div>)
                        :  <Link to='/login' className="navbar-item">Login</Link>
                }
                
                 <Link to="/wishlist" className="d-flex ">
                    <span className="icon"><WishlistHeartFill /></span>
                </Link>
                <span className="ml-1 mr-3"> {numberOfWishProducts}</span>
                <Link to="/cart" className="d-flex">
                    <span className="icon"><ShoppingCart /></span>
                </Link>
                <span className="ml-1"> {numberOfProducts}</span>
            </div>

        </div>
    );
}

function mapStateToProps (state) {
    
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data,
        numberOfWishProducts: state.wishlist.products.length
        
    };
  }

function mapDispatchToProps(dispatch) {
    
    return {
        signOutInjected: () => {
            dispatch(signOutAction())
        }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header);