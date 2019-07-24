import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
class Home extends React.Component {
	constructor() {
		super(); //allows for "this to be used"
		this.state = {
			name: "Rigo",
			info: "Loading Sensitive Information...",
			age: 20
		}; // this is where we set state, or initialize the state for the component
	}

	render() {
		let newArray = [1, 2, 3, 4, 5];
		let newObject = {
			one: [1, 5, 6456, 2345345],
			two: 2
		};
		setTimeout(() => {
			this.setState({
				name: "Colby",
				info:
					"Sorry, this information has been redacted. You are now on a list.",
				age: 21
			});
		}, 5000);

		return (
			<div className="text-center mt-5">
				<h1>
					Hello, {this.state.name}! You are {this.state.age * 2} old.
				</h1>
				<h2>{this.state.info}</h2>
				<h3>{3 * 6}</h3>
				<hr /> <div>{newArray}</div>
				<hr /> <div>{newObject.one}</div>
			</div>
		);
	}
}

export { Home };
