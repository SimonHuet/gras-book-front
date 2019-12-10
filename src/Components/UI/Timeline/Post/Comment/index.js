/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import fetchBackend from 'Utils/fetchBackend';
import Comment from './Comment';

const CommentView = ({ comment , typeReaction}) => {

    const [fullComment, setFullComment] = useState(false);

    useEffect(() => {
        if(comment && !comment.user){
        fetchBackend(process.env.REACT_APP_USER_API, `users/${comment.userUuid}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
            .then(async ({ body }) => ({ ...comment, user: body }))
            .then(async (cmt) => {
                fetchBackend(process.env.REACT_APP_REACTION_API, `objects/${comment.uuid}/typeReactions?objectType=comment`,{
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    method: 'GET'
                })
                .then(({ body }) => ({...cmt, reactions: body}))
                .then( c => setFullComment(c))
                .catch(err => console.log(err));
            })
            .catch(err => console.error(err));

            
    }
}, [comment]);

    return <Comment comment={fullComment} typeReaction={typeReaction} />;
};

export default CommentView;
