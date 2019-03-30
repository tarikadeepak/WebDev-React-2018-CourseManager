import React from 'react';
import CourseEditor from './CourseEditor';
import Header from '../components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CourseCard from '../components/CourseCard';
import Background from '../resources/images/library2.jpg'

var styles = {
   
        backgroundImage: "url(" + Background + ")",
        backgroundSize: 'cover',
        overflow: 'hidden',
    
}
export default class CourseManager
    extends React.Component {
    render() {
        return (
            <Router><section style={styles}>
                <div className="container-fluid" >
                    <Header></Header>
                    <Route exact path="/courses"
                        component={CourseCard} />
                    <Route exact path="/course/:courseId/:title"
                        component={CourseEditor} />
                </div>
                </section>
            </Router>
        );
    }
}