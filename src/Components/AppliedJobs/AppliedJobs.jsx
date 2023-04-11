import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getApplyData } from '../../utilities/localStorage';
import SingleAppliedJob from './SingleAppliedJob';

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
            <div className='container mx-auto grid grid-cols-1 gap-5'>
                {
                    jobsData.map(job => <SingleAppliedJob key={job.id} {...job} />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;