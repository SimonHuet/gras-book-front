/* eslint-disable no-console */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
    <div>
        <Grid container spacing={2}>
      <form className={classes.root} onSubmit='' autoComplete="off">
          <Grid item>
              <TextField 
                  id="outlined-basic" 
                  label={t('posts.textField.placeholder')} 
                  variant="outlined" 
                  fullWidth 
                  multiline
                  InputProps={{ inputProps: { pattern: '^[a-zA-Z0-9]*$' } }}
                  defautlValue=''
                  onChange=''
              />
          </Grid>
          <Grid item xs={12} sm container className={classes.gridItem}>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Button variant="contained" component="label">
                  {t('comment.uploadFile')}
                  <input type="file" />
                </Button>   
                <Button variant="contained" color="primary" type='submit'>
                  {t('comment.createButton')}
                </Button>
              </Grid>
            </Grid>
          </Grid>    
      </form>
        </Grid>    
    </div>
  );
};
