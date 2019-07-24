import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Greeting from "./Greeting";

//create your first component
class Other extends React.Component {
	render() {
		const name = "Variable";

		return (
			<div>
				<Greeting name={name} />
				<Greeting name="Paola" />
				<Greeting name="Luis" />
				<Greeting name="JP" />
				<Greeting name="Jose" />
				<Greeting name="Naila" />
			</div>
		);
	}
}

export { Other };
