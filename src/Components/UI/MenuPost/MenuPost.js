/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 650,
      alignItems: 'center'
    },
  },
  div: {
      alignItems: 'center'
  },
  gridItem: {
      paddingTop: theme.spacing(2),
      maxWidth: '20%'
  }
}));

export default props => { 
  const classes = useStyles();
  const { t } = useTranslation('FormCreatePost');
  
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <>
          <Button {...bindTrigger(popupState)}>
            <MoreVertIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>{t('menuPost.menuUpdate')}</MenuItem>
            <MenuItem onClick={popupState.close}>{t('menuPost.menuDeletes')}</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
};
