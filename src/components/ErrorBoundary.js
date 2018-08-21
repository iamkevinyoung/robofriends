import React, {Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.sestState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <h1> Oops. That is not good </h1>
		}
	//the child is the Cardlist (can be seen in the App.js render function)
	return this.props.children
	}
}

export default ErrorBoundary;