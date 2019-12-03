import React from 'react';
import Box from '@material-ui/core/Box';
import './Error.css';

export default ({ title, message }) => <Box>
        <div className="error-template">
            <h1> { title } </h1>
            <p> { message }</p>
        </div>
</Box>;
