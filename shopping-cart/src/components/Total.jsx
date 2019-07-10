import React from 'react'

class Total extends React.Component {

  render() {
    return (
	<div className="container">
	  <div className="row">
	  	<div className="col-12">
	  		
	    <h3>Total: {this.props.total}</h3>
	  	</div>
	  </div>
	</div>
    )
  }

}

export default Total;