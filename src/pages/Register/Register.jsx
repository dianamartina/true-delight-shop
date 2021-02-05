import React from 'react';
import {Link} from 'react-router-dom';

function Register() {
    return(
        <div className="d-flex align-items-center justify-content-center flex-column vh-100 text-center bkg-light-gold">
            <div>
                <h1 className="mb-5">Register</h1>
                <Link to='/' className="btn btn-gold mr-3">Home page</Link>
                <Link to='/login' className="btn btn-gold">Login</Link>
            </div>
        </div>
    );
}

export default Register;

