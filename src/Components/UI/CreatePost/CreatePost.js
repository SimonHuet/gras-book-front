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
      width: '100%',
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
  const { posts, postUuid } = props;
  const [IsUpdated, setIsUpdated] = useState({});
  const classes = useStyles();
  const { t } = useTranslation('CreatePost');
  const [state, setState] = useState({
    uploading: false,
    images: [],
  });
  const [post, setPost] = useState({
    userUuid: localStorage.userID,
  });
  const [currentImage, setCurrentImage] = useState({});
  const onChangeImage = async e => {
    const files = Array.from(e.target.files);
    setState({ uploading: true });
    setCurrentImage(URL.createObjectURL(e.target.files[0]));
    const file = toBase64(files[0]);
    const filename = files[0].name;
    const extension = /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
    setPost({
      ...post,
      mediaType: extension,
    });
    await file.then(data => {
      setPost({
        ...post,
        mediaBlob: data,
        mediaType: extension,
      });
    });
  };
  useEffect(() => {
    setIsUpdated(false);
    if (postUuid !== undefined) {
      const p = posts.posts.filter(pil => pil.uuid === postUuid);
      console.log(p);
      // if (p.length === 1) {
      setCurrentImage(p.mediaUrl);
      setIsUpdated(true);
      // }
    }
  }, [posts, post, postUuid]);

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const actionPost = () => {
    let url = `posts`;
    let method = 'POST';
    if (IsUpdated) {
      url = `posts/${postUuid}`;
      method = 'PUT';
    }
    fetchBackend(process.env.REACT_APP_POST_API, url, {
      method,
      body: JSON.stringify(post),
    }).catch(res => props.history.push('/Home', null));
  };

  const onChangePost = val => {
    setPost({...post, content: val.target.value});
  };

  return (
    <div data={state}>
      <form className={classes.root} onSubmit={() => actionPost()} autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img className={classes.Image} alt="" src={currentImage} />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label={t('posts.textField.placeholder')}
              variant="outlined"
              fullWidth
              multiline
              InputProps={{ inputProps: { pattern: '^[a-zA-Z0-9]*$' } }}
              defaultValue={post.content}
              onChange={onChangePost}
            />
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.button} size="small" variant="contained" component="label">
              {t('posts.uploadFile')}
              <input type="file" onChange={e => onChangeImage(e)} style={{ display: 'none' }} />
            </Button>

            <Button
              className={classes.button}
              size="small"
              variant="contained"
              color="primary"
              type="submit"
            >
              {t('posts.createButton')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
