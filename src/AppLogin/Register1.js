import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { inputStyle, formStyle } from '../styles/index';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      errorMsg: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        email: event.target.value
      }
    )
  }

  handleClick(event) {
    console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    //To be done:check for empty values before hitting submit
    var payload = {
      "firstName": this.state.first_name,
      "lastName": this.state.last_name,
      "email": this.state.email,
      "password": this.state.password,
      "typeOfUser": 'Professor'
    }
    console.log('Register Email : ', payload.email)
    if (payload.email === "" || payload.firstName === "" || payload.lastName === "" || payload.password === "") {
      this.setState({ errorMsg: 'All fields are mandatory to complete Registration' })
    } else {
      this.setState({ errorMsg: '' })
      console.log('Registering ', payload)
      fetch('https://webdev-summer-2018-dt.herokuapp.com/registration/', {
        method: 'post',
        body: JSON.stringify(payload),
        headers: {
          'content-type': 'application/JSON'
        }
      }
      )
        .then(response => (response.json()))
        .then(payloadResponse => {
          console.log("Response ", payloadResponse)
          if (payloadResponse.length !== 0) {
            alert('User is Registered')
            console.log('Registered ', payloadResponse)
          } else {
            alert('Error occured in Registration')
          }
          window.location.href = 'login'
          this.setState({
            email: "",
            password: "",
            first_name: '',
            last_name: '',
          })
        }
        )
        .catch((error) => {
          console.log(error)
          this.setState({ errorMsg: 'Error occured' })
        })
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div style={formStyle}>
            <input className="TextField" style={inputStyle}
              placeholder=" First Name"
              value={firstName}
              ref={node => firstNameElem = node}
              onChange={({ target: { value } }) => handleFirstNameChange(value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleClick(firstNameElem, lastNameElem, emailElem.value, passwordElem.value)
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
                  handleClick(firstNameElem, lastNameElem, emailElem.value, passwordElem.value)
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
                  handleClick(firstNameElem, lastNameElem, emailElem.value, passwordElem.value)
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
                  handleClick(firstNameElem, lastNameElem, emailElem.value, passwordElem.value)
                }
              }} 
            />
            <br />

            <span>{this.state.errorMsg}</span>

            <br />
            <RaisedButton label="Submit" primary={true}
              style={{ marginLeft: 120 }}
              onClick={(event) =>
                handleClick(firstNameElem, lastNameElem, emailElem.value, passwordElem.value)
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
  handleClick: (firstName, lastName, email, password) =>
    handleClick(dispatch, firstName, lastName, email, password)
})

export const RegisterContainer = connect(stateToPropsMapper,
  dispatchToPropsMapper)(Register)

export default RegisterContainer;