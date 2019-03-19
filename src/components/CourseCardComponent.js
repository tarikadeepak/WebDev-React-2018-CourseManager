import React from 'react'
import ModuleService from '../services/ModuleService'
import CourseRow from '../components/CourseRow';
import { Card, CardText, CardBody, CardTitle, CardImg, CardFooter, CardLink } from 'reactstrap';
import Axios from 'axios';
import {uploadFile} from 'react-s3';


export default class CourseCardComponent extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        var handler  =   this.props.handler;
        console.log('Course card componenet ', this.props.courseId)
        return(
            <Card style={{ margin: '10px' }}>
            <CardTitle style={{
                backgroundColor: 'powderblue', height: '3vw',
                paddingTop: '8px'
            }} align='center' fontSize='10' >
                <CourseRow key={this.props.title} courseId={this.props.courseId} 
                    title={this.props.title} />
            </CardTitle>
            <CardImg src={require('../resources/images/' + this.props.title + '.png')}
                height="100px" width="80px" quality="auto" />
            <CardFooter style={{
                backgroundColor: 'powderblue', height: '2vw',
                paddingTop: '4px'
            }}>
                <CardLink ahref="#" className="fa fa-trash"
                    style={{ marginLeft: '10px' }} onClick={() => handler(this.props.courseId)}/>
                <CardLink ahref="#" className="fa fa-pencil float-right"
                    style={{ marginRight: '10px' }} />
            </CardFooter>
        </Card>

        );
    }
}