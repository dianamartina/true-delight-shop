import React from 'react';
import {Link} from 'react-router-dom';
import './HomeCategory.css';

function HomeCategory(props) {
    const {image, title, description, routeParam}= props;

    return ( 
        <div className="px-3  col-lg-4 col-sm-6  col-12 d-flex">
            <div className="p5 gold-border ">
                <Link to={`/category/${routeParam}`} className="category-hover">
                    <div className="category-image-bkg">
                        <img src={image} alt="" className="w-100 category-image"/>{/* alt is necessary even that is empty */}
                    </div>
                   
                    <h3 className="title-h3 h4 mt-4">{title}</h3>
                    <p className="text-18">{description}</p>
                </Link>
            </div>
        </div>
    )
}

export default HomeCategory;
