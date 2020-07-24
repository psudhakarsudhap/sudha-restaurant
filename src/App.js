import React from 'react';
import './App.css';
import Product from './components/Product';
import { SWEETS } from './data/sweets';
import Menu from './components/Menu';
import Cart from './components/Cart'
import { Card, CardImg, CardTitle } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sweets: SWEETS
    }
  }
  render() {
    const { sweets } = this.state;

    const menu = sweets.map((sweet) => {
      return (
        <div key={sweet.id} className="each-card">
          <Card className="border-0">
            <CardImg top width="50%" src={sweet.image} alt={sweet.name} />
            <CardTitle className="sweet-name">{sweet.name}</CardTitle>
          </Card>
          <div className="product-qty">
            <button className="plusminus">-</button>
            <span className="qty">{0}</span>
            <button className="plusminus">+</button>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <Menu />
        <Product menu={menu} />
        <Cart />
      </div>

    );
  }
}

export default App;
