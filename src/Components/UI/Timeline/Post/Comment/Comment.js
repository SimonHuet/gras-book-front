import React from 'react';
import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
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
    }
};

export const CommentView = ({ comment, classes }) => <ListItem className={classes.wrapper}>
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

</ListItem>;

const Comment = withStyles(styles)(CommentView);

export default Comment;
