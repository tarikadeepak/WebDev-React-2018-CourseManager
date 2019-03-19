import React from 'react'
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService';
import { Card, CardText, CardBody, CardTitle, CardImg, CardFooter, CardLink } from 'reactstrap';
import Axios from 'axios';
import {uploadFile} from 'react-s3';
import CourseCardComponent from './CourseCardComponent';
 
const config = {
    bucketName: 'studyawspollydt.com',
    region: 'us-east-1',
    accessKeyId: 'AKIAJPUD4AU7L5VRTILQ',
    secretAccessKey: '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',
}


export default class CourseCard
    extends React.Component {

    constructor() {
        super()
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.test = this.test.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.handler = this.handler.bind(this)
        this.state = {
            courses: [],
            course: null,
            imageSelected: [],
            imageURL: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg'
        };
    }

    componentDidMount() {
        this.findAllCourses()
    }
    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({ courses: courses });
            });
    }
    handler(courseId){
        console.log('Back to handler ' +  courseId)
        this.deleteCourse(courseId);
    }
    deleteCourse(courseId){
        this.courseService
        .deleteCourse(courseId)
        .then(() => {this.findAllCourses();})
      
    }

    test(){
        alert("sdgsdhsgdhsgd");
    }
    renderCourseRows(handler) {
        let courses = null;
        let cardInRow = 0
        if (this.state) {
            const elements = this.state.courses.map(
                function (course) {
                    let testURL = '../resources/images/react-logo.png'
                    console.log('Course Card ' + course.title)
                    return (
                        <div className="col-2" style={{ width: '100%', height: '15vw' }}>
                           <CourseCardComponent key={course.id} title={course.title} 
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
        this.fileUploadHandler()
    }
    fileSelectedHandler = event => {
        this.setState({
            imageSelected: event.target.files[0]
        })
    }
    fileUploadHandler = () => {
        uploadFile(this.state.imageSelected, config)
        .then(data =>{
            console.log(data)
            this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); })
        })
        .catch((err) =>{
            alert(err);
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <input className="form-control"
                            onChange={this.titleChanged}
                            placeholder="title" />
                            <input type="file"
                            onChange={this.fileSelectedHandler}/>  
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