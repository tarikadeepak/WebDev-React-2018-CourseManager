import React from 'react'
import ModuleService from '../services/ModuleService'

export default class ModuleListItem extends React.Component{
    constructor(props){
        super(props)
        this.moduleService = ModuleService.instance;
        this.deleteModule = this.deleteModule.bind(this)
        
    }
    deleteModule(event){
       this.moduleService
        .deleteModule(this.props.courseId, this.props.moduleId)
        .then(() => {this.findModulesByCourseId(this.props.courseId);})
      
    }
    componentWillReceiveProps(newProps){
        this.findModulesByCourseId(newProps.courseId)
    }
    findModulesByCourseId(courseId){
        this.moduleService.findModulesByCourseId(courseId)
        .then((modules) => {
            this.setState({modules: modules})
        });
    }
    render(){
        var handler  =   this.props.handler;
        return(
            <li className="list-group-item" style={{paddingBottom:10}}>
                {this.props.title}
                <span className="float-right">
                <i className="fa fa-trash" onClick={() => handler(this.props.moduleId)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-pencil"></i>
                </span>
            </li>
        );
    }
}