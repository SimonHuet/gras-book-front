import React from 'react';
import TimelineLoaded from './TimelineLoaded';

const posts = [{
    uuid: 'f3bc8365-32e6-4332-827c-008a034e5785',
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
    uuid: '13adc6ac-1e30-4786-9300-a832be4f13b7',
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
},{
    uuid:'ab695d82-1fc2-4123-b26c-87390f53e6a0',
    content: 'wow ?' ,
    mediaUrl: null,
    createdAt: '2019-03-11T12:38:56.000Z',
    user: {
        first_name: 'Michou', 
        last_name: 'dehors',
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
},
{
    uuid: '1843b324-6714-42b4-9290-2138a0652fff',
    content: 'Et oui Jamy' ,
    mediaUrl: 'https://source.unsplash.com/random',
    createdAt: '2019-03-14T12:38:56.000Z',
    user: {
        first_name: 'Frederic', 
        last_name: 'Gourmand',
        photo: 'https://source.unsplash.com/random'
    },
    comments: [{
        content: 'Et toi t\'en pense quoi la petite voix ?',
        createdAt: '2019-03-15T14:34:56.000Z',
        user: {
            first_name: 'Sabine', 
            last_name: '?',
            photo: 'https://source.unsplash.com/random'
        }
    },
    {
        content: 'Je suis d\'accord',
        createdAt: '2019-03-15T16:34:56.000Z',
        user: {
            first_name: 'La petite', 
            last_name: 'Voix',
            photo: 'https://source.unsplash.com/random'
        }
    }],
}];

export default { title: 'TimelineLoaded' };
export const basic = () => <TimelineLoaded posts={posts.slice(0, -1)} max={2} />;
export const fullyLoaded = () => <TimelineLoaded posts={posts} />;
export const empty = () => <TimelineLoaded />;
