/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import fetchBackend from 'Utils/fetchBackend';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
      alignItems: 'center',
    },
  },
  div: {
    alignItems: 'center',
  },
  Image: {
    maxHeight: '650px',
    maxWidth: '650px',
  },
  button: {
    width: '100%',
  },
}));

export default props => {
  const { comments, commentUuid } = props;
  const [IsUpdated, setIsUpdated] = useState({});
  const classes = useStyles();
  const { t } = useTranslation('CreateComment');
  const [state, setState] = useState({
    uploading: false,
    images: [],
  });
  const [comment, setComment] = useState({
    userUuid: localStorage.userID,
  });
  
  useEffect(() => {
    setIsUpdated(false);
    if (commentUuid !== undefined) {
      const p = comments.comments.filter(pil => pil.uuid === commentUuid);
      setComment({
        ...comment,
        content: null,
      });
      setIsUpdated(true);
    }
  }, [comments]);

  const actionComment = () => {
    let url = `comments`;
    let method = 'POST';
    if (IsUpdated) {
      url = `comments/${commentUuid}`;
      method = 'PUT';
    }
    fetchBackend(process.env.REACT_APP_POST_API, url, {
      method,
      body: JSON.stringify(comment),
    }).catch(res => props.history.push('/Home', null));
  };

  const onChangeComment = val => {
    comment.content = val.target.value;
  };

  return (
    <div>
      <form className={classes.root} onSubmit={() => actionComment()} autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label={t('comments.textField.placeholder')}
              variant="outlined"
              fullWidth
              multiline
              InputProps={{ inputProps: { pattern: '^[a-zA-Z0-9]*$' } }}
              defaultValue={comment.content}
              onChange={onChangeComment}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              className={classes.button}
              size="small"
              variant="contained"
              color="primary"
              type="submit"
            >
              {t('comments.createButton')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
