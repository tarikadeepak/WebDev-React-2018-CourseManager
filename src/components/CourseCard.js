import React from 'react'
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';


export default class CourseCard
    extends React.Component {

    constructor() {
        super()
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.state = {
            courses: [],
            course: null,
            imageURL : 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg'
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
    renderCourseRows() {
        let courses = null;
        let cardInRow = 0
        if (this.state) { 
            const elements = this.state.courses.map(
                function (course) {
                    let testURL='../resources/images/react-logo.png'
                    return (
                        <div className="col-3 mb-5" style={{width: '100%', height: '20vw' }}>
                            <Card style={{margin:'10px'}}>
                                <CardTitle style={{backgroundColor:'powderblue', height: '3vw', 
                                    paddingTop:'8px'}} align='center' fontSize='10' >
                                    <CourseRow key={course.title} course={course} />
                                </CardTitle>
                                <CardImg src={require('../resources/images/'+course.title+'.png')}
                                    height="200px" width="80px"/>
                                
                            </Card>

                        </div>
                    )
                }
            )
            return(
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
    render() {
        return (
            <div>
                <div className="row">
                <input className="form-control" class="col-10" id="titleField"
                    style={{ height: 50 }}
                    placeholder="AddCourse" onChange={this.titleChanged}>
                </input>
                &nbsp;&nbsp;&nbsp;
                <button class="col-2" className="btn btn-primary"
                    onClick={this.createCourse}>
                    Add
                </button>
                </div>
                <div>
                    {this.renderCourseRows()}
                </div>
            </div>
        )
    }
}