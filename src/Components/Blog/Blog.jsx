import React from 'react';
import bgImage1 from "../../assets/All-Images/Vector-1.png";
import bgImage2 from "../../assets/All-Images/Vector.png";
import { useLoaderData } from 'react-router-dom';
import SingleBlog from './SingleBlog';

const Blog = () => {
    const blogsData = useLoaderData();
    return (
        <div>
            <div className='flex justify-center items-center h-96 bg-slate-100 relative'>
                <div>
                    <h3 className='text-3xl font-semibold'>Blogs</h3>
                    <img className='absolute top-0 right-0' src={bgImage1} alt="" />
                    <img className='absolute bottom-0 left-0' src={bgImage2} alt="" />
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-10'>
                {
                    blogsData.map(blog => <SingleBlog key={blog.id} {...blog} />)
                }
            </div>
        </div>
    );
};

export default Blog;