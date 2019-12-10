import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Grid,
  Typography,
  Container,
  withStyles,
  ListItemAvatar,
  Box,
  TextField,
  Button,
  Avatar as Av,
} from '@material-ui/core';
import Error from 'Components/UI/Error/Error';
import Avatar from 'Components/UI/Avatar/Avatar';
import fetchBackend from 'Utils/fetchBackend';

const styles = {
  container: {
    marginTop: '50px',
  },
  truncate: {
    width: 500,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  root: {
    width: 600,
    padding: 10,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
  TextField: {
    width: '100%',
  },
};

const ProfileView = props => {
  const { user, userFetchError, classes, t } = props;
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    uploading: false,
    images: [],
  });
  const [currentImage, setCurrentImage] = useState({});
  const [userUpdated, setUserUpdated] = useState({
    email: user.email,
    description: user.description,
    login: user.login,
    firstName: user.firstName,
    lastName: user.lastName,
  });

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const onChangeImage = async e => {
    const files = Array.from(e.target.files);
    setState({ uploading: true });
    setCurrentImage(URL.createObjectURL(e.target.files[0]));
    const file = toBase64(files[0]);
    const filename = files[0].name;
    const extension = /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
    setUserUpdated({
      ...userUpdated,
      pictureType: extension,
    });
    await file.then(data => {
      setUserUpdated({
        ...userUpdated,
        pictureBlob: data,
        pictureType: extension,
      });
    });
  };
  const onChange = (val, name) => {
    userUpdated[name] = val.target.value;
  };
  const onClick = val => {
    fetchBackend(process.env.REACT_APP_USER_API, `users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(userUpdated),
      'Content-Type': 'application/json',
    });
    props.history.push('/', null);
  };
  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid item xs={12}>
        <Typography component="h1" variant="h5">
          {t('title.profile')}
        </Typography>
        <Box>
          <Grid item xs={12}>
            <Grid>
              {(userFetchError || !user) && (
                <Error title={t('user.error.title')} message={t('user.error.message')} />
              )}
            </Grid>
            <br />
            {!userFetchError && user && (
              <Grid container spacing={3} className={classes.list}>
                <Grid item xs={1}>
                  <ListItemAvatar>
                    <Avatar user={user} />
                  </ListItemAvatar>
                </Grid>
                <Grid item xs={1}>
                  <ListItemAvatar>
                    <Av alt="" src={currentImage} />
                  </ListItemAvatar>
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" component="label">
                    Upload File
                    <input
                      type="file"
                      onChange={e => onChangeImage(e)}
                      style={{ display: 'none' }}
                    />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    className={classes.TextField}
                    type="text"
                    label={t('profileForm.firstName')}
                    InputProps={{ inputProps: { pattern: '^[a-zA-Z0-9]*$' } }}
                    defaultValue={user.firstName}
                    onChange={e => onChange(e, 'firstName')}
                    name="name"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    className={classes.TextField}
                    type="text"
                    label={t('profileForm.lastName')}
                    InputProps={{ inputProps: { pattern: '^[a-zA-Z0-9]*$' } }}
                    defaultValue={user.lastName}
                    onChange={e => onChange(e, 'lastName')}
                    name="name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className={classes.TextField}
                    type="text"
                    label={t('profileForm.email')}
                    InputProps={{ inputProps: { pattern: '^[a-zA-Z0-9]*$' } }}
                    defaultValue={user.email}
                    onChange={e => onChange(e, 'email')}
                    name="name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className={classes.TextField}
                    type="text"
                    label={t('profileForm.login')}
                    InputProps={{ inputProps: { pattern: '^[a-zA-Z0-9]*$' } }}
                    defaultValue={user.login}
                    onChange={e => onChange(e, 'login')}
                    name="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.TextField}
                    type="text"
                    multiline
                    label={t('profileForm.description')}
                    InputProps={{ inputProps: { pattern: '^[a-zA-Z0-9]*$' } }}
                    defaultValue={user.description}
                    onChange={e => onChange(e, 'description')}
                    name="name"
                  />
                </Grid>
                <Grid>
                  <Button onClick={() => onClick()}>BOUTTON</Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

const Profile = withStyles(styles)(ProfileView);

export default withTranslation('Profile')(Profile);
