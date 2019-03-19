import React from 'react'

export default class LessonTabs extends React.Component {
    render() {
        return (
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                    <ul>
                        <li>Lesson 1</li>
                        <li>Lesson 2</li>
                        <li>Lesson 2</li>
                        <li>Lesson 3</li>
                        <li>Lesson 4</li>
                        <li>Lesson 5</li>
                        <li>Lesson 6</li>
                        <li>Lesson 7</li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">AnotherTab</a>
                </li>
             </ul>
        )
    }
}