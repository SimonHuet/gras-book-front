import React from 'react';
import UserShortDescription from './UserShortDescription';

const user = {
    firstName: 'Michel', 
    lastName: 'François',
    description: 'Je decris donc je suis !',
    pictureUrl: 'https://source.unsplash.com/random',
};

export default { title : 'UserShortDescription' };

export const basic = () => <UserShortDescription user={user} />;
