import React from 'react';
import { useTranslation } from 'react-i18next';
import { useKeycloak } from 'react-keycloak';
import {
    Button,
    CssBaseline,
    Grid,
    makeStyles,
    Paper,
    Typography
} from '@material-ui/core';
import AppIcon from 'Components/UI/AppIcon';
import LanguageSelector from 'Components/UI/LanguageSelector';
import Copyright from 'Components/UI/Copyright/Copyright';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1495753379358-73c76ccd644b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2610&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default () => {
    const { t } = useTranslation('Login');
    const classes = useStyles();
    const { keycloak } = useKeycloak();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>

                    <Typography component="h1" variant="h5">
                        {t('auth.title')}
                    </Typography>

                    <AppIcon medium />

                    <br />
                    <Typography component="p">
                        {t('auth.infos')}
                    </Typography>

                    <Button color="primary" className={classes.button} onClick={() => keycloak.login()}>
                        <Link to='/Home'>{t('auth.manager.redirect.placeholder')}</Link>
                    </Button>

                    <LanguageSelector />

                    <Copyright />
                </div>
            </Grid>
        </Grid>
    );
};
