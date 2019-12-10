import React from 'react';
import { ListItem, List, ListItemAvatar, Fab, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Avatar from 'Components/UI/Avatar/Avatar';

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

const addReaction = (type) =>{
    

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
        <List>
            {Object.keys(typeReaction).map(type =>
                <Fab key={type.uuid} onClick={addReaction(typeReaction[type])} size="small" color="secondaryText" aria-label="add" className={classes.margin} >
                    <img className={classes.icon} src={typeReaction[type].iconUrl} alt=""/>
                </Fab>
            )
            }
        </List>
        }

</ListItem>;

const Comment = withStyles(styles)(CommentView);

export default Comment;
