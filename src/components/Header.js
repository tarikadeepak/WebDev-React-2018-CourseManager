import React from 'react'

var headerStyle = {
    background: "#99ccff",
    padding: "20px",
    marginTop: "50px",
    textAlign: "center",
    color:"red"
};

export default class Header
    extends React.Component {
    render() {
        return (
            <h2 style={headerStyle}>
                Course Manager - Your own library</h2>
        )
    }
}