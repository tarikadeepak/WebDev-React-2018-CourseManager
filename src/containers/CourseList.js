import React from 'react'
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService';

export default class CourseList
    extends React.Component {
    constructor() {
        super()
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.state = {
            courses: [],
            course: null,
        };
    }
    componentDidMount(){
        this.findAllCourses()
    }
    findAllCourses() {
        this.courseService.findAllCourses()
        .then((courses) => {
            this.setState({courses: courses});
        });
    }
    renderCourseRows(){
        let courses=null;
        if (this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow key={course.id} course={course}/>
                }
            )
        }
        return (
            courses
        )
    }
    titleChanged(event){
        this.setState({
            course: {title: event.target.value}
        })
    }
    createCourse(){
       this.courseService
        .createCourse(this.state.course)
        .then(() => {this.findAllCourses();})
    }
    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className='table'>
                        <thead><tr><th>Title</th></tr>
                            <tr>
                                <th><input className = "form-control" id="titleField" 
                                        placeholder="AddCourse" onChange={this.titleChanged}>
                                    </input>
                                </th>
                                <th><button className = "btn btn-primary" onClick={this.createCourse}>
                                        Add
                                    </button>
                                </th>
                            </tr>
                        </thead>
                    <tbody>
                        {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}