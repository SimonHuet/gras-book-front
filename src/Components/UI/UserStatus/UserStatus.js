import React from 'react';
import {
    useTranslation
} from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import {
    makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles({
    root: {
        width: 440,
        height: 390,
        backgroundColor: '#00acc1',
    },
    icon: {
        height: 40,
        width: 40,
    },
    userName: {
        fontSize: 24,
    },
    statusText: {
        fontSize: 20,
    }
});

export default () => {
  const { t } = useTranslation('UserStatus');
  const classes = useStyles();

  return (
    <Paper className={classes.root} />
  );
};