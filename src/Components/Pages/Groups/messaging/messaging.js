import React, { useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';
import {
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Paper,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import openSocket from 'socket.io-client';
import * as moment from 'moment';
import Copyright from 'Components/UI/Copyright/Copyright';

let currentMessagingList = [];

export default props => {
  const { groupUsers, messages, match } = props;
  const [messagesWithSocket, setMessagesWithSocket] = React.useState([]);
  const io = useRef();
  useEffect(() => {
    currentMessagingList = messages.messages;
    setMessagesWithSocket(currentMessagingList);
    io.current = openSocket(process.env.REACT_APP_WEBSOCKET_SERVER, { reconnection: false });
    io.current.emit('join', match.params.id);
    io.current.on('new_message', json => {
      currentMessagingList = currentMessagingList.concat(json);
      setMessagesWithSocket(currentMessagingList);
    });
    if (currentMessagingList === [] && messages.messages !== []) {
      setMessagesWithSocket([]);
    }

    return () => {
      io.current.off('new_message');
      io.current.emit('unjoin', match.params.id);
      setMessagesWithSocket([]);
      currentMessagingList = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content = '';
  let imageURL = '';
  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    userList: {
      height: '600px',
      overflow: 'auto',
    },
    button: {
      margin: theme.spacing(3, 0, 2),
    },
    list: {
      overflow: 'auto',
      height: '600px',
      width: '96.2%',
      marginTop: '11px',
    },
    messageImage: {
      maxHeight: '400px',
      maxWidth: '580px',
    },
    paperMessage: {
      height: '825px',
      width: '700px',
    },
    textMessage: {
      wordWrap: 'break-word',
    },
    textField: {
      width: '95%',
    },
    MessageUserPicture: {
      maxHeight: '50px',
      maxWidth: '50px',
    },
    MasterGrid: {
      marginLeft: '5px',
    },
  }));
  const sendMessage = () => {
    const message = {};
    message.userUUID = '2e2a5ab9-9f63-418f-969f-fa6b65363a5f'; // WARNING INFO USER ACTUEL
    message.objectUUID = match.params.id;
    message.objectType = 'group';
    message.postDate = moment(new Date()).format('YYYY-MM-DD');
    message.content = content;
    message.mediaUrl = imageURL;
    fetch(`${process.env.REACT_APP_MESSAGE_API}/messages/?format=json`, {
      'Content-Type': 'application/json',
      headers: new Headers({ 'content-type': 'application/json' }),
      method: 'POST',
      body: JSON.stringify(message),
      // eslint-disable-next-line no-console
    }).catch(err => console.error(err));
  };

  const handleChange = value => {
    content = value.target.value;
  };
  const handleChangeForURL = value => {
    imageURL = value.target.value;
  };

  const CorrespondingImage = uuid => {
    const user = groupUsers.groupUsers.filter(u => u.id === uuid);
    if (user.length >= 1) {
      return (
        <ListItemAvatar>
          <Avatar
            className={classes.MessageUserPicture}
            alt="User picture"
            src="https://img.icons8.com/officel/2x/person-male.png"
          />
        </ListItemAvatar>
      ); // user.pictureURL;
    }
    return (
      <ListItemAvatar>
        <Avatar
          alt="User picture"
          src="https://icon-library.net/images/person-to-person-icon/person-to-person-icon-28.jpg"
        />
      </ListItemAvatar>
    );
  };
  const SelectedValue = () => {
    return props.history.push(`/Groups/${match.params.id}/edit`);
  };
  const { t } = useTranslation('GroupForm');
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <div xs={4} className={classes.paper}>
        <Typography component="h1" variant="h5">
          {t('group.memberList')}
        </Typography>
        <List className={classes.userList}>
          {groupUsers.groupUsers.length > 0 ? (
            groupUsers.groupUsers.map(user => (
              <ListItem key={user.id} className="list-user-item list-user-item-action">
                <ListItemAvatar>
                  <Avatar alt="User picture" src={user.pictureURL} />
                </ListItemAvatar>
                <ListItemText primary={`${user.firstName} ${user.lastName}`} />
              </ListItem>
            ))
          ) : (
              <ListItemText primary={t('group.userList.noRecordFound')} />
            )}
        </List>
        <Fab onClick={() => SelectedValue()} color="secondary" variant="extended" aria-label="edit">
          <EditIcon />
          {t('groupList.UpdateButton')}
        </Fab>
        <Copyright />
      </div>
      <Paper className={classes.paperMessage}>
        <Grid className={classes.MasterGrid} container spacing={3}>
          <List className={classes.list}>
            {messagesWithSocket ? (
              messagesWithSocket.map(message => (
                <ListItem alignItems="flex-start" key={message.id} className="">
                  <Grid container spacing={1}>
                    <Grid item xs={1}>
                      {CorrespondingImage(message.userUUID)}
                    </Grid>
                    <Grid item xs={11}>
                      <ListItemText
                        className={`MuiListItemText-multiline ${classes.textMessage}`}
                        primary={`${message.content}`}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemAvatar>
                        <img className={classes.messageImage} src={message.mediaUrl} alt="" />
                      </ListItemAvatar>
                    </Grid>
                  </Grid>
                </ListItem>
              ))
            ) : (
                <ListItemText primary={t('group.userList.noRecordFound')} />
              )}
          </List>
          <Grid item xs={12}>
            <TextField
              id="standard-multiline-flexible"
              label="Contenu de votre message."
              multiline
              rowsMax="4"
              onChange={handleChange}
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id="standard-multiline-flexible"
              multiline
              label="Url de votre image."
              rowsMax="4"
              InputProps={{
                inputProps: {
                  pattern:
                    "^(http|https|ftp)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/($|[a-zA-Z0-9.,?'\\+&amp;%$#=~_-]+))*$",
                },
              }}
              onChange={handleChangeForURL}
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={1}>
            <Fab onClick={() => sendMessage()} color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
