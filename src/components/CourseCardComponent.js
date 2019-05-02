import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom'

export default class CourseCardComponent extends React.Component {
    render() {
        const imgUrl="https://s3.amazonaws.com/studyawspollydt.com/titleImg.jpg"
        
         return (
            <Card style={{ margin: '10px', borderRadius:'8px', 
            }}>
             <Link to={`/course/${this.props.userId}/${this.props.courseId}/${this.props.title}`}>
                {/* <h1 style={{textAlign: 'center'}}>{this.props.title} </h1> */}
                <CardImg src ={imgUrl} crop="scale" style={{height:'240px'}} 
                quality="auto" 
                />
                <CardImgOverlay>
                    <CardTitle>
                        <div style={{color:'red', textAlign: 'left', marginTop:'5px',
                           fontWeight:'bold', fontStyle:'italic', fontSize:'20px'}}>
                        {this.props.title} </div></CardTitle>    
                </CardImgOverlay>
                
             </Link>       
            </Card>

        );
    }
}