import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { inputStyle, registrationStyle } from '../styles/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleRegisteration, handleEmailChange, handlePasswordChange,
      handleFirstNameChange, handleLastNameChange } from '../actions/index';
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

const Register = ({ handleRegisteration, handleFirstNameChange, handleLastNameChange, 
          handleEmailChange, handlePasswordChange, email, password, lastName, 
          firstName, msg}) => {
  let firstNameElem;
  let lastNameElem;
  let emailElem;
  let passwordElem;

  return (
      <div style={styles}>
        <MuiThemeProvider>
          <div style={registrationStyle}>
            <input className="TextField" style={inputStyle}
              placeholder=" First Name"
              value={firstName}
              ref={node => firstNameElem = node}
              onChange={({ target: { value } }) => handleFirstNameChange(value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleRegisteration(firstNameElem.value, lastNameElem.value, emailElem.value, passwordElem.value)
                }
              }}
            />
            <br />

            <input className="TextField" style={inputStyle}
              placeholder=" Last Name"
              value={lastName}
              ref={node => lastNameElem = node}
              onChange={({ target: { value } }) => handleLastNameChange(value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleRegisteration(firstNameElem.value, lastNameElem.value, emailElem.value, passwordElem.value)
                }
              }}
            />
            <br />

            <input className="TextField" style={inputStyle}
              placeholder=" Email"
              value={email}
              ref={node => emailElem = node}
              onChange={({ target: { value } }) => handleEmailChange(value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleRegisteration(firstNameElem.value, lastNameElem.value, emailElem.value, passwordElem.value)
                }
              }} 
            />
            <br />

            <input className="TextField" style={inputStyle}
              type="password"
              placeholder=" Password"
              onChange={({ target: { value } }) => handlePasswordChange(value)}
              value={password}
              ref={node => passwordElem = node}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleRegisteration(firstNameElem.value, lastNameElem.value, emailElem.value, passwordElem.value)
                }
              }} 
            />
            <br />

            <span>{msg}</span>

            <br />
            <RaisedButton label="Submit" primary={true}
              style={{ marginLeft: 120 }}
              onClick={(event) =>
                handleRegisteration(firstNameElem.value, lastNameElem.value, emailElem.value, passwordElem.value)
              } 
            />
            <br />

            <Link style={{ marginLeft: 100 }} to={`/login`}>
              Already Registered?
            </Link>
          </div>
        </MuiThemeProvider>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />

        </div>
      </div>
    );
  }

  const stateToPropsMapper = (state) => (
  {
    id: state.LoginReducer.userDetails.id,
    email: state.LoginReducer.userDetails.email,
    password: state.LoginReducer.userDetails.password,
    firstName: state.LoginReducer.userDetails.firstName,
    lastName: state.LoginReducer.userDetails.lastName,
    msg: state.LoginReducer.userDetails.msg,
    loggedIn: state.LoginReducer.userDetails.loggedIn
  }
)

const dispatchToPropsMapper = dispatch => ({
  handleFirstNameChange: (firstName) => handleFirstNameChange(dispatch, firstName),
  handleLastNameChange: (lastName) => handleLastNameChange(dispatch, lastName),
  handleEmailChange: (email) => handleEmailChange(dispatch, email),
  handlePasswordChange: (password) => handlePasswordChange(dispatch, password),
  handleRegisteration: (firstName, lastName, email, password) =>
    handleRegisteration(dispatch, firstName, lastName, email, password)
})

export const RegisterContainer = connect(stateToPropsMapper,
  dispatchToPropsMapper)(Register)

export default RegisterContainer;