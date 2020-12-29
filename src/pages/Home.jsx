import React from 'react';
// importam componenta Layout, in loc sa importam si header-ul si footer-ul.
import products from '../utils/products.json';// am importat json-ul nostru , atentie se adauga extensia la sfarsit
import Layout from '../components/Layout';
import HomeCategory from '../components/HomeCategory';
import './Home.css'

class Home extends React.Component {
    // Pentru ca Home este inclusa intr-o componenta de tip Route, va contine 3 prop-uri in plus:
    // match, history, location.

    // console.log(props);
    constructor() {
        super();
        this.state={
            categories: []
        }
    }

    componentDidMount() {
        //in mod normal de la server fetch().then()....then()

        //aici didactic il luam din fisierul nostru
        // console.log(products);
        const productKeys = Object.keys(products);
        // console.log(productKeys);
        this.setState({categories: productKeys })
    }
    render(){
        // console.log(this.props)
        const {user, signOut} = this.props;

        return(
            <div className="home">
                {/* Tot ce este pus intre <Layout> si </Layout> va reprezenta props.children in cadrul componentei Layout.*/}
                <Layout signOut={signOut} user={user}>
                    <div className="hero">
                            <h1 className="hero-h1">All for a special day</h1>
                            <p className="hero-p">SWEETS</p>
                            <div className="small-line"></div>
                            <p className="hero-p-descrip">It’s always good time for sweets!<br/>Find your favorite now.</p>
                    </div>
                    {/* <div className="home-text-space">
                        <p>If there's no chocolate in Heaven,</p>
                        <p> I'm not going.</p>
                    </div> */}
                    <div className="home-title"> 
                        <p className="home-title-h2-p">find out</p>
                        <h2 className="home-title-h2 h1">our products</h2>
                    </div>
                    <div className="container">{/* se limiteaza la o latime maxima indiferent de device */}
                        <div className="row">{/* creem un singur rand elementele se vor duce una sub alta  */}
                            {this.state.categories.map((category, index)=>{
                                return (                                                                           
                                        <HomeCategory 
                                            routeParam= {category}
                                            image={products[category].image}
                                            title={products[category].name}
                                            description={products[category].description}
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