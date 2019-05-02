import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../actions/index'

var headerStyle = {
    background: "#000066",
    padding: "15px",
    //marginTop: "5px",
    margin: '0px',
    width:'100%',
    textAlign: "Left",
    color:"white",
    display:'inline-block'
};

class Header
    extends React.Component {
    render() {
        return (<div>
            <h5 style={headerStyle}>
                Course Manager - Your own library
                <h6 style={{paddingTop:10}}><button style={{float:'Right'}}
                onClick={() => this.props.logout()}>Logout</button></h6>
            </h5>
            </div>
        )
    }
}

const stateToPropsMapper = (state) => (
    {
        // id: state.userDetails.id,
        // email: state.userDetails.email,
        // password: state.userDetails.password,
        // firstName: state.userDetails.firstName,
        // lastName: state.userDetails.lastName,
        // msg: state.userDetails.msg,
        // loggedIn: state.userDetails.loggedIn

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
    logout: (email) => logout(dispatch, email)
})

export const HeaderContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Header)

export default HeaderContainer;