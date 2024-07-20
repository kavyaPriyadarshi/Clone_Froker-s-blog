import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await axios.get(`http://localhost:8080/api/blogs?page=${page - 1}&size=10`);
            setBlogs(res.data.blogs);
            setTotalPages(res.data.totalPages);
        };
        fetchBlogs();
    }, [page]);

    const handleLike = async (id) => {
        await axios.post(`http://localhost:8080/api/blogs/${id}/like`);
        setBlogs(blogs.map(blog => blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog));
    };

    return (
        <div>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                    <button onClick={() => handleLike(blog.id)}>Like {blog.likes}</button>
                    <Link to={`/blogs/${blog.id}`}>Read More</Link>
                </div>
            ))}
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>
    );
};

export default BlogList;
