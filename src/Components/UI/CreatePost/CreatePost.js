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

  const setState = useState({
    uploading: false,
    images: [],
  });
  
  const { posts, match } = props;
  const post = {
    userId: '2e2a5ab9-9f63-418f-969f-fa6b65363a5f',
  };
  let IsUpdated = false;
  if (match !== undefined) {
    const p = posts.posts.filter(userPost => post.uuid === match.params.uuid);
    if (p.length === 1) {
      post.content = p[0].content;
      IsUpdated = true;
    }
  };

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  console.log(`${Promise}`);

  const onChange = e => {
    const files = Array.from(e.target.files);
    setState({ uploading: true });
    const file = toBase64(files[0]);
    const action = img => {
      const formData = {
        mediaBlob: img,
        content: 'oupsi CYKA',
        userUuid: 'a7fe6cd4-216f-4d38-b206-eaa1797a124e',
      };      
      console.log("formData: " `${formData}`);
      fetch(`http://api.posts.eddycheval.codes/posts`, {
        method: 'POST',
        body: JSON.stringify(formData),
        'Content-Type': 'appliaction/json',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwQXRLbTNKWnBlQTlSOFVDMi1CWlBfU2xWWjFraV9NcjFPR3RkZVV4SHJrIn0.eyJqdGkiOiIwMmNkYmUxZS00Mjg2LTRmZDMtYmFiNy0xNjliOTQ1MTQyNjgiLCJleHAiOjE1NzU5MDIyMjQsIm5iZiI6MCwiaWF0IjoxNTc1ODk4NjI0LCJpc3MiOiJodHRwOi8va2V5Y2xvYWNrLmVkZHljaGV2YWwuY29kZXMvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjcxOGI3YWQzLTE5MzctNGMzZi1hOWZiLTc4OGEyYTRiYmE2OCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImdyYXNib29rLWZyb250IiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiMjk1YTVmODgtYjEzNC00Y2FkLThhNjktMzAzYTA3N2UxMDM3IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiSmVyZW15IENIQVVWSU4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJib2J5IiwiZ2l2ZW5fbmFtZSI6IkplcmVteSIsImZhbWlseV9uYW1lIjoiQ0hBVVZJTiIsImVtYWlsIjoiamVyZW15Y2hhdXZpbjEwQGdtYWlsLmNvbSJ9.CL-Lps61AqFbcXeuUU8WBTD1l4HkcFc5_HP1LA9sZFx5CUirZMkdlpGpb2VuexH3_2CEN9-YrKmg3ZyNd_tPvrtyExKqlNZ99-Bx1SJWxtIM_1Ipwo2TZI7bV589_HlmjEMbe809406r5uiDbmN4css9y6arJxDzYTOwY6eXXkERgM_G5PdaPZvRddqzhIbdc6QihVravDFCK525FjvTuIBeoju5GnOylYqSxOfggkpJFklcZK3aHihnO2m5Vo8bwHQKvBrjlnxoDqan_vMimgBxSV5LUHXwAtCegBh_mUpLU1F7lnWYxHuLIEWBeDIXjYT_Zi-0Rdu1Es-_ziVGUQ',
        },
      })
        .then(res => res.json())
        .then(images => {
          setState({
            uploading: false,
            images,
          });
        });
    };

    file.then(data => {
      // eslint-disable-next-line new-cap
      // const image = new Buffer.from(data.replace(/^data:image\/\w+;base64,/, ''), 'base64');
      // console.log(image);
      action(data);
    });
  };

  const newGroups = formData => {
    let url = `${process.env.REACT_APP_POST_API}/posts`;
    let method = 'POST';
    if (IsUpdated) {
      url = `${process.env.REACT_APP_POST_API}/posts/${match.params.id}`;
      method = 'PUT';
    }
    fetch(url, {
      method,
      body: JSON.stringify(post),
    })
      .then(resp => {
        if (IsUpdated) {
          return undefined;
        }
        return resp.json();
      });
      if (!IsUpdated) {
        fetch(`${process.env.REACT_APP_POST_API}/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
          })
          .then(resp => props.history.push('/Posts', null))
          .catch(err => console.error(err));
      }
  console.log("post: " `${post}`);
      formData.preventDefault();
  };

  const onChangePost = val => {
    post.content = val.target.value;
  };

  return (
    <div>
        <Grid container spacing={2}>
      <form className={classes.root} onSubmit={newGroups} autoComplete="off">
          <Grid item>
              <TextField 
                  id="outlined-basic" 
                  label={t('posts.textField.placeholder')} 
                  variant="outlined" 
                  fullWidth 
                  InputProps={{ inputProps: { pattern: '^[a-zA-Z0-9]*$' } }}
                  values={post}
                  onChange={onChangePost}
              />
          </Grid>
          <Grid item xs={12} sm container className={classes.gridItem}>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Button variant="contained" component="label">
                  {t('posts.uploadFile')}
                  <input type="file" onChange={e => onChange(e)} style={{ display: 'none' }} />
                </Button>   
                <Button variant="contained" color="primary" type='submit'>
                  {t('posts.createButton')}
                </Button>
              </Grid>
            </Grid>
          </Grid>    
      </form>
        </Grid>    
    </div>
  );
};
