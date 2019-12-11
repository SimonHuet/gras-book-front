import React from 'react';
import { ListItem, List, ListItemAvatar, Fab, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Avatar from 'Components/UI/Avatar/Avatar';
import fetchBackend from 'Utils/fetchBackend';

const styles = {
    wrapper: {
        marginLeft: 40,
    },
    truncate: {
        width: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    image: {
        maxWidth: 500,
    },
    icon:{
        maxwidth: 24,
        maxHeight: 24
    }
};

const addReaction = (type, comment, typeReact) =>{
    fetchBackend(process.env.REACT_APP_REACTION_API, `reactions/`, {
        body: JSON.stringify({
            typeReactionUuid: type.uuid,
            userUuid: localStorage.userID,
            objectUuid: comment.uuid,
            objectType: typeReact
        }),
        method: 'POST'
    });

};

export const CommentView = ({ comment, typeReaction, classes }) => <ListItem className={classes.wrapper}>
    <ListItemAvatar>
        <Avatar user={comment.user} />
    </ListItemAvatar>
    <ListItemText
        primary={
            <div className={classes.truncate}>
                <strong>
                    {comment.user ? <span>
                        {comment.user.firstName} {comment.user.lastName}
                    </span> : 'Anonymous'}
                </strong>{' '}
                {comment.content}
            </div>
        }
        secondary={new Date(comment.createdAt).toLocaleString()}
    />
    {typeReaction &&
        <List className={classes.truncate} >
            {Object.keys(typeReaction).map(type => 
                <Fab onClick={addReaction(typeReaction[type], comment, 'comment')} size="small" color="secondaryText" aria-label="add" className={classes.margin} >
                    <img key={type.uuid} className={classes.icon} src={typeReaction[type].iconUrl} alt=""/>
                </Fab>
            )
            }
        </List>
        }

</ListItem>;

const Comment = withStyles(styles)(CommentView);

export default Comment;
