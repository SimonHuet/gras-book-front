/*
import React from 'react';
import axios from 'axios';
import UploadFile from './index';

const uploader = () => {
  
  handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('name', 'some value user types');
    data.append('description', 'some value user types');
    axios.post('/files', data);
  };
    
    return(
      <div>
        <img width='320' src={this.state.imageUrl} />
        <div>
          <input type="file" onChange={this.handleUploadFile} />
        </div>  
      </div>
    );
  };

export default UploadFile;
    return (
      <div>
        <UploadFile />
      </div>  
    );
*/