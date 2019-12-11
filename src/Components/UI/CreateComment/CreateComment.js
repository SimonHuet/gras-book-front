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
  /* const [currentImage, setCurrentImage] = useState({});
  const onChangeImage = async e => {
    const files = Array.from(e.target.files);
    setState({ uploading: true });
    setCurrentImage(URL.createObjectURL(e.target.files[0]));
    const file = toBase64(files[0]);
    const filename = files[0].name;
    const extension = /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
    setComment({
      ...comment,
      mediaType: extension,
    });
    await file.then(data => {
      console.log(extension);
      setComment({
        ...comment,
        mediaBlob: data,
        mediaType: extension,
      });
    });
  }; */
  useEffect(() => {
    setIsUpdated(false);
    if (commentUuid !== undefined) {
      const p = comments.comments.filter(pil => pil.uuid === commentUuid);
      // if (p.length === 1) {
      // setCurrentImage(p.mediaUrl);
      setComment({
        ...comment,
        content: null,
      });
      setIsUpdated(true);
      // }
    }
  }, [comments]);

  /* const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    }); */

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
  /* <Grid item xs={12}>
            <img className={classes.Image} alt="" src={currentImage} />
          </Grid> 
          
            <Button className={classes.button} size="small" variant="contained" component="label">
              {t('comments.uploadFile')}
              <input type="file" onChange={e => onChangeImage(e)} style={{ display: 'none' }} />
            </Button> */
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
