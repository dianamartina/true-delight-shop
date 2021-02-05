import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/Cart/CartActions';
import { addToWishlist, removeFromWishlist} from '../../redux/Wishlist/WishlistActions';
import { ReactComponent as WishlistHeartOutline } from '../../assets/icons/wishlist-heart-outline.svg';
import { ReactComponent as WishlistHeartFill } from '../../assets/icons/wishlist-heart-fill.svg';
import './ProductItem.css';


function ProductList(props) {
    const {product, addToCartInStore, addToWishlist, removeFromWishlist, productsWishlist} = props;
    return(
        <div  className="col-lg-4 col-sm-6 col-12 d-flex align-items-stretch ">
            <div className=" gold-border pb-0 d-flex flex-column">
                <Link to={`/product/${product.id}`} className="product-item-hover ">
                    <div className="product-item-image-bkg">
                        <img src={product.image} alt="" className="w-100 product-item-image"/>
                    </div>
                    <h3 className="mt-3 product-item-name">{product.name}</h3>
                    <div className=" mb-3 mr-3 product-item-price ">
                        {product.price} {product.currency}
                    </div>
                </Link>
                <div className=" flex-grow-1"></div>{/* added, so that all the product boxes have the same height no matter the lines of the title*/}

                <div className="d-flex justify-content-center mb-4">
                    <button 
                        onClick={() => addToCartInStore(product)}
                        className="btn btn-gold btn-sm  mr-4 ">Add to cart
                    </button>
                    { productsWishlist.find(
                        productWish => productWish.id === product.id)
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
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    // console.log("productsWishlist=",state.wishlist.products);
    return {
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
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);