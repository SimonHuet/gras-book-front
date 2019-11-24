import React from 'react';
import './Error.css';

export default ({ title, message }) => <div className="row">
    <div className="col-sm-12">
        <div className="error-template">
            <h1> {title} </h1>
            <p> {message}</p>
        </div>
    </div>
</div>;
