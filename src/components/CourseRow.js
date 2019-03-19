import React from 'react'
import { Link } from 'react-router-dom'

export default class CourseRow
    extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return(
                <tr><td>
                    <Link to={`/course/${this.props.courseId}/${this.props.title}`}>
                        {this.props.title}
                    </Link>
                </td></tr>    
            )
        }
    }