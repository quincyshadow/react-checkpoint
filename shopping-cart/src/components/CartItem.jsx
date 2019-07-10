import React from 'react'

class CartItem extends React.Component {

  render() {
    return (
	<div className="list-group-item">
	  <div class="row">
	    <div class="col-md-8">{this.props.product}</div>
	    <div class="col-md-2">{this.props.price}</div>
	    <div class="col-md-2">{this.props.quantity}</div>
	  </div>
	</div>
    )
  }

}

export default CartItem;