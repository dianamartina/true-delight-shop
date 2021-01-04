import React from 'react';
import Layout from '../components/Layout';
// importam HOC-ul connect
import { connect } from 'react-redux';
// importam Link-ul din router
import { addToCart } from '../redux/actions/cart'
import {clearItemFromCart} from '../redux/actions/cart'
import { decrementProduct } from '../redux/actions/cart'


import { Link } from 'react-router-dom';
// importam fisierul css corespunzator
import './Cart.css';
// importam iconita de stergere a produsului
import { ReactComponent as Close} from '../assets/icons/close.svg';

// De ce Cart nu este o clasa? State-ul este tinut in store-ul global, deci nu va mai avea state! =>
// poate fi o functional component.
function Cart(props) {
    return(
        // Nu uitam de Layout, pentru a avea Header si Footer
        <Layout>
            <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center ">
                {
                    // Daca avem produse in cart, le afisam.
                    // PRODUSELE sunt venite din store si salvate in props prin functia mapStateToProps!!
                    props.products.length
                    ? <div className="w-100 mt-5">
                        {/* Numele coloanelor ce vor fi afisate. */}
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Product</p>
                            <p className="w-25">Price</p>
                            <p className="w-25">Quantity</p>
                            <p className="w-25">Total</p>
                        </div>
                        {
                            // Afisam produsele din cart.
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <div className="w-25 d-flex justify-content-center">
                                        <div className='arrow mr-1' onClick={() => props.decrementProduct(product)}>
                                            &#10094;
                                        </div>
                                        <p >{ product.quantity }</p>
                                        <div className='arrow ml-1'  onClick={() => props.incrementProduct(product)}>
                                            &#10095;
                                        </div>
                                    </div>
                                    <div className="w-25 d-flex justify-content-center">
                                        <p className="mr-2">{ product.price * product.quantity } { product.currency }</p>
                                        <span onClick={()=>props.removeProduct(product)} className="close" ><Close /></span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    // Daca nu avem produse in cart afisam un mesaj si un buton care duce la Home.
                    : <div className="d-flex flex-column justify-content-center  align-items-center vh-100">
                        <p className="h3">No products!</p>
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
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeProduct: (product) => {
            dispatch(clearItemFromCart(product))
        }, 
        incrementProduct: (product) => {
            const actionResult = addToCart(product);
            dispatch(actionResult);
        }, 
        decrementProduct: (product) => {
            const actionResult = decrementProduct(product);
            dispatch(actionResult);
        }
    }
}

// Cart-ul trebuie sa fie conectat la store, deci vom folosi HOC-ul connect, care primeste automat
// ca parametri mapStateToProps si mapDispatchToProps, pe care NOI trebuie sa le implementam.
// ATENTIE! Trebuie ca cele doua metode sa fie pasate lui connect IN ORDINEA DE MAI SUS, dar pot fi denumire
// diferit, cu conditia ca si numele metodei de mai sus(cand ii e scrisa implementarea) sa fie acelasi.
export default connect(mapStateToProps, mapDispatchToProps)(Cart);