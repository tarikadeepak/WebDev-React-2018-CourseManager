import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
import Header from '../components/Header';
import { Link } from 'react-router-dom'

class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true,
      loggedIn:false
    }
  }

  toggleIsLogin(){
    this.setState({
      isLogin: !this.state.isLogin,
    });
  }

  handleClick(event){
    console.log("event",event, " ", this.state.isLogin);
    var loginmessage;
    //If Condition will be satisfied when this component loads first
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<Register/>);
      loginmessage = "Already registered.Go to Login";
      this.setState({
        loginscreen:loginscreen,
        loginmessage:loginmessage,
        buttonLabel:"Login",
        isLogin:false
      })
    }
    else{
      var loginscreen=[];
      loginscreen.push(<Login/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
        loginscreen:loginscreen,
        loginmessage:loginmessage,
        buttonLabel:"Register",
        isLogin:true
      })
    }
  }
  
  componentWillMount(){
    console.log("Inside component Will Mount" )
    var loginscreen=[];
    loginscreen.push(<Login/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
      loginscreen:loginscreen,
      loginmessage:loginmessage
    })
  }

  render() {
    console.log('Inside Loginscreen ', this.state.loggedIn)
    return (
      <div className="loginscreen" >
        <div style={{marginLeft:'850px', 
                  marginRight:'100px',
                  marginTop:'50px', 
                  border: '3px solid #f1f1f1', 
                  backgroundColor:'white',
                  padding:'20px'}}>   
                  {this.state.loginscreen}
          <div >
            <Link onClick={this.toggleIsLogin} to={``}>
              {this.state.loginmessage}
            </Link>
            <MuiThemeProvider>
              <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} 
                          onClick={(event) => this.handleClick(event)}/>
              </div>
              <br/>
              <br/>
            </MuiThemeProvider>
          </div>
        </div>
        <br/>
              
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Loginscreen;