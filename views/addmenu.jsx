var React = require('react');
var http = require('http');
var Request = require('react-http-request');
var $ = require('jquery');

class AddMenuItem extends React.Component {
	render() {
		return (
			<div>
				<div>
					{this.props.item.name}
				</div>
				<div>
					{this.props.item.price}
				</div>
				<div>
					{this.props.item.description}
				</div>
			</div>
		)
	}
}

class AddMenuComponent extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	// render(){
	// 	return (
	// 		<Request
	// 	    url='https://localhost:5000/data'
	// 	    method='get'
	// 	    accept='application/json'
	// 	    verbose={true}
	// 	  > {
	// 	      ({error, result, loading}) => {
	// 	        if (loading) {
	// 	          return <div>loading...</div>;
	// 	        } else {
	// 	          return <div>{ JSON.stringify(result) }</div>;
	// 	        }
	// 	      }
	// 	    }
	// 	  </Request>
	//   )
	// }

	
}




module.exports = AddMenuComponent;


