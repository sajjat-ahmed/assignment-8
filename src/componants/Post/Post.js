import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Allpost from '../Allpost/Allpost';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div>
            {
                posts.map((post, indexOf) => <Allpost key={indexOf} post={post}></Allpost>)
            }
        </div>
    );
};

export default Post;