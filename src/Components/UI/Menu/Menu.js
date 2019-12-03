/* eslint-disable import/no-unresolved */
import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';

const useStyles = makeStyles({
  root: {
    width: 440,
    height: 390,
    backgroundColor: '#bdbdbd',
  },
  item: {
    height: 46,
    border: 0,
    borderTop: 1,
  },
  icon: {
    height: 40,
    width: 40,
  }
});

export default () => {
  const { t } = useTranslation('Menu');
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem className={classes.item}>
          <HomeTwoToneIcon className={classes.icon}>
            <Typography variant="inherit">{t('menu.home')}</Typography>
          </HomeTwoToneIcon>            
        </MenuItem>
        <MenuItem className={classes.item}>
          <PersonOutlineTwoToneIcon className={classes.icon}>
            <Typography variant="inherit">{t('menu.profile')}</Typography>
          </PersonOutlineTwoToneIcon>            
        </MenuItem>
        <MenuItem className={classes.item}>
          <GroupTwoToneIcon className={classes.icon}>
            <Typography variant="inherit">{t('menu.group')}</Typography>
          </GroupTwoToneIcon>            
        </MenuItem>
        <MenuItem className={classes.item}>
          <NotificationsNoneTwoToneIcon className={classes.icon}>
            <Typography variant="inherit">{t('menu.notification')}</Typography>
          </NotificationsNoneTwoToneIcon>            
        </MenuItem>
        <MenuItem className={classes.item}>
          <ChatTwoToneIcon className={classes.icon}>
            <Typography variant="inherit">{t('menu.message')}</Typography>          
          </ChatTwoToneIcon>
        </MenuItem>
        <MenuItem className={classes.item}>
          <SettingsTwoToneIcon className={classes.icon}>
            <Typography variant="inherit">{t('menu.settings')}</Typography>
          </SettingsTwoToneIcon>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
