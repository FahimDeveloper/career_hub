import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-100'>
            <div className='container mx-auto flex justify-between items-center py-5'>
                <div>
                    <h2 className='text-3xl font-semibold'>Jobs Fair</h2>
                </div>
                <div className='flex gap-x-10 text-lg font-medium items-center'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/applied-jobs">Applied Jobs</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </div>
                <div>
                    <button className='btn btn-outline'>Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;