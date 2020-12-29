import React from 'react';
import {Link} from 'react-router-dom';

function HomeCategory(props) {
    const {image, title, description, routeParam}= props;

    return ( 
        <div className="px-3 col-6 d-flex">
            <div className="p5 gold-border">
                <Link to={`/category/${routeParam}`} className="no-link">
                    <img src={image} alt="" className="w-100"/>{/* alt e obigatorie, chiar daca e gol */}
                    <h3 className="home-title-h3 h4 mt-4">{title}</h3>
                    <p className="home-text">{description}</p>
                </Link>
            </div>       
        </div>        
    )
}

export default HomeCategory
