import React from 'react';
import { connect } from 'react-redux'
import CourseEditor from './CourseEditor';
import HeaderContainer from '../components/Header'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {CourseCardContainer} from '../components/CourseCard';
import LoginContainer from '../AppLogin/Login';
import Register from '../AppLogin/Register';

var styles = {
        overflow: 'hidden',
        height: '100%',         
        backgroundSize:'100%'
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('Private Route ', rest.isAuthenticated)
    return(
    <Route {...rest} render={(props) => (
        rest.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
)}

const CourseManager = ({loggedIn, firstName}) =>{
        console.log('Private Route A ', loggedIn, ' ', firstName)
        let isAuthenticated = loggedIn
        console.log('Private Route B ', isAuthenticated)
        return (
            <Router>
                <div style={styles}>
                <div className="container-fluid" >
                    <HeaderContainer></HeaderContainer>
                    <Route exact path="/login"
                        component={LoginContainer} />
                    <Route exact path="/registration"
                        component={Register} />
                    <div style={styles}>
                    <PrivateRoute exact path="/courses/:userId"
                        component={CourseCardContainer} isAuthenticated={isAuthenticated}/>
                    <PrivateRoute exact path="/course/:userId/:courseId/:title"
                        component={CourseEditor}  isAuthenticated={isAuthenticated}/>
                    </div>
                </div>
                </div>
            </Router>
        )
}

const stateToPropsMapper = (state) => (
    {
        id: state.LoginReducer.userDetails.id,
        email: state.LoginReducer.userDetails.email,
        password: state.LoginReducer.userDetails.password,
        firstName:state.LoginReducer.userDetails.firstName,
        lastName:state.LoginReducer.userDetails.lastName,
        loggedIn:state.LoginReducer.userDetails.loggedIn
    }
)

export const App = connect(stateToPropsMapper,
    null)(CourseManager)

export default App