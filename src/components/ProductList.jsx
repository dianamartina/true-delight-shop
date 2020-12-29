import React from 'react';

function ProductList(props) {

    const {products} = props;
    return (
        <div className="container">
            <div className="row">
                { products.map((product)=> {
                    return(
                        <div className="col-4">
                            <img src={product.image} alt="" className="w-100"/>
                            <p className="mt-1">{product.name}</p>
                            <p>{product.price} {product.currency}</p>
                            <button className="btn btn-outline-dark btn-sm mb-5">Adauga in cos</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList;
