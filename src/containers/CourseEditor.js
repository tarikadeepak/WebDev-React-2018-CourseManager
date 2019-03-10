import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
export default class CourseEditor extends React.Component {
    render() {
        return (
            <div className="row">
                <div class="col-4">
                    <ModuleList />
                 </div>   
                 <div class="col-8">
                    <LessonTabs />
                 </div>
             </div>
        )
    }
}