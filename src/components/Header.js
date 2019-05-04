import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../actions/index'

var headerStyle = {
    background: "#000066",
    padding: "15px",
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
                <button style={{float:'Right'}}
                onClick={() => this.props.logout()}>Logout</button>
            </h5>
            </div>
        )
    }
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
    logout: (email) => logout(dispatch, email)
})

export const HeaderContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Header)

export default HeaderContainer;