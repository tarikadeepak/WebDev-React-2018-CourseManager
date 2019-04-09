import React from 'react'
import CourseService from '../services/CourseService';
import CourseCardComponent from './CourseCardComponent';
import UploadImage from './UploadImage';
import {connect } from 'react-redux'
 
export default class CourseCard
    extends React.Component {

    constructor(props) {
        super(props);
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
            userName:'',
            firstName:''
        };
    }
 
    componentDidMount() {
        this.setState({ userName: this.props.match.params.userName});
        this.setState({ firstName: this.props.firstName});
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
        let userName=this.state.userName;
        let courses = null;
         if (this.state) {
            const elements = this.state.courses.map(
                function (course) {
                    return (
                        <div className="col-3" style={{ width: '300', height: '200' }} key={course.id}>
                           <CourseCardComponent  title={course.title} userId={userName} 
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
    }
    
    keyPress(e){
        if(e.keyCode === 13){
            this.createCourse();
            
        }
     }
  
    render() {
        
        return (
            <div>
                <h3>Hello {this.state.userName} {this.state.firstName}</h3>
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
                            style={{marginTop:"10px"}}
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
const stateToPropsMapper = (loginReducer) => (
    {
        id: loginReducer.userDetails.id,
        email: loginReducer.userDetails.email,
        password: loginReducer.userDetails.password,
        firstName:loginReducer.firstName,
        lastName:loginReducer.userDetails.lastName,

    }
)

export const CourseCardContainer = connect(stateToPropsMapper,
    null)(CourseCard)