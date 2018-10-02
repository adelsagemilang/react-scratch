import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import './style.css'

export default class HelloReact extends Component {
	render() {
		return (
			<div className="hello">Hello React</div>
		);
	}
}

render(<HelloReact />, document.getElementById('root'));
