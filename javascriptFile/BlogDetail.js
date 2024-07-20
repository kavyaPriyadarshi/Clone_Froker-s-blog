import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const res = await axios.get(`http://localhost:8080/api/blogs/${id}`);
            setBlog(res.data);
        };
        fetchBlog();
    }, [id]);

    if (!blog) return <div>Loading...</div>;

    return (
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>Likes: {blog.likes}</p>
        </div>
    );
};

export default BlogDetail;
