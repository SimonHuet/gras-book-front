import React from 'react';
import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Avatar from 'Components/UI/Avatar/Avatar';
import Comment from './Comment';

const styles = {
    truncate: {
        width: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    image: {
        maxWidth: 600,
    }
};

const PostView = ({ post, classes }) => (<>
    
    {post && post.mediaUrl &&
        <ListItemAvatar>
            <img
                src={post.mediaUrl}
                alt="post_image"
                className={classes.image}
            />
        </ListItemAvatar>
    }
    {post &&
    <ListItem >
        <ListItemAvatar>
            <Avatar user={post.user} />
        </ListItemAvatar>
        <ListItemText
            primary={
                <div className={classes.truncate}>
                    <strong>
                        {post.user ? <span>
                            {post.user.firstName} {post.user.lastName}
                        </span> : 'Anonymous'}
                    </strong>{' '}
                    {post.content}
                </div>
            }
            secondary={new Date(post.createdAt).toLocaleString()}
        />

    </ListItem>}
    {post && post.comments && post.comments.map((comment,index) => <Comment key={index} comment={comment} />)}
</>
);

const Post = withStyles(styles)(PostView);

export default Post;
