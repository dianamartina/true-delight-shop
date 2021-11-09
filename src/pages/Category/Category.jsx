import React, { Component } from "react";
import productsJson from "../../utils/products.json";
import Layout from "../../components/Layout/Layout";
// import ProductList from '../../components/ProductList/ProductList';
import ProductListSideBar from "../../components/ProductListSideBar/ProductListSideBar";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
    };
  }
  componentDidMount() {
    /* Server request */

    // console.log(this.props.match.params.categoryName);
    const categoryName = this.props.match.params.categoryName;
    const categoryInfo = productsJson[categoryName];
    this.setState({ category: categoryInfo });
  }

  render() {
    // console.log("props", this.props);
    return (
      <Layout>
        {/* Sidebar for filter the products */}

        {/* Daca nu vreau sa afisez filtru de pret pot afisa doar produsele */}
        <div className="container-fluid container-min-max-width">
          <div className="title" id="link-products">
            <p className="title-h2-p">try our products</p>
            <h2 className="title-h2 h1">{this.state.category.name}</h2>
          </div>
          {this.state.category.items && (
            <ProductListSideBar products={this.state.category.items} />
          )}
        </div>
      </Layout>
    );
  }
}
