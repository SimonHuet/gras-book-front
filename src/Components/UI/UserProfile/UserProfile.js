import React from 'react';
import { Box, Grid, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import Avatar from 'Components/UI/Avatar/Avatar';
import Error from 'Components/UI/Error/Error';
import { useTranslation, withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: 600,
        padding:10
    },
    truncate: {
        width: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
};

const UserProfileView = ({ user, userFetchError, classes, t}) => {


    return <Box>
        <Grid item xs={12}>
            <Grid>
                {userFetchError &&
                    <Error
                        title={t('user.error.title')}
                        message={t('user.error.message')}
                    />}
            </Grid>
            

        {!userFetchError && user && <Grid>
            <ListItem >
                <ListItemAvatar>
                    <Avatar user={user} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <div className={classes.truncate}>
                            <strong>
                                {user && <span>
                                    {user.first_name} {user.last_name}
                                </span>}
                            </strong>
                        </div>
                    }
                    secondary={user.descript}
                />

            </ListItem></Grid>}
        </Grid>
    </Box>;
};

const UserProfile = withStyles(styles)(UserProfileView);

export default withTranslation('UserProfile')(UserProfile);
