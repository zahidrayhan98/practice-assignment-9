import React, { useContext, useEffect, useState } from 'react';
import { JobDataContext } from './App';
import Job from './Job';

const JobDetails = () => {
    const jobData = useContext(JobDataContext);
    // console.log(jobData);
    const [job, setJob ] = useState([])
    useEffect(()=>{
        const takeData =[];
            const getData = localStorage.getItem('data');
            JSON.stringify(getData)
            const find = jobData.find(f => f.id == getData)
            takeData.push(find)
            setJob(takeData)
    },[])
    // console.log(job);
    return (
        <div className=''>
            <div className="h-20 lg:h-40 bg-background-imh1 bg-blue-100 bg-no-repeat">
                <h1 className='py-[5%] text-4xl font-semibold'>Job Details</h1>
            </div>
            {
                job.map(details =><Job details={details}/>)
            }
        </div>
    );
};

export default JobDetails;