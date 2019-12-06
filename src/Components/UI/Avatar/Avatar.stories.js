import React from 'react';
import Avatar from './Avatar';

export default {title: 'Avatar'};

const user = {
    photo : 'https://www.gravatar.com/avatar/axccdcv?d=retro'
};

export const withUser = () => <Avatar user={user} />;

export const withoutUser = () => <Avatar />;