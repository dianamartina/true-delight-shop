import React from 'react';
import productsJson from '../../utils/products.json';// import json file
import Layout from '../../components/Layout/Layout';
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import {Link} from "react-scroll";
import './Home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state ={
            categories: []
        }
    }

    componentDidMount() {
        // usually we get data from server using fetch().then()....then()
        // here we use our local json file
        // console.log(productsJson);
        const productKeys = Object.keys(productsJson);
        // console.log(productKeys);
        this.setState({categories: productKeys })
    }
    render(){
        return(
            <div className="home">
                {/* Layout component it the header and footer page, using props.children */}
                <Layout>
                    <div className="hero d-flex align-items-end ">
                        <div className="container-fluid container-min-max-width mb-5">
                            <div className="d-flex flex-column align-items-end pb-5">
                                <h1 className="hero-h1">All for a special day</h1>
                                <p className="hero-p">SWEETS</p>
                                <div className="small-line"></div>
                                <p className="hero-p-descrip">It’s always good time for sweets!<br/>Find your favorite now.</p>
                                <Link to="link-products" smooth={true} offset={-90} duration={700}>
                                    <button className="btn btn-gold btn-sm mt-4">
                                        Our products
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div  className="container-fluid container-min-max-width">
                        <div className="title"> 
                            <p className="title-h2-p">find out</p>
                            <h2 className="title-h2 h1" id="link-products">our products</h2>
                        </div>
                        <div className="row">
                            {this.state.categories.map((category, index)=>{
                                return (
                                    <HomeCategory 
                                        routeParam= {category}
                                        image={productsJson[category].image}
                                        title={productsJson[category].name}
                                        description={productsJson[category].description}
                                        key={index}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Home;