import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/images/model-logo.png';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import { ReactComponent as WishlistHeartFill } from '../../assets/icons/wishlist-heart-fill.svg';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { connect } from "react-redux";
import {signOutAction} from '../../redux/User/UserActions';
import './Header.css';


function Header(props) {
    // const {user, signOut, numberOfProducts} = props;
    const {numberOfProducts, user, signOutInjected, numberOfWishProducts} = props;
    // console.log(props);
    
    
    return(
        < div className="header ">
            <div className="container-fluid container-min-max-width d-flex justify-content-center position-relative flex-column ">
                <div className=" d-flex justify-content-end ">
                    <div >
                        {
                            user
                                ? (<div>
                                        <p className="font-italic navbar-name ">Hello, {user.displayName}</p>
                                        <button onClick={()=>{signOutInjected()}} className="btn navbar-item navbar-login-logout">Log out
                                        </button>
                                    </div>)
                                :  <Link to='/login' className="navbar-item navbar-login-logout">Login</Link>
                        }
                    </div>
                    <Link to="/wishlist" className="d-flex no-link ">
                        <span className="icon"><WishlistHeartFill /></span>
                        <span className="ml-1 mr-3 number-cart-wish"> {numberOfWishProducts}</span>
                    </Link>
                    
                    <Link to="/cart" className="d-flex no-link">
                        <span className="icon"><ShoppingCart /></span>
                        <span className="ml-1 number-cart-wish"> {numberOfProducts}</span>
                    </Link>
                </div>
                    
                <Navbar expand="md" variant="dark" className="p-0 d-flex justyfy-content-space-between">
                    <Link to="/" className="d-flex flex-column text-decoration-none">
                        <span className="logo-name">True Delight</span>
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " className="mb-5"/>{/*hamburger menu */}
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end mb-5"> {/* colapseaza elementele maniului */}
                        <Nav >
                            <NavLink to="/" exact className="navbar-item"  activeStyle={{
                                color: "#c19d56" }}>Home
                            </NavLink>

                            <NavDropdown className="navbar-item" id="collasible-nav-dropdown"  title="Products" >
                                    <NavDropdown.Item  href="/category/cakes" className="navbar-item" >
                                        Cakes
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/category/chocolate" className=" navbar-item">
                                        Chocolate
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/category/icecream" className=" navbar-item">
                                        Ice Cream
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/category/pie" className=" navbar-item">
                                        Pie
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/category/pastries" className=" navbar-item">
                                        Pastries
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/category/donuts" className=" navbar-item">
                                        Donuts
                                    </NavDropdown.Item>
                            </NavDropdown>

                            {/* <Link to="link-products"  smooth={true} offset={-90} duration={700}  className="navbar-item">Products</Link> */}

                            <NavLink to="/about" className="navbar-item"  activeStyle={{ color: "#c19d56" }}>About us</NavLink>
                            <NavLink to="/privacy-policy" className="navbar-item" activeStyle={{ color: "#c19d56" }}>PrivacyPolicy</NavLink>
                            <NavLink to="/contact" className="navbar-item" activeStyle={{ color: "#c19d56" }}>Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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