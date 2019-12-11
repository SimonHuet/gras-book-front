/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import fetchBackend from 'Utils/fetchBackend';
import Post from './Post';

const PostView = ({ post }) => {

    const [fullPost, setFullPost] = useState(false);
    const [typeReaction, setTypeReaction] = useState(false);

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
                .then(async (pst) =>{ console.log("uuid", post.uuid);
                    return fetchBackend(process.env.REACT_APP_POST_API, `posts/${post.uuid}/comments`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    method: 'GET'})
                    .then(async ({ body }) =>{ 
                        console.log(body);
                        return ({ ...pst, comments: body });
                    })
                    .then(async (ps) => 
                        fetchBackend(process.env.REACT_APP_REACTION_API, `objects/${post.uuid}/typeReactions?objectType=post`,{
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            method: 'GET'
                        })
                        .then(({ body }) => ({...ps, reactions: body}))
                        .then( p => setFullPost(p))
                        .catch(err => console.log(err)))
                    .catch(err => console.error(err))}
                ).catch(err => console.error(err));
                
                fetchBackend(process.env.REACT_APP_REACTION_API, `typeReactions`,{
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    method: 'GET'
                })
                .then(async ({ body }) => setTypeReaction(body))
                .catch(err => console.log(err));
        }
    }, [post]);

    return <Post post={fullPost} typeReaction={typeReaction}/>;
};

export default PostView;
