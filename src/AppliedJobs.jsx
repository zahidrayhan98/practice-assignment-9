import React, { useContext, useEffect, useState } from 'react';
import { getShoppingCart } from './utilities/fakedb';
import { JobDataContext } from './App';
import ApplyCart from './ApplyCart';

const AppliedJobs = () => {
    const jobData = useContext(JobDataContext);
    const [singleJob, setSingleJob] = useState(jobData);
    // console.log(singleJob);
    useEffect(()=>{
        let singleJob = [];
        const storCard = getShoppingCart();
        for (const id in storCard) {
            const saveJob = jobData.find(job => job.id == id);
            singleJob.push(saveJob)
            // console.log(saveJob);
        }
        setSingleJob(singleJob)
    },[]);
    return (
        <div>
             <div className="h-20 lg:h-40 bg-background-imh1 bg-blue-100 bg-no-repeat">
                <h1 className='py-[5%] text-4xl font-semibold'>Applied Job</h1>
            </div>
            <div className="lg:w-32 md:w-32 w-full lg:ml-[120vh] md:ml-[100vh] text-right">
                <select className="select select-info text-right">
                    <option disabled selected>Select</option>
                    <option>Inside</option>
                    <option>Remote</option>
                </select>
            </div>
            {
                singleJob.map(job => <ApplyCart job={job}></ApplyCart>)
            }
        </div>
    );
};

export default AppliedJobs;