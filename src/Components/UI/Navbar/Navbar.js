import React from 'react';
import { Link } from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    IconButton,
    MenuItem,
    Menu,
    makeStyles
} from '@material-ui/core';

import AppIcon from 'Components/UI/AppIcon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useTranslation } from 'react-i18next';

import { userService } from 'Utils/User.service';
import LanguageSelector from 'Components/UI/LanguageSelector';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: "flex",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbarButtons: {
        marginLeft: 'auto',
    },
    title: {
        flexGrow: 1,
    },
}));

export default () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const { t } = useTranslation('Navbar');

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        userService.logout();
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to='/welcome'> 
                            <AppIcon small />
                        </Link>
                    </IconButton>
                    <div className={classes.toolbarButtons}>
                        <LanguageSelector />
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to="/profile" >{t('menu.profile.label')} </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/timeline" >{t('menu.profile.timeline.label')}</Link>
                            </MenuItem>
                        </Menu>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleLogout}
                            color="inherit"
                        >
                            <ExitToAppIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};
