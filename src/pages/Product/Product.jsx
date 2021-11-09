import React from "react";
import Layout from "../../components/Layout/Layout";
import products from "../../utils/products.json";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Cart/CartActions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/Wishlist/WishlistActions";
import { ReactComponent as WishlistHeartOutline } from "../../assets/icons/wishlist-heart-outline.svg";
import { ReactComponent as WishlistHeartFill } from "../../assets/icons/wishlist-heart-fill.svg";
import "./Product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const productId = match.params.productId;
    const categoryValue = Object.values(products);
    console.log("ct", categoryValue);

    let currentProduct;

    categoryValue.forEach((category) => {
      const products = category.items;
      const findResult = products.find((product) => {
        // console.log(product.id , productId);
        return product.id === Number(productId);
      });

      if (findResult) {
        currentProduct = findResult;
      }
    });

    // console.log(currentProduct);
    this.setState({ product: currentProduct });
  }

  render() {
    const { name, image, price, currency, description } = this.state.product;
    const product = this.state.product;
    const {
      addToCartInStore,
      removeFromWishlist,
      addToWishlist,
      productsWishlist,
    } = this.props;
    return (
      <Layout>
        <div className="product-page container-fluid container-min-max-width pt-5">
          {product ? (
            <div className="row pt-5 ">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="">
                  <img
                    src={image}
                    alt=""
                    className=" gold-border product-image w-100"
                  />
                </div>
              </div>

              <div className=" product-description col-lg-8 col-sm-6 col-12 d-flex flex-column ">
                <h3 className="mb-5">{name}</h3>
                <div className="mb-3">
                  <p>
                    {price} {currency}
                  </p>
                </div>

                <div className="d-flex justify-content-center mb-5">
                  <button
                    onClick={() => addToCartInStore(product)}
                    className="btn btn-gold btn-sm  mr-4"
                  >
                    Add to cart
                  </button>
                  {productsWishlist.find(
                    (productWish) => productWish.id === product.id
                  ) ? (
                    <span
                      onClick={() => removeFromWishlist(product)}
                      className=" mr-4 icon"
                    >
                      <WishlistHeartFill />
                    </span>
                  ) : (
                    <span
                      onClick={() => addToWishlist(product)}
                      className=" mr-4 icon"
                    >
                      <WishlistHeartOutline />
                    </span>
                  )}
                </div>
                <div className="text-left">
                  <span className="text-18 "> {description}</span>
                </div>
              </div>
            </div>
          ) : (
            <p>Sorry, this item is not available now!</p>
          )}
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  // console.log("productsWishlist=",state.wishlist.products);
  return {
    productsWishlist: state.wishlist.products,
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
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
