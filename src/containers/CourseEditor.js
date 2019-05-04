import React from 'react'
import ModuleList from './ModuleList'
import WidgetListContainer from './WidgetList'
export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {courseId: '',
                      title: '',
                      userId: '',
                      viewForm: false,
                      moduleId: '',
                      WidgetListContainer}
        this.selectCourse = this.selectCourse.bind(this)
        this.handler = this.handler.bind(this)
    }
    
    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId,
            this.props.match.params.title,
            this.props.match.params.userId)
    }
    selectCourse(courseId,title,userId) {
        this.setState({ courseId: courseId });
        this.setState({ title: title, userId:userId });
    }

    handler(moduleId, isDelete) {
        let tempModuleId=moduleId;
        console.log('Module Id  ', tempModuleId,' IsDelete ', isDelete)
        
        if (isDelete === false){
            this.setState({viewForm: true,
                        WidgetListContainer: <WidgetListContainer moduleId={tempModuleId} />
              })
        } 
    }

    render() {
        console.log('Hello')
        return (
            <div>
                <div className="row" style={{marginTop:'20px' }}>
                    <div className="col-3">
                        <ModuleList courseId={this.state.courseId} title={this.state.title} 
                        userId={this.state.userId} 
                        handler={this.handler}/>
                    </div>
                    <div className="col-9">
                    {(this.state.viewForm) ?
                        this.state.WidgetListContainer : ''}
                    </div>
                    
                </div>
            </div>
        )
    }
}