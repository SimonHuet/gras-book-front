import React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const withText = () => 
        <div style={{ padding: '10px' }}>
            <Button small placeholder="Gras book" />
            <br/>
            <br/>
            <Button medium placeholder="Gras book" />
            <br/>
            <br/>
            <Button large placeholder="Gras book" />
        </div>;
