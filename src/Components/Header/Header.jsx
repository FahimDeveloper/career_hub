import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-slate-100 relative'>
            <div className='container mx-auto flex justify-between items-center py-4 md:py-5'>
                <div>
                    <a href='/' className='text-3xl font-semibold'>Jobs Fair</a>
                </div>
                <div className='hidden md:flex gap-x-10 text-lg font-medium items-center'>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/statistics">Statistics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/applied-jobs">Applied Jobs</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/blog">Blog</NavLink>
                </div>
                <div className='flex items-center gap-6'>
                    <button className='btn btn-color'>Start Applying</button>
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <span>
                            {open === true
                                ? <FontAwesomeIcon icon={faXmark} className='text-2xl cursor-pointer' />
                                : <FontAwesomeIcon icon={faBarsStaggered} className='text-2xl cursor-pointer' />
                            }
                        </span>
                    </div>
                </div>
            </div>
            <div className={`absolute duration-500 ${open ? `top-full` : "-top-96"} z-50 bg-white py-5 w-full flex flex-col gap-y-5 text-lg font-medium items-center`}>
                <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => isActive ? "active" : ""} to="/statistics">Statistics</NavLink>
                <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => isActive ? "active" : ""} to="/applied-jobs">Applied Jobs</NavLink>
                <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => isActive ? "active" : ""} to="/blog">Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;