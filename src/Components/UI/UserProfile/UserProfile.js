import React from 'react';
import { Box, Grid, ListItem, ListItemText } from '@material-ui/core';
import Error from 'Components/UI/Error/Error';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import UserShortDescription from '../UserShortDescription/UserShortDescription';

const styles = {
    root: {
        width: 600,
        padding: 10
    },
    truncate: {
        width: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
};

const UserProfileView = ({ user, userFetchError, classes, t }) => {


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
                <ListItem>
                    <UserShortDescription user={user} />
                    
                    <ListItemText primary={<div className={classes.truncate}>
                            {user && <span>
                                {user.email}
                            </span>}
                    </div>}
                    />

                </ListItem>
                </Grid>}
        </Grid>
    </Box>;
};

const UserProfile = withStyles(styles)(UserProfileView);

export default withTranslation('UserProfile')(UserProfile);
