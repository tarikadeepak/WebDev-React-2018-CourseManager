import React from 'react'

class HelloWorld extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <h1>Hello World {this.props.message}</h1>
        );
    }
}
export default HelloWorld