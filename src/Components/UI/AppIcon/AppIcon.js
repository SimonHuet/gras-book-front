import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    avatarSmall: {
        margin: theme.spacing(1),
        width: '32px',
        height: '32px',
    },
    avatarMedium: {
        margin: theme.spacing(1),
        width: '64px',
        height: '64px',
    },
}));

const getSizeClass = (classes, { small, medium }) => {
    if(small) return classes.avatarSmall;
    
    if(medium) return classes.avatarMedium;
    
    return null;
};

export default (props) => {
    const classes = useStyles();

    const imgClass = getSizeClass(classes, props);

    return <img className={imgClass} src={`${process.env.PUBLIC_URL}icon-512.png`} alt="gras-book-logo" />;
};
