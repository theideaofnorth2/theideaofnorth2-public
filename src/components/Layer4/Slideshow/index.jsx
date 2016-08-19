import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from './Slider';

export class MyComponent extends Component {
	constructor(props) {
		super(props);
		this.initialized = true;
	}
	render() {
		const content = this.props.interviews.data.map(interview => Object.assign(
			<Slider
				key={interview._id}
				interview={interview}
				display={interview._id === this.props.interviews.selectedInterviewId}
			/>
		));
		return (
			<div>
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state) => Object.assign({
	interviews: state.interviews,
});

export default connect(mapStateToProps)(MyComponent);
