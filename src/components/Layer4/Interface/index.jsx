import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import css from './css';

export class MyComponent extends Component {
	constructor(props) {
		super(props);
		this.initialized = true;
	}
	render() {
		const interfaceClass = classnames(css.interface, {
			[css.displayed]: this.props.map.animating || this.props.exploration.animating,
		});
		return (
			<div className={interfaceClass}></div>
		);
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(MyComponent);
