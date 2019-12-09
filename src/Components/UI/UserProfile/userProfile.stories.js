import React from 'react';
import UserProfile from './UserProfile';


const user ={
    id: 'be7eac3a-213a-411a-a76e-bfba1b753cb6',
    firstName: 'Michel', 
    lastName: 'François',
    birthDate: '1998-01-10',
    email: 'michel.francois@gmail.com',
    description: 'Je decris donc je suis !',
    pictureUrl: 'https://source.unsplash.com/random',
    createdAt: '1999-01-04T23:00:00.000Z',
};

export default { title : 'UserProfile' };

export const basic = () => <UserProfile user={user} />;
