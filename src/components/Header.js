import React from 'react'

var headerStyle = {
    background: "#000066",
    padding: "15px",
    //marginTop: "5px",
    marginLeft: '0px',
    width:'100%',
    textAlign: "Left",
    color:"white",
};

export default class Header
    extends React.Component {
    render() {
        return (
            <h5 style={headerStyle}>
                Course Manager - Your own library</h5>
        )
    }
}