import React from "react";
import Modal from "./Modal";

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
	}
	showModal = () => {
		this.setState({ showModal: true });
	};
	hideModal = (event) => {
		if (
			event.target.className === "modal visible" ||
			event.target.nodeName === "BUTTON"
		) {
			this.setState({ showModal: false });
		}
	};
	render() {
		return (
			<nav>
				<h1>Markdown Viewer</h1>
				<Modal show={this.state.showModal} handleClose={this.hideModal}>
					<ul>
						<h3>Renders github style markdown</h3>
						<p>
							Click{" "}
							<a
								href="https://www.markdownguide.org/cheat-sheet"
								target="_blank"
								rel="noopener noreferrer"
							>
								here
							</a>{" "}
							for a markdown cheatsheet
						</p>
					</ul>
				</Modal>
				<button type="button" onClick={this.showModal}>
					Instructions
				</button>
			</nav>
		);
	}
}

export default Nav;
