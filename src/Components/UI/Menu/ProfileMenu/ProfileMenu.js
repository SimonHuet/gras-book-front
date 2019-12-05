import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfilePhoto from 'Components/UI/Menu/ProfileMenu/ProfilePhoto/ProfilePhoto';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  userName: {
    fontSize: 22,
    paddingTop: theme.spacing(2),
  },
  icon: {
      height: 36,
      width: 36,
  },
}));

export default ({ user, fetchError }) => {
  const { t } = useTranslation('UserStatus');
  const classes = useStyles();
  console.log("profile menu : ",{user});

  return (
    <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item>
            <ProfilePhoto />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h3" className={classes.userName} 
                key={user.id}
                >
                    <b>{`${user.firstName} ${user.lastName}`}</b>
                </Typography>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label={t('profileView.status')}  />
                    <Button>
                        <CreateIcon className={classes.icon} />
                    </Button>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
};
