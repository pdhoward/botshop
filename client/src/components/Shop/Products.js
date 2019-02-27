import React, { Component }         from "react";
import Product                      from "./Product";
import LoadingProducts              from "./loaders/Products";
import NoResults                    from "./emptystates/NoResults";
import {CSSTransition, 
        TransitionGroup}            from "react-transition-group";

class Products extends Component {
  constructor() {
    super();
  }
  render() {
    let productsData;
    let term = this.props.searchTerm;
    let x;

    function searchingFor(term) {
      return function(x) {
        return x.firstname.toLowerCase().includes(term.toLowerCase()) || !term;
      };
    }
    productsData = this.props.productsList
      .filter(searchingFor(term))
      .map(product => {
        return (
          <Product
            key={product.id}
            price={product.price}
            name={product.name}
            image={product.avatarURL}
            id={product.id}
            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            updateQuantity={this.props.updateQuantity}
            openModal={this.props.openModal}
          />
        );
      });

    // Empty and Loading States
    let view;
    if (productsData.length <= 0 && !term) {
      view = <LoadingProducts />;
    } else if (productsData.length <= 0 && term) {
      view = <NoResults />;
    } else {
      view = (
        <TransitionGroup>
          <CSSTransition
            transitionName="fadeIn"            
            timeout={{enter: 500, exit: 300}}
            component="div"
            className="products"
          >
          <div key="transition-group-content" >
            {productsData}
          </div>
          </CSSTransition>
        </TransitionGroup>
      );
    }
    return <div className="products-wrapper">{view}</div>;
  }
}

export default Products;
