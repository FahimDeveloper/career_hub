import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bgImage1 from "../../assets/All-Images/Vector-1.png";
import bgImage2 from "../../assets/All-Images/Vector.png";

const JobDetails = () => {
    const { id } = useParams();
    const jobsData = useLoaderData();
    console.log(jobsData)
    const findData = jobsData.find(job => job.id == id)
    const { job_desc, job_res, job_title, email, phone, address, experience, education_rq, salary_range } = findData;

    return (
        <div>
            <div className='flex justify-center items-center h-96 bg-slate-100 relative'>
                <div>
                    <h3 className='text-3xl font-semibold'>Job Details</h3>
                    <img className='absolute top-0 right-0' src={bgImage1} alt="" />
                    <img className='absolute bottom-0 left-0' src={bgImage2} alt="" />
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-3 py-20 gap-5 items-center'>
                <div className='col-span-2 space-y-5'>
                    <p>
                        <span className='text-lg font-medium'>Job Description : </span> {job_desc}
                    </p>
                    <p>
                        <span className='text-lg font-medium'>Job Responsibility : </span> {job_res}
                    </p>
                    <p className='text-lg font-medium'>Educational Requirements : </p>
                    <p>
                        {education_rq}
                    </p>
                    <p className='text-lg font-medium'>Experience : </p>
                    <p>
                        {experience}
                    </p>
                </div>
                <div className='col-span-1 space-y-4'>
                    <div className=' bg-indigo-50 rounded-xl p-10 space-y-4'>
                        <h3 className='text-xl font-medium'>Job Details</h3>
                        <hr className='' />
                        <p className='text-lg opacity-90'>
                            <span className='text-lg font-medium'>Salary : </span> {salary_range}
                        </p>
                        <p className='text-lg opacity-90'>
                            <span className='text-lg font-medium'>Job Title : </span> {job_title}
                        </p>
                        <h3 className='text-xl font-medium'>Contact Information</h3>
                        <hr />
                        <p className='text-lg opacity-90'>
                            <span className='text-lg font-medium'>Phone : </span> {phone}
                        </p>
                        <p className='text-lg opacity-90'>
                            <span className='text-lg font-medium'>Email : </span> {email}
                        </p>
                        <p className='text-lg opacity-90'>
                            <span className='text-lg font-medium'>Address : </span> {address}
                        </p>
                    </div>
                    <button className='btn btn-outline w-full'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;