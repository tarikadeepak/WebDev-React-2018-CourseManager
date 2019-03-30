import React, { Component } from 'react';
// import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
//import TextToImage from 'reactjs-text-to-image';

export default class Image extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {/* <img src ="https://s3.amazonaws.com/studyawspollydt.com/NEUY.png" /> */}
                {/* <Card style={{ width: '18rem' }}>
                    <CardImg variant="top" src="holder.js/100px180" />
                    <CardBody>
                        <CardTitle>Card Title</CardTitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </CardText>
                        
                    </CardBody>
                </Card>; */}
            <div className="card" style={{width:"18rem"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
            </div>
        )
    };
}