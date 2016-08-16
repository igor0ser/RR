import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
/*import {} from 'react-router';*/

class ManageCoursePage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			course: Object.assign({}, this.props.course),
			errors: {}
		};

		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.course.id != nextProps.course.id){
			this.setState({course: Object.assign({}, nextProps.course)});
		}
	}

	updateCourseState(event){
		var field = event.target.name;
		var course = this.state.course;
		course[field] = event.target.value;
		return this.setState({ course: course });
	}

	saveCourse(event){
		event.preventDefault();
		this.props.actions.saveCourse(this.state.course);
		this.context.router.push('/courses');
	}

	render() {
		return (
			<CourseForm 
				allAuthors={this.props.authors}
				onChange={this.updateCourseState}
				course={this.state.course}
				errors={this.state.errors}
				onSave={this.saveCourse}
			>
			</CourseForm>
		);
	}
}

ManageCoursePage.propTypes = {
	actions: PropTypes.object.isRequired,
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired
};

ManageCoursePage.contextTypes = {
	router: PropTypes.object.isRequired
};

function getCourseById(courses, id){
	return courses.filter(course => course.id === id)[0];
}

function mapStateToProps(state, ownProps){
	var courseId = ownProps.params.id;
	var course; 

	if (courseId && state.courses.length > 0) {
		course = getCourseById(state.courses, courseId);
	} else {
		course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
	}

	const authorsFormattedForDropdown = state.authors.map( author => (
		{ value: author.id, text: author.firstName + ' ' + author.lastName }
	));


	return {
		course: course,
		authors: authorsFormattedForDropdown
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
