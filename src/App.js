import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// I can convert a react module with a long name into what want, ex:
// {BrowserRouter} i can change it to just Router by typing "as" like so:
// { BrowserRouter as Router, Switch, Route }

//
import Data from "./data.json";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import About from "./components/About";
import Soon from "./components/Soon";

class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <h1>Online Store</h1>
        <Switch>
          {/* 
normal:  <Route path="/" exact component={Home} />


          Use this way if there s a problem with the DEPLOYment:
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} /> 
          
                PUBLIC_URL will grab the root URL from that server, and 

          */}
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          {/* -------------- */}
          {/*
          Te way below is too much compared to the other ones
          
          <Route path="/about" component={About} >
            <About name="Hadi" />
          </Route> */}
          <Route path="/about" exact component={About} />
          <Route
            path="/product/:id"
            component={({ match }) => (
              <ProductInfo data={Data} id={match.params.id} />
            )}
          />
          <Route
            path="/product"
            exact
            component={() => <Product data={Data} />}
          />
          <Route
            path={() => "/main" || "/admin" || "/any-other-word"}
            component={Soon}
          />
          {/* 
           <Route path="/*" component={Soon} />
          */}
        </Switch>
      </Router>
    );
  }
}

export default App;

/**


   
          
          -The example below is not ideal for all the ways:
              <Route path="/product" component={() => <Product data={Data} />} />
          - <Product data={Data} /> to see the maping of this go to the Product.js

        

the href like for links from react, how can you reach them from
scss without having to add a class ?


 */
