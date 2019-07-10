import React from "react";
import CartItem from "./CartItem";

// render() {
// 								product={el.product.name}
// 								price={el.product.priceInCents}
// 								quantity={el.quantity}

class CartItems extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Cart Items</h1>
				<div className="list-group">
					{this.props.list.map(el => {
						return (
							<CartItem
								product={el.product.name}
								price={(el.product.priceInCents/100).toLocaleString("en-US", {style:"currency", currency:"USD"})}
								quantity={el.quantity}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default CartItems;
