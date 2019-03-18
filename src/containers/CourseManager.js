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
                    <CourseCard></CourseCard>
                     
                    <Route path="/course/:courseId"
                        component={CourseEditor}>
                    </Route>
                    {/* <CourseList />
                    <div className="card-deck">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div> */}
                </div>
            </Router>
        );
    }
}