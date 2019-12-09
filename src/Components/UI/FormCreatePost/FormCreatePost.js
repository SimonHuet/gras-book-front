import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import UploadFile from './UploadFile/UploadFile';



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 650
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

export default () => {
  const classes = useStyles();
  const { t } = useTranslation('FormCreatePost');

  return (
    <div>
        <Grid container spacing={2}>
            <Grid item>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label={t('posts.textField.placeholder')} variant="outlined" fullWidth/>
        </form>
        </Grid>
        <Grid item xs={12} sm container className={classes.gridItem}>
            <Grid item xs container direction="column">
              <Grid item xs>
                  <UploadFile>
                    <Button> 
                        <ImageIcon/>                
                    </Button>    
                  </UploadFile>     
                <Button variant="contained" color="primary">
                    {t('posts.createButton')}
                </Button>
              </Grid>
            </Grid>
        </Grid>
        </Grid>
    </div>
  );
};