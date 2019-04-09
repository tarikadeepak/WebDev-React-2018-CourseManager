import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleClick, handleEmailChange, handlePasswordChange } from '../actions/index';

const Login = ({ handleClick, handleEmailChange, handlePasswordChange, email, password, firstName, msg }) => {
    let emailElem;
    let passwordElem;
    console.log("Hello ", firstName)
    return (
        <div>
            <MuiThemeProvider>

                <div style={{
                    marginLeft: '850px',
                    marginRight: '100px',
                    marginTop: '50px',
                    border: '3px solid #f1f1f1',
                    backgroundColor: 'white',
                    padding: '20px'
                }}>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input class="form-control"
                            placeholder="email"
                            value={email}
                            ref={node => emailElem = node}
                            onChange={({ target: { value } }) => handleEmailChange(value)}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    handleClick(emailElem.value, passwordElem.value)
                                }
                            }}
                        />
                    </div>
                    <br />
                    <br />
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                        <input
                            type="password"
                            placeholder="password"
                            onChange={({ target: { value } }) => handlePasswordChange(value)}
                            value={password}
                            ref={node => passwordElem = node}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    handleClick(emailElem.value, passwordElem.value)
                                }
                            }}
                        />
                    </div>
                    <br />
                    {msg}
                    <br />
                    <RaisedButton style={{ marginLeft: 105 }} label="Submit" primary={true}
                        onClick={() => handleClick(emailElem.value, passwordElem.value)} />
                    <br />
                    {<Link style={{ marginLeft: 100 }} to={`/registration`}>
                        Register Here
                        </Link>}
                </div>
            </MuiThemeProvider>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
}

const stateToPropsMapper = (loginReducer) => (
    {
        id: loginReducer.userDetails.id,
        email: loginReducer.userDetails.email,
        password: loginReducer.userDetails.password,
        firstName: loginReducer.firstName,
        lastName: loginReducer.userDetails.lastName,
        msg: loginReducer.userDetails.msg

    }
)

const dispatchToPropsMapper = dispatch => ({
    handleEmailChange: (email) => handleEmailChange(dispatch, email),
    handlePasswordChange: (password) => handlePasswordChange(dispatch, password),
    handleClick: (email, password) => handleClick(dispatch, email, password)
})

export const LoginContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Login)

export default LoginContainer;
