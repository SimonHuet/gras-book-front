import React from 'react';
import { ListItem, List,  ListItemAvatar, ListItemText, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Avatar from 'Components/UI/Avatar/Avatar';
import fetchBackend from 'Utils/fetchBackend';
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
    },
    icon:{
        maxwidth: 24,
        maxHeight: 24
    }
};

const addReaction = (type, post, typeReact) =>{
    console.log(post.reactions);
    fetchBackend(process.env.REACT_APP_REACTION_API, `reactions/`, {
        body: JSON.stringify({
            typeReactionUuid: type.uuid,
            userUuid: localStorage.userID,
            objectUuid: post.uuid,
            objectType: typeReact
        }),
        method: 'POST'
    });
};

const PostView = ({ post, typeReaction,  classes }) => (<>
    
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

        {typeReaction &&
        <List>
            {Object.keys(typeReaction).map(type => 
                <Fab key={type.uuid} onClick={ () => addReaction(typeReaction[type], post, 'post')} size="small" color="secondaryText" aria-label="add" className={classes.margin} >
                    <img className={classes.icon} src={typeReaction[type].iconUrl} alt=""/>
                </Fab>
              )
            }
        </List>
        }

    </ListItem>}
    {post && post.comments && post.comments.map((comment,index) => <Comment key={index} comment={comment} />)}
</>
);

const Post = withStyles(styles)(PostView);

export default Post;
