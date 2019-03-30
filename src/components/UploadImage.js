import React, { Component } from 'react';
import { UseUploadService } from '../services/UseUploadService';
import holderjs from 'react-holder'

export default class UploadImage extends Component {
    constructor() {
        super();
        this.fileService = new UseUploadService();
    }

    handleUploadFile = (event) => {
        const data = new FormData();
        let file = event.target.files[0];
        event.target.files[0].name = this.props.title
        console.log("Uploading file", event.target.files[0], this.props.title);
        data.append('file', event.target.files[0]);
        data.append('name', this.props.title);
        data.append('description', 'this file is uploaded by Deepak Tarika');
        let self = this;
        this.fileService.uploadFileToServer(data).then((response) => {
            console.log("File " + file.name + " is uploaded");
        }).catch(function (error) {
            console.log(error);
            if (error.response) {
                console.log("Upload error. HTTP error/status code=",error.response.status);
            } else {
               console.log("Upload error. HTTP error/status code=",error.message);
            }
        });
    };

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleUploadFile} />
            </div>
        )
    };
}