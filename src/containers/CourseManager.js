import React from 'react';
import CourseEditor from './CourseEditor';
import CourseList from './CourseList'
import Header from '../components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CourseCard from '../components/CourseCard';

export default class CourseManager
    extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Header></Header>
                    <Route exact path="/courses"
                        component={CourseCard} />
                    <Route exact path="/course/:courseId/:title"
                        component={CourseEditor} />
                </div>
            </Router>
        );
    }
}