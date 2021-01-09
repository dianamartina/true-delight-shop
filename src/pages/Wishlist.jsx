import React from 'react';
import Layout from '../components/Layout';
// importam HOC-ul connect
import { connect } from 'react-redux';

import {removeFromWishlist} from '../redux/actions/wishlist';
import { addToCart } from '../redux/actions/cart';


import { Link } from 'react-router-dom';
// importam fisierul css corespunzator
import './Cart.css';
// importam iconita de stergere a produsului
import { ReactComponent as Close} from '../assets/icons/close.svg';

// De ce Cart nu este o clasa? State-ul este tinut in store-ul global, deci nu va mai avea state! =>
// poate fi o functional component.

function Wishlist(props) {

    const {products, removeProduct, addToCartInStore } = props;

    return(
        // Nu uitam de Layout, pentru a avea Header si Footer
        <Layout>
            
            <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center ">
               
                {
                    // Daca avem produse in cart, le afisam.
                    // PRODUSELE sunt venite din store si salvate in props prin functia mapStateToProps!!

                    products.length /* Afiseaza numarul de produse din lista*/
                    ? <div className="w-100 mt-5">
                         < h1 className="mb-5 mt-3">Wishlist</h1>
                        {
                            // Afisam produsele din cart.
                            products.map(product => {

                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <div>
                                        <button 
                                            onClick={() => addToCartInStore(product)}
                                            className="btn btn-outline-dark btn-sm  mr-4">Add to basket
                                        </button>
                                    </div>
                                    
                                    <div className="w-25 d-flex justify-content-center">
                                        
                                        <span onClick={()=>removeProduct(product)} className="close" ><Close /></span>
                                        
                                    </div>
                                    
                                    

                                   
                                </div>
                            })
                        }

                        
                        
                    </div>
                    // Daca nu avem produse in cart afisam un mesaj si un buton care duce la Home.
                    : <div className="d-flex flex-column justify-content-center  align-items-center vh-100">
                        <p className="h3">No products in wishlist!</p>
                        <Link to="/"><button className="btn btn-outline-dark mb-5 ">Go back to home page</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

// Functia mapStateToProps ia parti din state-ul store-ului si le aduce ca PROPS-uri in componenta curenta.
// Cand este apelata de connect functia primeste automat state-ul store-ului. Pentru a primi in props campuri din
// state, functia trebuie sa returneze un obiect, ale carui chei vor reprezenta NUMELE noilolor props-uri ce vor fi
// injectate in componenta curenta(Cart), care vor avea ca valori diverse campuri din state-ul din store.
function mapStateToProps(state) {
    return {
        products: state.wishlist.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeProduct: (product) => {
            dispatch(removeFromWishlist(product))
        },
        addToCartInStore: (product) => {
            dispatch(addToCart(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);