/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import fetchBackend from 'Utils/fetchBackend';
import Post from './Post';

const PostView = ({ post }) => {

    const [fullPost, setFullPost] = useState(false);

    useEffect(() => {
        if (post && !(post.user && post.comment)) {
           fetchBackend(process.env.REACT_APP_USER_API, `users/${post.userUuid}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            })
                .then(async ({ body }) => ({ ...post, user: body }))
                .then(async (pst) => fetchBackend(process.env.REACT_APP_POST_API, `posts/${post.userUuid}/comments`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    method: 'GET'
                })
                    .then(async ({ body }) => ({ ...pst, comments: body }))
                    .then(async (p) => setFullPost(p))
                    .catch(err => console.error(err))
                ).catch(err => console.error(err));
        }
    }, [post]);

    return <Post post={fullPost} />;
};

export default PostView;
