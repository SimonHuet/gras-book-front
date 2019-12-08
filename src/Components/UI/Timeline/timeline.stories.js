import React from 'react';
import Timeline from './Timeline';

const posts = [{
    id: 'f3bc8365-32e6-4332-827c-008a034e5785',
    content: 'Salut salut voilà un big burger !',
    mediaUrl: 'https://source.unsplash.com/random',
    createdAt: '2019-03-11T12:34:56.000Z',
    user: {
        firstName: 'Michel', 
        lastName: 'François',
        pictureUrl: 'https://source.unsplash.com/random'
    },
    comments: [{
        content: 'Wow, ce burger est incroyable',
        createdAt: '2019-03-11T15:34:56.000Z',
        user: {
            firstName: 'Frederic', 
            lastName: 'Alain',
            pictureUrl: 'https://source.unsplash.com/random'
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
