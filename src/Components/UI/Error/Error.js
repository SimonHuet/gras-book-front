import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import './Error.css';

export default ({ title, message }) =>
        <Box className="error-template" >
            <Typography component="h1" color="error"> { title } </Typography>
            <Typography component="span" color="error"> { message }</Typography>
        </Box>;
