import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default class Greeting extends React.Component {
	render() {
		const name = "A Name is here";

		return <h4>The name is: {this.props.name}</h4>;
	}
}
