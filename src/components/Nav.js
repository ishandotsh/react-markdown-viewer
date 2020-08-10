import React from "react";

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
	}
	render() {
		return (
			<nav>
				<h1>Markdown Viewer</h1>
				<button type="button" onClick={this.showModal}>
					Instructions
				</button>
			</nav>
		);
	}
}

export default Nav;
