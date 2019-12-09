import React from 'react';
import Timeline from './Timeline';

const posts = [{
<<<<<<< HEAD
    id: 'f3bc8365-32e6-4332-827c-008a034e5785',
=======
    uuid: 'f3bc8365-32e6-4332-827c-008a034e5785',
>>>>>>> 577ebd35abdc9258fa1edbbc428df7708605e8f5
    content: 'Salut salut voilà un big burger !',
    mediaUrl: 'https://source.unsplash.com/random',
    createdAt: '2019-03-11T12:34:56.000Z',
    user: {
<<<<<<< HEAD
        firstName: 'Michel', 
        lastName: 'François',
        pictureUrl: 'https://source.unsplash.com/random'
=======
        first_name: 'Michel', 
        last_name: 'François',
        photo: 'https://source.unsplash.com/random'
>>>>>>> 577ebd35abdc9258fa1edbbc428df7708605e8f5
    },
    comments: [{
        content: 'Wow, ce burger est incroyable',
        createdAt: '2019-03-11T15:34:56.000Z',
        user: {
<<<<<<< HEAD
            firstName: 'Frederic', 
            lastName: 'Alain',
            pictureUrl: 'https://source.unsplash.com/random'
=======
            first_name: 'Frederic', 
            last_name: 'Alain',
            photo: 'https://source.unsplash.com/random'
>>>>>>> 577ebd35abdc9258fa1edbbc428df7708605e8f5
        }
    }],
},
{
    id: '13adc6ac-1e30-4786-9300-a832be4f13b7',
    content: 'J\'ai adoré ce burger , vous en pensez quoi ?' ,
    mediaUrl: 'https://source.unsplash.com/random',
    createdAt: '2019-03-11T12:38:56.000Z',
    user: {
        firstName: 'Alain', 
        lastName: 'térrieur',
        pictureUrl: 'https://source.unsplash.com/random'
    },
    comments: [{
        content: 'Covfefe',
        createdAt: '2019-03-11T14:34:56.000Z',
        user: {
            firstName: 'Tonald', 
            lastName: 'Drump',
            pictureUrl: 'https://source.unsplash.com/random'
        }
    },
    {
        content: 'This is beautiful',
        createdAt: '2019-03-11T16:34:56.000Z',
        user: {
            firstName: 'alex', 
            lastName: 'terrieur',
            pictureUrl: 'https://source.unsplash.com/random'
        }
    }],
}];

export default { title: 'Timeline'};

export const basic =  () => <Timeline posts={posts} />;
export const error =  () => <Timeline postsFetchError />;
