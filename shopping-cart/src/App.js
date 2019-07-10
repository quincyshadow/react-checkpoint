import React from "react";
import "./App.css";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";
import Total from "./components/Total";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
        { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
        { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
        { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
        { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
        { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
        { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
        { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
        { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 }
      ],
      cartItemsList: [
        {
          id: 1,
          product: { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
          quantity: 1
        },
        {
          id: 2,
          product: {
            id: 41,
            name: "Heavy Duty Concrete Plate",
            priceInCents: 499
          },
          quantity: 2
        },
        {
          id: 3,
          product: {
            id: 42,
            name: "Intelligent Paper Knife",
            priceInCents: 1999
          },
          quantity: 1
        }
      ],
      total: 0
    };

    this.addToCart = this.addToCart.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }
  componentDidMount(){
    this.getTotal()
  }

  getTotal(){
      let total = 0;
      this.setState(updater => {
      updater.cartItemsList.forEach(el =>
        {
          total = parseFloat(total) + parseFloat(el.product.priceInCents) * parseFloat(el.quantity)
        })
      return {total: (total/100).toLocaleString("en-US", {style:"currency", currency:"USD"})}
      })
  }

  addToCart(object) {
    let index = this.state.cartItemsList.findIndex(el => {
      return parseInt(el.product.id) === parseInt(object.product.id);
    });
    if (index === -1) {
      this.setState(updater => {
        const cartItemsList = updater.cartItemsList.concat(object);

        return { cartItemsList };
      });
    } else if (index > -1) {
      this.setState(updater => {
        updater.cartItemsList[index].quantity = parseFloat(updater.cartItemsList[index].quantity) + parseFloat(object.quantity);
        return {cartItemsList: updater.cartItemsList}
      })
    } else {
      alert('Error. Couldnt find that item.'+index)
    }
    this.getTotal();
  }

  //cartItemsList[0][product][name]
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems list={this.state.cartItemsList} />
        <Total total={this.state.total} />
        <AddItem products={this.state.products} addToCart={this.addToCart} />
        <CartFooter copyright="2016" />
      </div>
    );
  }
}

export default App;
