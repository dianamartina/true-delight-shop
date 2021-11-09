import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import Wishlist from "./pages/Wishlist/Wishlist";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";
import Page404 from "./pages/Page404/Page404";
import "./utils/utility-classes.css";

function App() {
  return (
    <div className="App ">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/contact" component={Contact} />
        <Route path="/category/:categoryName" component={Category} />
        <Route path="/product/:productId" component={Product} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
