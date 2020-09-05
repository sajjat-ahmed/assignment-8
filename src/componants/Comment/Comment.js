import React, { useState, useEffect } from 'react';
import './Comment.css';
import { Avatar } from '@material-ui/core';

const Comment = (props) => {
    const { name, body } = props.comment;

    return (
        <div>
            <div className="container">
                <div className="img-container">
                <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                </div>
                <div className="comment-container">
                    <h5><small>{name}</small></h5>
                    <p><small>{body}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Comment;