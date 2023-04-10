import React from 'react';

const SingleCategory = (props) => {
    const { job_name, icon, available_jobs } = props
    return (
        <div className='bg-slate-100 p-10 rounded-xl text-center space-y-3'>
            <img className='w-12 h-12 object-cover mx-auto' src={icon} alt="icon" />
            <h3 className='text-xl font-medium'>{job_name}</h3>
            <p className=' opacity-60'>{available_jobs} Jobs Available</p>
        </div>
    );
};

export default SingleCategory;