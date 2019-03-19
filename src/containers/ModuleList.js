import React from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'

export default class ModuleList 
    extends React.Component{
    constructor(props){
        super(props);
        this.moduleService = ModuleService.instance;
        this.titleChanged = this.titleChanged.bind(this)
        this.createModule = this.createModule.bind(this)
        this.setCourse  = this.setCourse.bind(this);
        this.deleteModule = this.deleteModule.bind(this)
        this.handler = this.handler.bind(this)
        this.state = {         
            courseId: '',
            title: '',
            module: {title: ''},
            modules: []
        };
    }
    setCourse(courseId, title){
        this.setState({courseId: courseId})
        this.setState({title: title})
    }
    componentDidMount(){
        console.log("Title in DidMount " + this.props.title)
        this.setCourse(this.props.courseId, this.props.title)
        
    }
    componentWillReceiveProps(newProps){
        this.setCourse(newProps.courseId,newProps.title)
        this.findModulesByCourseId(newProps.courseId)
    }
    findModulesByCourseId(courseId){
        this.moduleService.findModulesByCourseId(courseId)
        .then((modules) => {
            this.setState({modules: modules})
        });
    }
    deleteModule(moduleId){
        console.log('Inside DeleteModule')
        console.log('Module ID ', moduleId)
        console.log('Course ID ', this.props.courseId)
        this.moduleService
        .deleteModule(this.props.courseId, moduleId)
        .then(() => {this.findModulesByCourseId(this.props.courseId);})
      
    }
    handler(moduleId){
        console.log('Back to handler ' +  moduleId)
        this.deleteModule(moduleId);
    }
    
    renderListOfModules(courseId, handler){
        let  modules = this.state.modules.map(function(module){
                return<ModuleListItem key={module.id} title={module.title} 
                            courseId={courseId} moduleId={module.id} handler = {handler} />
            }
        )
        return modules;
    }

    titleChanged(event){
        this.setState({
            module: {title:event.target.value}
        })
    }
    createModule(event){
        console.log(this.state.module)
        this.moduleService
        .createModule(this.state.courseId, this.state.module)
        .then(() => {this.findModulesByCourseId(this.state.courseId);})
      
    }
    render() {
        return (
            <div>
                <h3>Welcome to {this.state.title}</h3>
                <input className="form-control" 
                    onChange={this.titleChanged}
                    placeholder="title"/>
                    <button className="btn btn-primary btn-block"
                        onClick={this.createModule}>
                        <i className="fa fa-plus"></i>
                    </button>
                <ul className="list-group">
                    {this.renderListOfModules(this.state.courseId, this.handler)}
                </ul>
            </div>
        );
    }
}
