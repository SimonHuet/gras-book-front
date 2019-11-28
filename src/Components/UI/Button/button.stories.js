import React from 'react';
import Button from '@material-ui/core/Button';

export default { title: 'Button' };

export const withText = () => 
        <div style={{ padding: '10px' }}>
            <Button variant="contained" color="primary"> Gras book </Button>
            <br/>
            <br/>
            <Button variant="contained"> Gras book </Button>
            <br/>
            <br/>
            <Button variant="contained" disabled > Gras book disabled </Button>
        </div>;
