import React from 'react'

export default class ModuleListItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li className="list-group-item" style={{paddingBottom:35}}>
                {this.props.title}
                <span className="float-right">
                <i className="fa fa-trash" />&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-pencil"></i>
                </span>
            </li>
        );
    }
}