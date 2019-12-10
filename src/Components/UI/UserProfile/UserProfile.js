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
    secondaryInfos: {
        left:'10%',
    },
    list: {
        display: 'flex',
        flexDirection:'row'

    },
};

const UserProfileView = ({ user, userFetchError, classes, t }) =>
    <Box>
        <Grid item xs={12}>
            <Grid>
                 {(userFetchError || !user) &&
                    <Error
                        title={t('user.error.title')}
                        message={t('user.error.message')}
                    />}
            </Grid>

            {!userFetchError && user && <Grid className={classes.list}>

                <UserShortDescription user={user} />
                <ListItem className={classes.secondaryInfos}>
                    <ListItemText primary={<div className={classes.truncate}>
                        {user && <span>
                            {t('user.email')} : {user.email}
                        </span>}
                    </div>}
                        secondary={
                            <>
                                <>{t('user.birthDate')} {new Date(user.birthDate).toLocaleDateString()}</>
                                <br/>
                                <>{t('user.creationDate')} {new Date(user.createdAt).toLocaleDateString()}</>
                            </>
                        }
                    />

                </ListItem>
            </Grid>
            }
        </Grid>
    </Box>;

const UserProfile = withStyles(styles)(UserProfileView);

export default withTranslation('UserProfile')(UserProfile);
