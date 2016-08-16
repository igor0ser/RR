import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends Component {
	constructor(props, context) {
		super(props, context);
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}

	redirectToAddCoursePage(course, index){
		browserHistory.push('/course');
	}

	render() {
		const {courses} = this.props;
		return (
			<div>
				<h1>Courses</h1>
				<input
					type="submit"
					value="Add course"
					className="btn btn-danger btn-lg"
					onClick={this.redirectToAddCoursePage}
				/>
				<CourseList courses={courses}></CourseList>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
