import React, { Component } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/style/theme';

// import Container from '@mui/material/Container';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import Basket from './components/Basket';
import data from './data';

const { products } = data;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onAdd(product) {
    const foundProduct = this.state.cartItems.find(
      (item) => item.id === product.id
    );

    if (foundProduct) {
      this.setState({
        cartItems: this.state.cartItems.map((item) =>
          item.id === product.id
            ? { ...foundProduct, qty: foundProduct.qty + 1 }
            : item
        ),
      });
    } else {
      this.setState({
        cartItems: [...this.state.cartItems, { ...product, qty: 1 }],
      });
    }
  }

  onRemove(product) {
    const foundProduct = this.state.cartItems.find(
      (item) => item.id === product.id
    );

    if (foundProduct.qty === 1) {
      this.setState({
        cartItems: this.state.cartItems.filter(
          (item) => item.id !== product.id
        ),
      });
    } else {
      this.setState({
        cartItems: this.state.cartItems.map((item) =>
          item.id === product.id
            ? { ...foundProduct, qty: foundProduct.qty - 1 }
            : item
        ),
      });
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header countCartItems={this.state.cartItems.length} />
        <Main products={products} onAdd={this.onAdd}>
          <Basket
            onAdd={this.onAdd}
            onRemove={this.onRemove}
            cartItems={this.state.cartItems}
          />
        </Main>
        <Footer author='JINOK' />
      </ThemeProvider>
    );
  }
}

export default App;
