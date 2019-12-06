import React from 'react';
import Timeline from './Timeline';

const posts = [{
    content: 'Salut salut voilà un big burger !',
    mediaUrl: 'https://source.unsplash.com/random',
    createdAt: '2019-03-11T12:34:56.000Z',
    user: {
        first_name: 'Michel', 
        last_name: 'François',
        photo: 'https://source.unsplash.com/random'
    },
    comments: [{
        content: 'Wow, ce burger est incroyable',
        createdAt: '2019-03-11T15:34:56.000Z',
        user: {
            first_name: 'Frederic', 
            last_name: 'Alain',
            photo: 'https://source.unsplash.com/random'
        }
    }],
},
{
    content: 'J\'ai adoré ce burger , vous en pensez quoi ?' ,
    mediaUrl: 'https://source.unsplash.com/random',
    createdAt: '2019-03-11T12:38:56.000Z',
    user: {
        first_name: 'Alain', 
        last_name: 'térrieur',
        photo: 'https://source.unsplash.com/random'
    },
    comments: [{
        content: 'Covfefe',
        createdAt: '2019-03-11T14:34:56.000Z',
        user: {
            first_name: 'Tonald', 
            last_name: 'Drump',
            photo: 'https://source.unsplash.com/random'
        }
    },
    {
        content: 'This is beautiful',
        createdAt: '2019-03-11T16:34:56.000Z',
        user: {
            first_name: 'alex', 
            last_name: 'terrieur',
            photo: 'https://source.unsplash.com/random'
        }
    }],
}];

export default { title: 'Timeline'};

export const basic =  () => <Timeline posts={posts} />;
export const error =  () => <Timeline postsFetchError />;