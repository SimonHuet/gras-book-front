import React from 'react';
import Error from 'Components/UI/Error/Error';
import Box from '@material-ui/core/Box';

export default { title : 'Error Page'};

export const page = () => <Box>
    <Error title='Erreur 404' message='Page non trouvée' />
</Box>;
