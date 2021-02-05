import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout(props) {
    // console.log(props);
    // const {children} = props;
    // const {user, signOut} = props;
    return (
        <div className="layout">
            {/* <Header signOut={signOut} user={user}/> */}
            <Header />
                <div className="main">{props.children}</div>
            <Footer/>
        </div>
    )
}

export default Layout;