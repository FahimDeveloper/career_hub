import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getApplyData } from '../../utilities/localStorage';
import SingleAppliedJob from './SingleAppliedJob';
import bgImage1 from "../../assets/All-Images/Vector-1.png";
import bgImage2 from "../../assets/All-Images/Vector.png";

const AppliedJobs = () => {
    const appliedData = useLoaderData();
    const [jobsData, setJobsData] = useState([])
    useEffect(() => {
        const storedData = getApplyData();
        const jobsArr = []
        for (const jobId in storedData) {
            const appliedJobs = appliedData.find(job => job.id == jobId)
            jobsArr.push(appliedJobs)
        }
        setJobsData(jobsArr)
    }, [])
    return (
        <div>
            <div className='flex justify-center items-center h-96 bg-slate-100 relative'>
                <div>
                    <h3 className='text-3xl font-semibold'>Applied Jobs</h3>
                    <img className='absolute top-0 right-0' src={bgImage1} alt="" />
                    <img className='absolute bottom-0 left-0' src={bgImage2} alt="" />
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-1 gap-5 py-20'>
                {
                    jobsData.map(job => <SingleAppliedJob key={job.id} {...job} />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;