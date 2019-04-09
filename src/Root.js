import { Provider, connect } from 'react-redux'
import CourseEditor from './containers/CourseEditor';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CourseCard from './components/CourseCard';
import Background from './resources/images/library4.jpg'
import Register from './AppLogin/Register';
import Login from './AppLogin/Login';
import {App} from './AppLogin/Login';
import Login2 from './AppLogin/Login2';
import React from 'react'
import { createStore } from 'redux';
import {LoginReducer} from './reducers/LoginReducer'
//import {LoginReducer} from './AppLogin/Login'

export let store = createStore(LoginReducer);

var styles = {
   
        backgroundImage: "url(" + Background + ")",
        backgroundSize: 'cover',
        overflow: 'hidden',
        height: '100%',         
        backgroundSize:'100%'
}
export  const Root = ({store}) =>(
    <Provider store={store}>
    <Router>
        <div>
<Route exact path="/login"
component={App} />
<Route exact path="/login2"
component={Login2} />
<Route exact path="/registration"
component={Register} />
<div style={styles}>
                    <Route exact path="/courses/:userName"
                        component={CourseCard} />
                    <Route exact path="/course/:userId/:courseId/:title"
                        component={CourseEditor} />
                    </div>
                    </div>
</Router>
</Provider>
)