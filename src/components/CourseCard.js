import React from 'react'
import CourseService from '../services/CourseService';
import CourseCardComponent from './CourseCardComponent';
import UploadImage from './UploadImage';
 
export default class CourseCard
    extends React.Component {

    constructor() {
        super()
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.handler = this.handler.bind(this)
        this.state = {
            courses: [],
            course: { title: ''},
            titleLable: 'title',
            imageSelected: [],
        };
    }

    componentWillMount() {
        this.findAllCourses()
    }

    componentDidMount() {
        this.findAllCourses()
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({ 
                    courses: courses,
                    course: { title: ''},
                 });
            });
    }

    handler(courseId){
        this.deleteCourse(courseId);
    }
    
    deleteCourse(courseId){
        this.courseService
        .deleteCourse(courseId)
        .then(() => {this.findAllCourses();})
      
    }

    renderCourseRows(handler) {
        let courses = null;
         if (this.state) {
            const elements = this.state.courses.map(
                function (course) {
                    return (
                        <div className="col-3" style={{ width: '300', height: '200' }} key={course.id}>
                           <CourseCardComponent  title={course.title} 
                            courseId={course.id} handler = {handler} /> 
                        </div>
                    )
                }
            )
            return (
                <div className="row">
                    {elements}
                </div>
            )
        }
        return (
            courses
        )
    }

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        })
    }

    createCourse() {
        this.courseService
        .createCourse(this.state.course)
        .then(() => { this.findAllCourses(); })
        
        console.log("Display1")
    }
    
    keyPress(e){
        if(e.keyCode === 13){
            this.createCourse();
        }
     }
  
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <input className="form-control"
                            value={this.state.course.title}
                            onChange={this.titleChanged}
                            placeholder={this.state.titleLable} 
                            onKeyDown={(e) => {
                                if(e.keyCode === 13) {
                                    this.createCourse()}
                                }
                                }/>
                        {/* <UploadImage title={this.state.course.title}/>                             */}
                        <button className="btn btn-primary btn-block"
                            onClick={this.createCourse}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="col-10">
                        {this.renderCourseRows(this.handler)}
                    </div>
                </div>
            </div>
        )
    }
}