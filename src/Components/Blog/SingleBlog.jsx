import React, { useState } from 'react';

const SingleBlog = (props) => {
    const { question, answer } = props;
    const [seeMore, setSeeMore] = useState(false);
    return (
        <div className='space-y-5 bg-slate-100 p-10 rounded-xl'>
            <h3 className='text-2xl lg:text-3xl font-medium'>{question}</h3>
            <p className='text-lg'>
                <span className='font-semibold'>Answer</span>
                : {
                    seeMore ? (answer) : (answer.slice(0, 200))
                }... <span onClick={() => setSeeMore(!seeMore)} className='text-primary underline cursor-pointer font-medium'>
                    {
                        seeMore ? "Read less" : "Read more"
                    }
                </span>
            </p>
        </div>
    );
};

export default SingleBlog;