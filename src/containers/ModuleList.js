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
        this.setCourseId  = this.setCourseId.bind(this);
        this.state = {         
            courseId: '',
            module: {title: ''},
            modules: []
        };
    }
    setCourseId(courseId){
        this.setState({courseId: courseId})
    }
    componentDidMount(){
        this.setCourseId(this.props.courseId)
        
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId)
        this.findModulesByCourseId(newProps.courseId)
    }
    findModulesByCourseId(courseId){
        this.moduleService.findModulesByCourseId(courseId)
        .then((modules) => {
            this.setState({modules: modules})
        });
    }

    renderListOfModules(){
        let  modules = this.state.modules.map(function(module){
                return<ModuleListItem key={module.id} title={module.title} />
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
        console.log('render : ' + this.state.courseId)
        return (
            <div>
                <h3>Module List for Course : {this.state.courseId}</h3>
                <input className="form-control" 
                    onChange={this.titleChanged}
                    placeholder="title"/>
                    <button className="btn btn-primary btn-block"
                        onClick={this.createModule}>
                        <i className="fa fa-plus"></i>
                    </button>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}
