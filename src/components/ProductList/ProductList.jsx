import React from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';

function ProductList(props) {
    const {products} = props;
    return (       
        <div className="row">
            { products.map((product)=> {
                return <ProductItem product={product} key={product.id}/>
            })}
        </div>
    )
}

export default ProductList;