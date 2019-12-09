import React from 'react';
import { ListItemText, ListItemAvatar, withStyles, ListItem } from '@material-ui/core';
import Avatar from 'Components/UI/Avatar/Avatar';

const styles = {
    truncate: {
        width: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
};

const UserShortDescriptionView = ({ user, classes }) =>
    <ListItem>
        <ListItemAvatar>
            <Avatar user={user} />
        </ListItemAvatar>
        <ListItemText
            primary={
                <div className={classes.truncate}>
                    <strong>
                        {user && <span>
                            {user.firstName} {user.lastName}
                        </span>}
                    </strong>
                </div>
            }
            secondary={user.description}
        />
    </ListItem>;

const UserShortDescription = withStyles(styles)(UserShortDescriptionView);

export default UserShortDescription;
