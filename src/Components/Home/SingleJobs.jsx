import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCoins } from '@fortawesome/free-solid-svg-icons'

const SingleJobs = (props) => {
    const { icon, job_title, company_name, location, salary_range, work_facilities } = props
    return (
        <div className='border border-slate-200 p-10 rounded-lg space-y-4 flex flex-col justify-center'>
            <img className='w-28 h-auto' src={icon} alt="icon" />
            <div className=' space-y-3'>
                <h3 className='text-xl font-medium'>{job_title}</h3>
                <p className='font-medium'>{company_name}</p>
                <div className='flex gap-5'>
                    <p className='text-primary border border-primary px-1 rounded'>{work_facilities[0]}</p>
                    <p className='text-primary border border-primary px-1 rounded'>{work_facilities[1]}</p>
                </div>
                <div className='flex gap-5 font-medium'>
                    <p> <FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p> <FontAwesomeIcon icon={faCoins} /> Salary : {salary_range}</p>
                </div>
                <button className='btn btn-outline'>View Details</button>
            </div>
        </div>
    );
};

export default SingleJobs;