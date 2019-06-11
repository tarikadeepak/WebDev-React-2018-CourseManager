import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogin, handleEmailChange, handlePasswordChange } from '../actions/index';
import { inputStyle, loginStyle } from '../styles/index'
import Background from '../resources/images/library4.jpg'

var styles = {
    backgroundImage: "url(" + Background + ")",
    overflow: 'hidden',
    backgroundSize: 'cover',
    position: 'fixed',
    left: 0,
    minWidth: '100%',
    minHeight: '100%'
}
const Login = ({ handleLogin, handleEmailChange, handlePasswordChange, email, password, msg, id, loggedIn }) => {
    let emailElem;
    let passwordElem;
    if (loggedIn) {
        console.log("LoggedIn")
        let url = '/courses/' + id
        return <Redirect to={url}></Redirect>
    }

    return (
        <div style={styles}>
            <MuiThemeProvider>
                <div style={loginStyle}>
                    <input className="TextField" style={inputStyle}
                        placeholder=" Email"
                        value={email}
                        ref={node => emailElem = node}
                        onChange={({ target: { value } }) => handleEmailChange(value)}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                handleLogin(emailElem.value, passwordElem.value)
                            }
                        }} />
                    <br />
                    <input className="TextField" style={inputStyle}
                        type="password"
                        placeholder=" Password"
                        onChange={({ target: { value } }) => handlePasswordChange(value)}
                        value={password}
                        ref={node => passwordElem = node}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                handleLogin(emailElem.value, passwordElem.value)
                            }
                        }} />
                    <br />

                    {msg}

                    <RaisedButton style={{ marginLeft: 105 }} label="Submit" primary={true}
                        onClick={() => handleLogin(emailElem.value, passwordElem.value)} />
                    <br />

                    {<Link style={{ marginLeft: 100 }} to={`/registration`}>
                        Register Here
                        </Link>}
                </div>
            </MuiThemeProvider>
        </div>
    );
}

const stateToPropsMapper = (state) => (
    {
        id: state.LoginReducer.userDetails.id,
        email: state.LoginReducer.userDetails.email,
        password: state.LoginReducer.userDetails.password,
        firstName: state.LoginReducer.firstName,
        lastName: state.LoginReducer.userDetails.lastName,
        msg: state.LoginReducer.userDetails.msg,
        loggedIn: state.LoginReducer.userDetails.loggedIn

    }
)

const dispatchToPropsMapper = dispatch => ({
    handleEmailChange: (email) => handleEmailChange(dispatch, email),
    handlePasswordChange: (password) => handlePasswordChange(dispatch, password),
    handleLogin: (email, password) => handleLogin(dispatch, email, password)
})

export const LoginContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Login)

export default LoginContainer;