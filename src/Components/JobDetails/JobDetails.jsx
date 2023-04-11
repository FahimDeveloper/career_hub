import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bgImage1 from "../../assets/All-Images/Vector-1.png";
import bgImage2 from "../../assets/All-Images/Vector.png";
import { addToDb, getApplyData } from '../../utilities/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import icon from "../../assets/Icons/Frame.png";
import icon1 from "../../assets/Icons/Frame-1.png";
import icon2 from "../../assets/Icons/Frame-2.png";
import icon3 from "../../assets/Icons/Frame-3.png";
import icon4 from "../../assets/Icons/Frame-4.png";

const JobDetails = () => {
    const { id } = useParams();
    const jobsData = useLoaderData();
    const [jobsId, setJobsId] = useState([])
    useEffect(() => {
        const storedData = getApplyData();
        const saveData = [];
        for (const jobId in storedData) {
            saveData.push(jobId)
        }
        setJobsId(saveData)
    }, [])
    const findData = jobsData.find(job => job.id == id)
    const { job_desc, job_res, job_title, email, phone, address, experience, education_rq, salary_range } = findData;
    const handleApply = (id) => {
        const findId = jobsId.find(jobId => jobId == id)
        if (findId) {
            toast.error("You are alrady applied this job", {
                position: toast.POSITION.TOP_RIGHT
            })
        } else {
            setJobsId([...jobsId, id])
            toast.success("Successfully apply", {
                position: toast.POSITION.TOP_RIGHT
            })
            addToDb(id)
        }
    }
    return (
        <div>
            <ToastContainer />
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
                        <hr className='border border-gray-300' />
                        <div className='text-lg opacity-90 flex items-center gap-x-5'>
                            <img src={icon} alt="" />
                            <p>
                                <span className='text-lg font-medium'>Salary</span> : {salary_range}
                            </p>
                        </div>
                        <div className='text-lg opacity-90 flex items-center gap-x-5'>
                            <img src={icon1} alt="" />
                            <p>
                                <span className='text-lg font-medium'>Job Title</span> : {job_title}
                            </p>
                        </div>
                        <h3 className='text-xl font-medium'>Contact Information</h3>
                        <hr className='border border-gray-300' />
                        <div className='text-lg opacity-90 flex items-center gap-x-5'>
                            <img src={icon2} alt="" />
                            <p>
                                <span className='text-lg font-medium'>Phone</span> : {phone}
                            </p>
                        </div>
                        <div className='text-lg opacity-90 flex items-center gap-x-5'>
                            <img src={icon3} alt="" />
                            <p>
                                <span className='text-lg font-medium'>Email</span> : {email}
                            </p>
                        </div>
                        <div className='text-lg opacity-90 flex items-start gap-x-5'>
                            <img src={icon4} alt="" />
                            <p>
                                <span className='text-lg font-medium'>Address</span> : {address}
                            </p>
                        </div>
                    </div>
                    <button onClick={() => handleApply(id)} className='btn btn-color w-full'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;