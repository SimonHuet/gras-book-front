import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    avatar_small: {
        margin: theme.spacing(1),
        width: '32px',
        height: '32px',
    },
    avatar_medium: {
        margin: theme.spacing(1),
        width: '64px',
        height: '64px',
    },
}));

const getSizeClass = (classes, { small, medium }) => {
    if(small) return classes.avatar_small;
    
    if(medium) return classes.avatar_medium;
    
    return null;
};

export default (props) => {
    const classes = useStyles();

    const imgClass = getSizeClass(classes, props);

    return <img className={imgClass} src={`${process.env.PUBLIC_URL}icon-512.png`} alt="gras-book-logo" />;
};
