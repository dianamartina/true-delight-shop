import React from "react";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { removeFromWishlist } from "../../redux/Wishlist/WishlistActions";
import { addToCart } from "../../redux/Cart/CartActions";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteCercle } from "../../assets/icons/delete.svg";
import "./Wishlist.css";

function Wishlist(props) {
  const { products, removeProduct, addToCartInStore } = props;
  return (
    <Layout>
      <div className="wishlist container-fluid container-min-max-width ">
        {
          // The products come from store and are saved in props using mapStateToProps function
          products.length /* Show the number of products from the list*/ ? (
            <div>
              <div className="title">
                <h1 className="mb-5 mt-3 title-h2-p">Your Wishlist</h1>
              </div>
              <div className="container">
                <div className="row">
                  {
                    // Show the products in wishlist
                    products.map((product) => {
                      return (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-6 d-flex justify-content-center align-items-stretch font-italic"
                          key={product.id}
                        >
                          <div className="gold-border pb-0 d-flex flex-column position-relative">
                            <img
                              src={product.image}
                              alt="Produs"
                              className="w-100"
                            />
                            <h3 className="mt-3 wishlist-name">
                              {product.name}
                            </h3>
                            <p>
                              {product.price}
                              <span className="ml-1 text-14">
                                {product.currency}
                              </span>
                            </p>

                            <div className=" flex-grow-1"></div>

                            <button
                              onClick={() => addToCartInStore(product)}
                              className="btn btn-gold btn-sm mb-4 "
                            >
                              Add to cart
                            </button>

                            <span
                              onClick={() => removeProduct(product)}
                              className="delete p-3 wishlist-delete"
                            >
                              <DeleteCercle />
                            </span>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          ) : (
            // If there aren't products in wishlist, we show a message and an redirect button to homepage
            <div className="wishlist-container d-flex flex-column justify-content-center  align-items-center ">
              <p className="h3 mb-5">No products in wishlist!</p>
              <Link to="/">
                <button className="btn btn-gold mb-5 ">
                  Go back to home page
                </button>
              </Link>
            </div>
          )
        }
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    products: state.wishlist.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeProduct: (product) => {
      dispatch(removeFromWishlist(product));
    },
    addToCartInStore: (product) => {
      dispatch(addToCart(product));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
