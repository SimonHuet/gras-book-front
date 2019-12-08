import React from 'react';
import TimelineLoaded from './TimelineLoaded';

const posts = [{
    id: 'f3bc8365-32e6-4332-827c-008a034e5785',
    content: 'Salut salut voilà un big burger !',
    mediaUrl: 'https://source.unsplash.com/random',
    createdAt: '2019-03-11T12:34:56.000Z',
    user: {
        firstName: 'Michel', 
        lastName: 'François',
        pictureUrl: 'https://source.unsplash.com/random',
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
},{
    id:'ab695d82-1fc2-4123-b26c-87390f53e6a0',
    content: 'wow ?' ,
    mediaUrl: null,
    createdAt: '2019-03-11T12:38:56.000Z',
    user: {
        firstName: 'Michou', 
        lastName: 'dehors',
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
},
{
    id: '1843b324-6714-42b4-9290-2138a0652fff',
    content: 'Et oui Jamy' ,
    mediaUrl: 'https://source.unsplash.com/random',
    createdAt: '2019-03-14T12:38:56.000Z',
    user: {
        firstName: 'Frederic', 
        lastName: 'Gourmand',
        pictureUrl: 'https://source.unsplash.com/random'
    },
    comments: [{
        content: 'Et toi t\'en pense quoi la petite voix ?',
        createdAt: '2019-03-15T14:34:56.000Z',
        user: {
            firstName: 'Sabine', 
            lastName: '?',
            pictureUrl: 'https://source.unsplash.com/random'
        }
    },
    {
        content: 'Je suis d\'accord',
        createdAt: '2019-03-15T16:34:56.000Z',
        user: {
            firstName: 'La petite', 
            lastName: 'Voix',
            pictureUrl: 'https://source.unsplash.com/random'
        }
    }],
}];

export default { title: 'TimelineLoaded' };
export const basic = () => <TimelineLoaded posts={posts.slice(0, -1)} max={2} />;
export const fullyLoaded = () => <TimelineLoaded posts={posts} />;
export const empty = () => <TimelineLoaded />;
