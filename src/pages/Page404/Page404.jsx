import React from 'react';
import {Link} from 'react-router-dom';

function Page404() {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column vh-100 text-center bkg-light-gold">
            <div className="title d-flex flex-column align-items-center "> 
                <p className="title-h2-p">Ooops!</p>
                <p className="h3 mb-3">Page not found</p>
                <h2 className="title-h2 h1 mb-5">404</h2>
                <Link to="/"> 
                    <button type="button" class="btn btn-gold">Go back to Home Page</button>
                </Link>
            </div>
        </div>
    )
}

export default Page404;

