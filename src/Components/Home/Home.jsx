import React, { useEffect, useState } from 'react';
import person from "../../assets/All-Images/person.png"
import SingleCategory from './SingleCategory';
import { useLoaderData } from 'react-router-dom';
import SingleJobs from './SingleJobs';


const Home = () => {
    const jobsData = useLoaderData();
    const [slice, setSlice] = useState(4)
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("jobCatergory.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    return (
        <>
            <div className=' bg-slate-100'>
                <div className='container mx-auto'>
                    <div className='grid md:grid-cols-2 items-center'>
                        <div className='space-y-7 md:order-1 order-2 md:py-0 py-5'>
                            <h2 className='2xl:text-[80px] xl:text-6xl lg:text-5xl text-4xl leading-none font-semibold tracking-wider'>
                                One Step Closer To Your <span className='text-primary'>Dream Job</span>
                            </h2>
                            <p>
                                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                            </p>
                            <button className='btn btn-color'>Get Started</button>
                        </div>
                        <div className='md:order-2 order-1'>
                            <img className='md:w-full md:h-full sm:w-[500px] h-auto mx-auto' src={person} alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-20 pb-10 space-y-10'>
                <div className='text-center space-y-5'>
                    <h2 className='text-4xl md:text-5xl font-semibold'>Job Category List</h2>
                    <p>
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </p>
                </div>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            categories.map(category => <SingleCategory
                                key={category.id}
                                {...category}
                            />)
                        }
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <div className='container mx-auto space-y-8'>
                    <div className='text-center space-y-5'>
                        <h2 className='text-5xl font-semibold'>Featured Jobs</h2>
                        <p>
                            Explore thousands of job opportunities with all the information you need. Its your future
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
                        {
                            jobsData.slice(0, slice).map(job => <SingleJobs
                                key={job.id}
                                {...job}
                            />)
                        }
                    </div>
                    {
                        slice < jobsData.length && <div className='text-center'>
                            <button onClick={() => setSlice(jobsData.length)} className='btn btn-color'>Show All jobs</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Home;