import React from 'react'
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService';

export default class CourseList
    extends React.Component {
    constructor() {
        super()
        this.courseService = CourseService.instance;
        this.state = {courses: []};
    }
    componentDidMount(){
        this.courseService.findAllCourses()
        .then((courses) => {
            console.log(courses);
            this.setState({courses: courses});
        });
    }
    renderCourseRows(){
        let courses=null;
        if (this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow course={course}/>
                }
            )
        }
        return (
            courses
        )
    }
    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className='table'>
                        <thead><tr><th>Title</th></tr></thead>
                    <tbody>
                        {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}