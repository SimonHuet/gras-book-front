/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import fetchBackend from 'Utils/fetchBackend';
import Comment from './Comment';

const CommentView = ({ comment }) => {

    const [fullComment, setFullComment] = useState(false);

    useEffect(() => {
        fetchBackend(process.env.REACT_APP_USER_API, `users/${comment.userUuid}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
            .then(async ({ body }) => ({ ...comment, user: body }))
            .then(async (pst) => setFullComment(pst))
            .catch(err => console.error(err));
}, [comment]);

    return <Comment comment={fullComment} />;
};

export default CommentView;