import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Pluralsight Administration</h1>
				<p>React, Resux and React Touter in ES6 for ultra-responsive web apps</p>
				<Link to="about" className="btn btn-danger btn-lg">Learn more</Link>
			</div>
		);
	}
}

export default HomePage;