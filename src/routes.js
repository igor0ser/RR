import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import AboutPage from './components/about/AboutPage.js';
import HomePage from './components/home/HomePage.js';
import CoursesPage from './components/course/CoursePage.js';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}></IndexRoute>
		<Route path="about" component={AboutPage}></Route>
		<Route path="about" component={AboutPage}></Route>
		<Route path="courses" component={CoursesPage}></Route>
	</Route>
);
