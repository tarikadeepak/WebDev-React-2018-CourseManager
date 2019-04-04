import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Header from '../components/Header';
import CourseManager from '../containers/CourseManager'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            welcome: '',
            errorMsg:'',
            loginSuccessful:'N',
            userName:'',
            id:''
        }
    }

    handleClick(event) {
        console.log("Email ", this.state.email)
        var self = this;
        var payload = {
            "id":"",
            "firstName": "",
            "lastName": "",
            "email": this.state.email,
            "password": this.state.password,
            "typeOfUser": ""
        }
        if(payload.email === "" || payload.password === ""){
            this.setState({errorMsg:'Email or password is missing'})
        }else{
        this.setState({errorMsg:''})
        fetch('http://localhost:8080/login/', {
            method: 'post',
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/JSON'
            }
        }
        )
        .then(response => (response.json()))
            .then(payloadResponse => {
                if (payloadResponse.length !== 0){
                    this.setState({
                        welcome: 'Welcome ' + payloadResponse[0].firstName,
                        email: "",
                        password:"",
                        loginSuccessful:'Y',
                        id:payloadResponse[0].id
                    })
                    var urlCourses ='/courses/' + this.state.id
                    window.location.href = urlCourses   
                }else{
                    this.setState({errorMsg:'Invalid Credentials'})
                }
        }
            )
        }
    }
    
    render() {
        return (
            <div>
                 {this.state.login}
                <MuiThemeProvider>
                    <h1>{this.state.welcome}</h1>
                    <div style={{marginLeft:'850px', 
                  marginRight:'100px',
                  marginTop:'50px', 
                  border: '3px solid #f1f1f1', 
                  backgroundColor:'white',
                  padding:'20px'}}>   
                
                    
                        <TextField 
                            hintText="Enter your email"
                            floatingLabelText="Email"
                            onChange={(event, newValue) => this.setState({ email: newValue })}
                            value={this.state.email}
                            onKeyDown={(e) => 
                                {
                                    if(e.keyCode === 13) {
                                        this.handleClick() 
                                    }
                                }
                            }/>
                           
                        <br />
                        
                        <TextField
                            type="password"
                            hintText="Enter your password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                            value={this.state.password}
                            onKeyDown={(e) => 
                                {
                                    if(e.keyCode === 13) {
                                        this.handleClick()
                                    }
                                }
                            }/>
                            
                        <br/>
                        <span>{this.state.errorMsg}</span>
                        <br/>
                        
                            <RaisedButton style={{marginLeft:105}} label="Submit" primary={true}  
                                    onClick={(event) => this.handleClick(event)} />
            
            <br/>
            <Link  style={{marginLeft:100}} to={`/registration`}>
              Register Here
            </Link>
                        
                    </div>
                </MuiThemeProvider>
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
    margin: 120,
};



export default Login;