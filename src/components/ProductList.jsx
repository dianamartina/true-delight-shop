import React from 'react';
import { connect } from "react-redux";
import { addToCart } from '../redux/actions/cart'

function ProductList(props) {

    const {products, addToCartInStore} = props;

    return (
        <div className="container">
            <div className="row">
                { products.map((product)=> {
                    return(
                        <div className="col-4" key={product.id}>
                            <img src={product.image} alt="" className="w-100"/>
                            <p className="mt-1">{product.name}</p>
                            <p>{product.price} {product.currency}</p>
                            <button 
                                onClick={() => addToCartInStore(product)}
                                className="btn btn-outline-dark btn-sm mb-5">Add to basket
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    
    return {
        addToCartInStore: (product) => {
            const actionResult = addToCart(product);
            dispatch(actionResult);
        }
    };
  }

export default connect(null, mapDispatchToProps)(ProductList);