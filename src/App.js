import React from "react";
import "./App.css";
import Nav from "./components/Nav";
const marked = require("marked");

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			markdown: "",
		};

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ markdown: event.target.value });
	}
	render() {
		return (
			<div className="">
				<Nav />
				<div className="App">
					<div id="textarea">
						<h3>Markdown</h3>
						<textarea
							id="area"
							value={this.state.markdown}
							onChange={this.handleChange}
						></textarea>
					</div>
					<div id="viewer">
						<h3>Preview</h3>
						<div
							dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
						></div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
