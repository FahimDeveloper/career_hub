import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-100'>
            <div className='container mx-auto flex justify-between items-center py-5'>
                <div>
                    <a href='/' className='text-3xl font-semibold'>Jobs Fair</a>
                </div>
                <div className='flex gap-x-10 text-lg font-medium items-center'>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/statistics">Statistics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/applied-jobs">Applied Jobs</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/blog">Blog</NavLink>
                </div>
                <div>
                    <button className='btn btn-color'>Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;