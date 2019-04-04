import React from 'react'
import ReactDOM from 'react-dom'
import CourseManager from './containers/CourseManager'
import UploadImage from './components/UploadImage'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Loginscreen from './AppLogin/Loginscreen'
import '../node_modules/font-awesome/css/font-awesome.min.css'

ReactDOM.render(
    <CourseManager/>,
 //       <Loginscreen/>,
    document.getElementById('root')
);
