import React from 'react';
import modelLogo from '../assets/images/model-logo.png';
import {Link} from 'react-router-dom';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import './Footer.css';

function Footer() {
    return (
        <div className="container-fluid footer py-3">
            <h5 className="logo-name h3 ">True Delight</h5>
           <img src={modelLogo} alt="model-logo"/>
           <div className="row mt-3">            
                <div className="col-lg-6 d-flex justify-content-around my-3">
                    <Link to="/" className="footer-navbar-item" > Home</Link>
                    <Link to="/about" className="footer-navbar-item" > About us</Link>
                    <Link to="/contact" className="footer-navbar-item" > Contact</Link>
                    <Link to="/privacy-policy" className="footer-navbar-item" > Privacy Policy</Link>
                    <Link to="/terms" className="footer-navbar-item" > Terms & Conditions</Link>
                </div>
   
                <div className="col-lg-5 d-flex justify-content-end my-3 pr-3">
                    <h5 className="mr-3">follow us</h5>
                    <a href="#" className="social-media-icon"><Facebook /></a>
                    <a href="#" className="social-media-icon"><Twitter /></a>
                    <a href="#" className="social-media-icon"><Instagram /></a>
                    
                </div>
            </div>
           
            <div className="footer-bottom">Made with &hearts; by dianamartina</div>
        </div>
    )
}

export default Footer
