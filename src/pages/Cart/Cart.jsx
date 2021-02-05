import React from 'react';
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Cart/CartActions'
import {removeFromCart} from '../../redux/Cart/CartActions';
import { decrementProduct } from '../../redux/Cart/CartActions';
import { Link } from 'react-router-dom';
import './Cart.css';
import { ReactComponent as Delete} from '../../assets/icons/close.svg';

function Cart(props) {

    const totalSum = (products) => {
        return products.reduce((acc, product) => {
            return acc + product.quantity * product.price;
        }, 0)
    }
    const {products, removeProduct, incrementProduct, decrementProduct } = props;

    return(
        <Layout>
            <div className="cart container-fluid container-min-max-width ">
                    <div className="row d-flex  justify-content-center pl-3 pr-1">
                        {// The products come from store and are saved in props using mapStateToProps function
                            products.length /* Show the number of products from the list*/
                            ? <div className="w-100 mt-5 vh-50">
                                <h2 className="mb-5 mt-3 title-h2-p ">Your Cart</h2>
                                <h5 className="d-flex justify-content-between text-center border-bottom-cart mb-4 ">
                                    <p className="w-25 cart-table-title">Product</p>
                                    <p className="w-25 cart-table-title">Price</p>
                                    <p className="w-25 cart-table-title">Quantity</p>
                                    <p className="w-25 cart-table-title">Total product</p>
                                </h5>
                                {
                                    // Show products in cart
                                    products.map(product => {

                                        return <div className="d-flex justify-content-between align-items-center border-bottom pt-2 font-italic " key={product.id}>
                                            <div className="cart-image-name w-25 d-flex mb-2">
                                                <img src={product.image} alt="Produs" className="cart-image"/>
                                                <p className="cart-product-name">{ product.name }</p>
                                            </div>

                                            <p className="w-25">{ product.price } <span className="ml-1 text-14">{ product.currency }</span></p>

                                            <div className="w-25 d-flex justify-content-center">
                                                <span className='arrow mr-1' onClick={() => decrementProduct(product)}>
                                                    -
                                                </span>
                                                <p >{ product.quantity }</p>
                                                <span className='arrow ml-1'  onClick={() => incrementProduct(product)}>
                                                    +
                                                </span>
                                            </div>

                                            <div className="w-25 d-flex justify-content-center position-relative">
                                                <p className="mr-2">{ product.price * product.quantity } <span className="ml-1 text-14">{product.currency }</span> </p>
                                                <span onClick={()=>removeProduct(product)} className="delete cart-delete px-2" ><Delete /></span>
                                            </div>
                                        
                                        </div>
                                    })
                                }

                                <div className="d-flex justify-content-end ">
                                    <div className="w-25 d-flex align-items-center justify-content-center">
                                        <h5 className="my-4 text-uppercase cart-table-title">Total</h5>
                                    </div>
                                    <div className="w-25">
                                        <h5 className="my-4 cart-table-title">
                                            { totalSum(props.products) } { props.products[0].currency }
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            // If there aren't products in wishlist, we show a message and an redirect button to homepage
                            : <div className="d-flex flex-column justify-content-center  align-items-center vh-75">
                                <p className="h3 mb-5">Your cart is empty!</p>
                                <Link to="/"><button className="btn btn-gold mb-5 ">Go back to home page</button></Link>
                            </div>
                        }
                    </div>
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.cart.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeProduct: (product) => {
            dispatch(removeFromCart(product))
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);