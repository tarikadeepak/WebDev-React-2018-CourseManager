import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {inputStyle, formStyle} from '../styles/index';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      errorMsg:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(event){
  this.setState(
    { 
      email: event.target.value
    }
  )
}

handleClick(event){
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var payload={
    "firstName": this.state.first_name,
    "lastName":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password,
    "typeOfUser":'Professor'
    }
    console.log('Register Email : ', payload.email)
    if(payload.email === "" || payload.firstName === "" || payload.lastName === "" || payload.password === ""){
          this.setState({errorMsg:'All fields are mandatory to complete Registration'})
      }else{
      this.setState({errorMsg:''})
      console.log('Registering ', payload)
    fetch('http://localhost:8080/registration/', {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/JSON'}
            }
    )
    .then(response => (response.json()))
    .then(payloadResponse => {
      console.log("Response ", payloadResponse)
      if(payloadResponse.length !== 0){
        alert('User is Registered')
        console.log('Registered ', payloadResponse)
      }else{
        alert('Error occured in Registration')
      }
      window.location.href = 'login'
      this.setState({
        email: "",
        password:"",
        first_name:'',
        last_name:'',
    })
    }
    )
    .catch((error) => {
      console.log(error)
      this.setState({errorMsg:'Error occured'})
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
                value={this.state.first_name}
                onChange = {(event) => 
                  {
                    this.setState({first_name:event.target.value})}
                  }

                onKeyDown={(e) => 
                  {
                      if(e.keyCode === 13) {
                          this.handleClick() 
                      }
                  }
            }
             />
            <br/>
            <input className="TextField" style={inputStyle}
              placeholder=" Last Name"
              value={this.state.last_name}
              onChange = {(event) => 
                {
                  this.setState({last_name:event.target.value})}
                }
              onKeyDown={(e) => 
                {
                    if(e.keyCode === 13) {
                        this.handleClick() 
                    }
                }
              }
            />
            <br/>
            <input className="TextField" style={inputStyle}
              type="email"
              value={this.state.email}
              placeholder=" Email"
              onChange = {(event) => 
                {
                  this.setState({email:event.target.value})}
                }
              onKeyDown={(e) => 
                {
                    if(e.keyCode === 13) {
                        this.handleClick() 
                    }
                }
              }
            />
            <br/>
            <input className="TextField" style={inputStyle}
              placeholder=" Password"
              value={this.state.password}
              onChange = {(event) => 
                {
                  this.setState({password:event.target.value})}
                }
              onKeyDown={(e) => 
                {
                    if(e.keyCode === 13) {
                        this.handleClick() 
                    }
                }
              }
            />
            <br/>
            
            <span>{this.state.errorMsg}</span>
            
            <br/>
              <RaisedButton label="Submit" primary={true} 
                style={{marginLeft: 120}} 
                onClick={(event) => 
                  this.handleClick(event)}/>
            <br/>
            
            <Link style={{marginLeft:100}} to={`/login`}>
              Already Registered?
            </Link>
          </div>
         </MuiThemeProvider>
         <div>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
           
         </div>
      </div>
    );
  }
}
export default Register;