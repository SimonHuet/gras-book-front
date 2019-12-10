import React from 'react';
import { Box, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
    copyright: {
        bottom: theme.spacing(100),
      },
});

const Copyright = classes => <Box className={classes.copyright} mt={5}>
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © Gras book '}
        {new Date().getFullYear()}
    </Typography>
    </Box>;

export default withStyles(styles)(Copyright);
