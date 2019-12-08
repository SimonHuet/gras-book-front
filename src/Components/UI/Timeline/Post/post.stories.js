// in src/EventItem.stories.js
import React from 'react';
import Post from './Post';

const post = {
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
};

export default { title: 'Post' };

export const basic = () => <Post post={post} />;
