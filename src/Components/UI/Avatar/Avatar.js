import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const styles = {
    avatar: {
        width: 45,
        height: 45,
    },
};

const AvatarView = ({ user, classes }) => (
    <>
    {user && user.pictureUrl &&
        <MuiAvatar
            className={classes.avatar}
            src={user.pictureUrl}
        />
    }
    {!(user && user.pictureUrl) &&
        <MuiAvatar
            className={classes.avatar}
        > 
            <AccountCircleIcon className={classes.avatar} />
        </MuiAvatar>
    }
    
    </>
);

const Avatar = withStyles(styles)(AvatarView);

export default Avatar;
