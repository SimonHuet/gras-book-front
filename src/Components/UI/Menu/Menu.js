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

const menuTabs = className => [{
  trans: 'menu.home',
  icon: <HomeTwoToneIcon className={className} />
},
{
  trans: 'menu.profile',
  icon: <PersonOutlineTwoToneIcon className={className} />
}, {
  trans: 'menu.group',
  icon: <GroupTwoToneIcon className={className} />
}, {
  trans: 'menu.notification',
  icon: <NotificationsNoneTwoToneIcon className={className} />
}, {
  trans: 'menu.message',
  icon: <ChatTwoToneIcon className={className} />
}, {
  trans: 'menu.settings',
  icon: <SettingsTwoToneIcon className={className} />
}];

export default () => {
  const { t } = useTranslation('Menu');
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        {menuTabs(classes.icon).map(tab =>
          <MenuItem key={tab.trans} className={classes.item} >
            {tab.icon}
            <Typography variant="inherit">
              {t(tab.trans)}
            </Typography>
          </MenuItem>)
        }
      </MenuList>
    </Paper>
  );
};
