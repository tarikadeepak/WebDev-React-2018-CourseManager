import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Login from './Login';
import { Link } from 'react-router-dom';
// Refrence - https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
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
  }

handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "firstName": this.state.first_name,
    "lastName":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password,
    "typeOfUser":'Professor'
    }
    if(payload.email === "" || payload.firstName === "" || payload.lastName === "" || payload.password === ""){
          this.setState({errorMsg:'All fields are mandatory to complete Registration'})
      }else{
      this.setState({errorMsg:''})
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
    )}
  //   axios.post(apiBaseUrl+'/register', payload)
  //  .then(function (response) {
  //    console.log(response);
  //    if(response.data.code == 200){
  //     //  console.log("registration successfull");
  //      var loginscreen=[];
  //      loginscreen.push(<Login parentContext={this}/>);
  //      var loginmessage = "Not Registered yet.Go to registration";
  //      self.props.parentContext.setState({loginscreen:loginscreen,
  //      loginmessage:loginmessage,
  //      buttonLabel:"Register",
  //      isLogin:true
  //       });
  //    }
  //  })
  //console.log('Registered Successfully')
  //  .catch(function (error) {
  //    console.log(error);
  //  });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div style={{marginLeft:'850px', 
                  marginRight:'100px',
                  marginTop:'50px', 
                  border: '3px solid #f1f1f1', 
                  backgroundColor:'white',
                  padding:'20px'}}>   
                 
          {/* <AppBar
             title="Register"
           /> */}
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             value={this.state.first_name}
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             onKeyDown={(e) => 
              {
                  if(e.keyCode === 13) {
                      this.handleClick() 
                  }
              }
            }
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             value={this.state.last_name}
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             onKeyDown={(e) => 
              {
                  if(e.keyCode === 13) {
                      this.handleClick() 
                  }
              }
            }
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             value={this.state.email}
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             onKeyDown={(e) => 
              {
                  if(e.keyCode === 13) {
                      this.handleClick() 
                  }
              }
            }
             />
           <br/>
           <TextField
              type = "password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              value={this.state.password}
              onChange = {(event,newValue) => this.setState({password:newValue})}
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
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           <br/>
           <Link style={{marginLeft:70}} to={`/login`}>
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
const style = {
  marginLeft: 100,
};
export default Register;