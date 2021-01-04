import React from 'react';
import './BaseListSidebar.css';

class BaseListSideBar extends React.Component {
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
            <div className="container" >
               
                <div className="position-fixed side-bar-menu" >
                    Select price:
                    <p className="mt-3">
                        <label htmlFor="first-interval" className="mr-1"> &le; 20 LEI </label>
                        <input 
                            type="radio" 
                            id="first-interval" 
                            name="price-filter" 
                            checked={this.state.selectedOption === "first-interval"}
                            onChange={(event)=>this.handleValueChange(event)} />
                    </p>
                    <p>
                        <label htmlFor="middle-interval" className="mr-1">20-50 LEI</label>
                        <input 
                            type="radio" 
                            id="middle-interval" 
                            name="price-filter" 
                            checked={this.state.selectedOption === "middle-interval"}
                            onChange={(event)=>this.handleValueChange(event)} />
                    </p>
                    <p>
                        <label htmlFor="max-interval" className="mr-1">&ge; 50 LEI</label>
                        <input 
                            type="radio" 
                            id="max-interval" 
                            name="price-filter" 
                            checked={this.state.selectedOption === "max-interval"}
                            onChange={(event)=>this.handleValueChange(event)} />
                    </p>
                    <p>
                        <label htmlFor="all-products" className="mr-1">All products</label>
                        <input 
                            type="radio" 
                            id="all-products" 
                            name="price-filter"
                            checked={this.state.selectedOption === "all-products"}
                            onChange={(event)=>this.handleValueChange(event)}
                             />
                    </p>

                </div>

                <div className="container">
                    <div className="row">
                         
                {this.state.selectedOption === "first-interval" 
                    ? products.filter(product => product.price <= 20)
                        .map(filterProduct => {
                            return(
                                <div className="col-4" >
                                    <img src={filterProduct.image} alt="" className="w-100"/>
                                    <p className="mt-1">{filterProduct.name}</p>
                                    <p>{filterProduct.price} {filterProduct.currency}</p>
                                    <button className="btn btn-outline-dark btn-sm mb-5">Adauga in cos</button>
                                </div>
                            )
                        })
                    : this.state.selectedOption === "middle-interval" 
                        ? products.filter(product => 20 < product.price &&  product.price <= 50)
                        .map(filterProduct => {
                            return(
                                <div className="col-4">
                                    <img src={filterProduct.image} alt="" className="w-100"/>
                                    <p className="mt-1">{filterProduct.name}</p>
                                    <p>{filterProduct.price} {filterProduct.currency}</p>
                                    <button className="btn btn-outline-dark btn-sm mb-5">Adauga in cos</button>
                                </div>
                            )
                        })

                        : this.state.selectedOption === "max-interval"
                            ? products.filter(product =>  product.price > 50)
                                .map(filterProduct => {
                                    return(
                                        <div className="col-4">
                                            <img src={filterProduct.image} alt="" className="w-100"/>
                                            <p className="mt-1">{filterProduct.name}</p>
                                            <p>{filterProduct.price} {filterProduct.currency}</p>
                                            <button className="btn btn-outline-dark btn-sm mb-5">Adauga in cos</button>
                                        </div>
                                    )
                                })
                            : this.state.selectedOption === "all-products" && 
                                 products.map((product)=> {
                                    return(
                                        <div className="col-4">
                                            <img src={product.image} alt="" className="w-100"/>
                                            <p className="mt-1">{product.name}</p>
                                            <p>{product.price} {product.currency}</p>
                                            <button className="btn btn-outline-dark btn-sm mb-5">Adauga in cos</button>
                                        </div>
                                    )
                                })
                    }

                    </div>
                </div>
            </div>
            
        )
    }
}

export default BaseListSideBar;


