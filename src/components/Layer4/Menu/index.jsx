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
		const menuClass = classnames(css.menu);
		return (
			<div className={menuClass}>
				<div className={css.about}>About</div>
				<div className={css.approach}>Approach</div>
				<div className={css.home}>Home</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(MyComponent);
