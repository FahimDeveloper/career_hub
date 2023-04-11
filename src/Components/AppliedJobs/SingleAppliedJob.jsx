import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCoins } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SingleAppliedJob = (props) => {
    const { id, icon, job_title, company_name, location, salary_range, work_facilities } = props
    return (
        <div className='border border-slate-200 p-5 rounded-lg flex flex-col text-center sm:text-start sm:flex-row items-center justify-between'>
            <div className='flex flex-col sm:flex-row items-center space-y-4 sm:gap-10 lg:gap-20'>
                <div className='sm:bg-gray-200 sm:h-44 sm:w-44 sm:flex sm:justify-center sm:items-center'>
                    <img className='w-28 h-auto' src={icon} alt="icon" />
                </div>
                <div className='space-y-3'>
                    <h3 className='text-xl font-medium'>{job_title}</h3>
                    <p className='font-medium'>{company_name}</p>
                    <div className='flex justify-center sm:justify-start gap-5'>
                        <p className='text-primary border border-primary px-1 rounded'>{work_facilities[0]}</p>
                        <p className='text-primary border border-primary px-1 rounded'>{work_facilities[1]}</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-2 gap-x-5 font-medium'>
                        <p> <FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                        <p> <FontAwesomeIcon icon={faCoins} /> Salary : {salary_range}</p>
                    </div>
                </div>
            </div>
            <Link to={`/details/${id}`}>
                <button className='btn btn-color mt-5'>View Details</button>
            </Link>
        </div>
    );
};

export default SingleAppliedJob;