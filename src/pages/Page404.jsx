import React from 'react';
import {Link} from 'react-router-dom';

function Page404() {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column vh-100 text-center">                    
            <div className="home-title d-flex align-items-center flex-column"> 
                <p className="home-title-h2-p">Ooops!</p>
                <p className="home-text mt-0">Page not found</p>
                <h2 className="home-title-h2 h1">404</h2>
                
                <button type="button" class="btn btn-light"><Link to="/" className="footer-navbar-item mr-0 mt-5 h5" > Go back to Home</Link></button>
            </div>
        </div>
    )
}

export default Page404;
