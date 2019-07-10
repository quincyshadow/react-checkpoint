import React from "react";

class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { product: 40, quantity: 0, products: this.props.products
		 };
		

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
	handleSubmit(event) {
		//alert("Your favorite flavor is: " + this.state.product);
		event.preventDefault();
		let index = this.state.products.findIndex(el => {
			return parseInt(el.id) === parseInt(this.state.product)
		})
		let cartItem = 
		  {product: {
		    id: this.state.product,
		    name: this.state.products[index].name,
		    priceInCents: this.state.products[index].priceInCents
		  },
		  quantity: this.state.quantity
		};
		this.props.addToCart(cartItem);
		// alert("ID: " + this.state.product + "index: " +index);
	}

	render() {
		return (
			// an array of products
			// a function that will be called when the form is submitted
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label for="quantity">Quantity</label>
						<input
							type="text"
							name="quantity"
							id="quantity"
							className="form-control"

							onChange={this.handleInputChange}
						>
						</input>
					</div>
					<div className="form-group">
						<label for="product">Product</label>
						<select
							className="form-control"
							id="product"
							name="product"
							onChange={this.handleInputChange}
							value={this.state.product}
						>
							{this.props.products.map(el => {
								return (
									<option value={el.id}>
										{el.name} {el.priceInCents}
									</option>
								);
							})}
						</select>
					</div>
					<button type="submit" className="btn btn-primary mb-2">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default AddItem;
