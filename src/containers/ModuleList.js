import React from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'
import CourseService from '../services/CourseService'
import { Link } from 'react-router-dom'
import { CardLink } from 'reactstrap';

export default class ModuleList
    extends React.Component {
    constructor(props) {
        super(props);
        this.moduleService = ModuleService.instance;
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this)
        this.createModule = this.createModule.bind(this)
        this.setCourse = this.setCourse.bind(this);
        this.deleteModule = this.deleteModule.bind(this)
        this.handler = this.handler.bind(this)
        this.state = {
            courseId: '',
            title: '',
            module: { title: '' },
            modules: []
        };
    }
    setCourse(courseId, title) {
        this.setState({ courseId: courseId })
        this.setState({ title: title })
    }
    componentDidMount() {
        console.log("Title in DidMount " + this.props.title)
        this.setCourse(this.props.courseId, this.props.title)

    }
    componentWillReceiveProps(newProps) {
        this.setCourse(newProps.courseId, newProps.title)
        this.findModulesByCourseId(newProps.courseId)
    }
    findModulesByCourseId(courseId) {
        this.moduleService.findModulesByCourseId(courseId)
            .then((modules) => {
                this.setState({ modules: modules })
            });
    }

    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(this.props.courseId, moduleId)
            .then(() => { this.findModulesByCourseId(this.props.courseId); })
    }

    handler(moduleId) {
        console.log('Back to handler ' + moduleId)
        this.deleteModule(moduleId);
    }

    renderListOfModules(courseId, handler) {
        let modules = this.state.modules.map(function (module) {
            return <ModuleListItem key={module.id} title={module.title}
                courseId={courseId} moduleId={module.id} handler={handler} />
        }
        )
        return modules;
    }

    titleChanged(event) {
        this.setState({
            module: { title: event.target.value }
        })
    }

    createModule(event) {
        let moduleName = this.state.module.title.trim()
        if(moduleName === ''){
            alert('Please enter a module name to proceed.')
        } else {
            this.moduleService
            .createModule(this.state.courseId, this.state.module)
            .then(() => { this.findModulesByCourseId(this.state.courseId); })
        }
    }

    render() {
        var coursesLink = '/courses/' + this.props.userId
        return (
            <div>
                <h2 style={{ fontSize: 25, marginTop:'20px' }} >Welcome to {this.state.title}
                    &nbsp;&nbsp;&nbsp;
                    <Link to={coursesLink}>
                        <CardLink ahref="#" className="fa fa-trash"
                            style={{ marginLeft: '10px' }} onClick={
                                () => {
                                    this.courseService
                                        .deleteCourse(this.state.courseId)

                                }
                            } />
                    </Link>
                </h2>
                <br />
                <div class="input-group">
                <input style={{width: '240px'}} 
                    onChange={this.titleChanged}
                    placeholder="title" />
                    <span class="input-group-btn">
                    <i className="fa fa-plus" onClick={this.createModule} 
                        style={{color:'blue', fontSize:23, marginLeft:50}}></i>
                    </span>
                </div>
                <br/>
                <ul className="list-group">
                    {this.renderListOfModules(this.state.courseId, this.handler)}
                </ul>
            </div>
        );
    }
}