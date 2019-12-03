/* eslint-disable import/no-unresolved */
import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  homeIcon,
  profileIcon,
  groupIcon,
  notificationIcon,
  messagesIcon,
  settingsIcon
} from '../../../Resources/MenuIcon';

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

export default function TypographyMenu() {
  const { t } = useTranslation('Login');
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <img src={homeIcon} alt='home' />
            <Typography variant="inherit">{t('menu.home')}</Typography>
        </MenuItem>
        <MenuItem>
          <img src={profileIcon} alt='profile' />
            <Typography variant="inherit">{t('menu.profile')}</Typography>
        </MenuItem>
        <MenuItem>
          <img src={groupIcon} alt='group' />
            <Typography variant="inherit">{t('menu.group')}</Typography>
        </MenuItem>
        <MenuItem>
          <img src={notificationIcon} alt='notif' />
            <Typography variant="inherit">{t('menu.notification')}</Typography>
        </MenuItem>
        <MenuItem>
          <img src={messagesIcon} alt='msg' />
            <Typography variant="inherit">{t('menu.message')}</Typography>
        </MenuItem>
        <MenuItem>
          <img src={settingsIcon} alt='settings' />
            <Typography variant="inherit">{t('menu.settings')}</Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
