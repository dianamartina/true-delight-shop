import React, { Component } from 'react';
import products from '../utils/products.json';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state={
            category: {}
        }
    }
    componentDidMount() {/* aici facem cererea catre server */
        
        console.log(this.props.match.params.categoryName);
        const categoryName = this.props.match.params.categoryName;
        const categoryInfo = products[categoryName];
        this.setState({category:categoryInfo});
    } 

    render() {
        console.log(this.props);
        return (
            <Layout>
                <div>
                    <h1 className="mb-4">{this.state.category.name}</h1>
                    {
                        this.state.category.items  
                            ? <ProductList products={this.state.category.items}/>
                            : null
                    }
                    
                </div>
            </Layout>
        )
    }
}


