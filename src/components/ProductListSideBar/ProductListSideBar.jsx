import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductListSideBar.css';

class ProductListSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selectedOption: "all-products"
        }
    }

    handleValueChange(event) {
        this.setState({
          selectedOption: event.target.id
        });
      }

    render () {
        const {products} = this.props;
        // console.log(this.state.selectedOption);
        // console.log(products);
        return (
            <div>
                <div className="side-bar-menu d-flex flex-column align-items-end" >
                    <span className="product-item-price font-weight-bold mr-3">
                        Select price:
                    </span>
                    <p className="mt-3">
                        <label htmlFor="first-interval" className="mr-1 product-item-price"> &le; 20 RON </label>
                        <input 
                            type="radio" 
                            id="first-interval" 
                            name="price-filter" 
                            checked={this.state.selectedOption === "first-interval"}
                            onChange={(event)=>this.handleValueChange(event)} 
                        />
                    </p>
                    <p>
                        <label htmlFor="middle-interval" className="mr-1 product-item-price">20-50 RON</label>
                        <input 
                            type="radio" 
                            id="middle-interval" 
                            name="price-filter" 
                            checked={this.state.selectedOption === "middle-interval"}
                            onChange={(event)=>this.handleValueChange(event)} 
                        />
                    </p>
                    <p>
                        <label htmlFor="max-interval" className="mr-1 product-item-price">&ge; 50 RON</label>
                        <input 
                            type="radio" 
                            id="max-interval" 
                            name="price-filter" 
                            checked={this.state.selectedOption === "max-interval"}
                            onChange={(event)=>this.handleValueChange(event)} 
                        />
                    </p>
                    <p className=" mb-0 pb-0">
                        <label htmlFor="all-products" className="mr-1 mb-0 pb-0 product-item-price">All products</label>
                        <input 
                            type="radio" 
                            id="all-products" 
                            name="price-filter"
                            checked={this.state.selectedOption === "all-products"}
                            onChange={(event)=>this.handleValueChange(event)}
                            />
                    </p>
                </div>

                <div className="row">
                    {this.state.selectedOption === "first-interval"
                        ? products.filter(product => product.price <= 20)
                            .map(filterProduct => {
                                return(
                                    <ProductItem product={filterProduct} key={filterProduct.id}/>
                                )
                            })
                        : this.state.selectedOption === "middle-interval" 
                            ? products.filter(product => 20 < product.price &&  product.price <= 50)
                            .map(filterProduct => {
                                return(
                                    <ProductItem product={filterProduct} key={filterProduct.id}/>
                                )
                            })

                            : this.state.selectedOption === "max-interval"
                                ? products.filter(product =>  product.price > 50)
                                    .map(filterProduct => {
                                        return(
                                            <ProductItem product={filterProduct} key={filterProduct.id}/>
                                        )
                                    })
                                : this.state.selectedOption === "all-products" && 
                                    products.map((product)=> {
                                        return(
                                            <ProductItem product={product} key={product.id}/>
                                        )
                                    })
                        }

                    </div>
                </div>
           
            
        )
    }
}

export default ProductListSideBar;


