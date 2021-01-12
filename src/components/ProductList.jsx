import React from 'react';
import { connect } from "react-redux";
import { addToCart } from '../redux/actions/cart';
import { addToWishlist, removeFromWishlist} from '../redux/actions/wishlist';


import { ReactComponent as WishlistHeartOutline } from '../assets/icons/wishlist-heart-outline.svg';
import { ReactComponent as WishlistHeartFill } from '../assets/icons/wishlist-heart-fill.svg';

function ProductList(props) {

    const {products, addToCartInStore, addToWishlist, removeFromWishlist, productsWishlist} = props;

    // console.log('===============props= '+JSON.stringify(props, null, 4))

    return (
        <div className="container">
            <div className="row">
                { products.map((product)=> {
                    return(
                        <div className="col-4">
                            <div className=" gold-border pb-0" key={product.id}>
                                <img src={product.image} alt="" className="w-100"/>
                                <p className="mt-1">{product.name}</p>
                                <div className=" mb-2">
                                    <span className="mr-3">{product.price} {product.currency}</span>
                                    
                                </div>
                                <div className="d-flex justify-content-center mb-4">
                                    <button 
                                        onClick={() => addToCartInStore(product)}
                                        className="btn btn-outline-dark btn-sm  mr-4">Add to basket
                                    </button>

                                        {  productsWishlist.find(
                                                productWish => productWish.id === product.id
                                                )
                                                ? <span 
                                                onClick={() => removeFromWishlist(product)}
                                                className=" mr-4 icon">
                                                    <WishlistHeartFill />
                                            </span>
                                            :<span
                                                    onClick={() => addToWishlist(product) }
                                                    className=" mr-4 icon">
                                                        <WishlistHeartOutline />
                                                </span>
                                            }

                                        {/* <span
                                            onClick={() => toggleWishlist(product)}
                                            className=" mr-4">
                                                { 
                                                    inWhishlist === false
                                                    ? <span className="icon icon-heart-hover"><WishlistHeartOutline/> </span>
                                                    : <span className="icon icon-heart-hover"><WishlistHeartFill/> </span>
                                                }
                                                
                                        </span> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    console.log("productsWishlist=",state.wishlist.products);
    return {
        // inWhishlist: state.wishlist.inWhishlist,
        productsWishlist: state.wishlist.products
    };
  }

function mapDispatchToProps(dispatch) {
    
    return {
        addToCartInStore: (product) => {
            dispatch(addToCart(product));
        },
        addToWishlist: (product) => {
            dispatch(addToWishlist(product));
        },
        removeFromWishlist: (product) => {
            dispatch(removeFromWishlist(product));
        }
        // toggleWishlist: (product) => {
        //     dispatch(toggleWishlist(product));
        // }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);