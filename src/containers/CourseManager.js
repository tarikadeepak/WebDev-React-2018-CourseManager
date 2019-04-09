import React from 'react';
import CourseEditor from './CourseEditor';
import Header from '../components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CourseCardContainer from '../components/CourseCard';
import Background from '../resources/images/library4.jpg'
import LoginContainer from '../AppLogin/Login';
import Register from '../AppLogin/Register';
import Login from '../AppLogin/Login';

var styles = {
   
        backgroundImage: "url(" + Background + ")",
        backgroundSize: 'cover',
        overflow: 'hidden',
        height: '100%',         
        backgroundSize:'100%'
}
export default class CourseManager
    extends React.Component {
        constructor(props){
            super(props);
            this.state={
              loginPage:[],
              CourseManager:[]
            }
          }
          
    render() {
        return (
            <Router>
                <div style={styles}>
                <div className="container-fluid" >
                    <Header></Header>
                    <Route exact path="/login"
                        component={LoginContainer} />
                        <Route exact path="/registration"
                        component={Register} />
                    <div style={styles}>
                    <Route exact path="/courses/:userId"
                        component={CourseCardContainer} />
                    <Route exact path="/course/:userId/:courseId/:title"
                        component={CourseEditor} />
                    </div>
                </div>
                </div>
            </Router>
        );
    }
}