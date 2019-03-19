import React from 'react'
import ModuleService from '../services/ModuleService'

export default class ModuleListItem extends React.Component{
    constructor(props){
        super(props)
        this.moduleService = ModuleService.instance;
        this.deleteModule = this.deleteModule.bind(this)
        
    }
    deleteModule(event){
        console.log('Inside DeleteModule')
        console.log('Module ID ', this.props.moduleId)
        console.log('Course ID ', this.props.courseId)
        this.moduleService
        .deleteModule(this.props.courseId, this.props.moduleId)
        .then(() => {this.findModulesByCourseId(this.props.courseId);})
      
    }
    componentWillReceiveProps(newProps){
        this.findModulesByCourseId(newProps.courseId)
    }
    findModulesByCourseId(courseId){
        console.log('Inside Find Module')
        this.moduleService.findModulesByCourseId(courseId)
        .then((modules) => {
            this.setState({modules: modules})
        });
    }
    render(){
        var handler  =   this.props.handler;
        return(
            <li className="list-group-item" style={{paddingBottom:35}}>
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