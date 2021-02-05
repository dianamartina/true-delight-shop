import React from 'react';
import modelLogo from '../../assets/images/model-logo.png';
import {Link} from 'react-router-dom';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import './Footer.css';

function Footer() {
    return (
        <div className=" footer pb-3">
            <div className="container-fluid  container-min-max-width">
                <Link to="/" className="text-decoration-none">
                    <p className="logo-name h3">True Delight</p>
                    <img src={modelLogo} alt="model-logo"/>
                </Link>
                <div className="row ">
                        <div className="footer-nav col-lg-6 col-12 d-flex justify-content-around my-3">
                            <Link to="/" className="footer-navbar-item" > Home</Link>
                            <Link to="/about" className="footer-navbar-item" > About us</Link>
                            <Link to="/privacy-policy" className="footer-navbar-item" > Privacy Policy</Link>
                            <Link to="/terms" className="footer-navbar-item" > Terms & Conditions</Link>
                            <Link to="/contact" className="footer-navbar-item" > Contact</Link>
                        </div>
        
                        <div className="footer-social-media col-lg-5 col-12 d-flex my-3 ">
                            <h5 className="mr-3">follow us</h5>
                            <Link to="/" className="social-media-icon"><Facebook /></Link>
                            <Link to="/" className="social-media-icon"><Twitter /></Link>
                            <Link to="/" className="social-media-icon"><Instagram /></Link>
                        </div>
                    </div>
                
                    <div className="footer-bottom">Made with &hearts; by dianamartina</div>
            </div>
        </div>
    )
}

export default Footer;
