import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {courseId: '',
                      title:''}
        this.selectCourse = this.selectCourse.bind(this)
    }
    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId,this.props.match.params.title)
    }
    selectCourse(courseId,title) {
        this.setState({ courseId: courseId });
        this.setState({ title: title });
    }

    render() {
        return (
            <div>
                <div className="row" style={{marginTop:'20px' }}>
                    <div className="col-3">
                        <ModuleList courseId={this.state.courseId} title={this.state.title} />
                    </div>
                    <div className="col-9">
                        <LessonTabs />
                    </div>
                </div>
            </div>
        )
    }
}