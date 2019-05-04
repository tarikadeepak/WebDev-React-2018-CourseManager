import React from 'react'
import ModuleService from '../services/ModuleService'

export default class ModuleListItem extends React.Component{
    constructor(props){
        super(props)
        this.moduleService = ModuleService.instance;       
    }

   render(){
        var handler  =   this.props.handler;
        return(
            <li className="list-group-item" style={{paddingBottom:10}}>
                <div onClick={() => handler(this.props.moduleId,false)}>{this.props.title}</div>
                <span className="float-right">
                <i className="fa fa-trash" onClick={() => handler(this.props.moduleId,true)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-pencil"></i>
                </span>
            </li>
        );
    }
}