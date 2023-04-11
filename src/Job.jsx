import React, { useEffect } from 'react';
import { MapPinIcon, DevicePhoneMobileIcon, AtSymbolIcon, BriefcaseIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { addToDb, getShoppingCart } from './utilities/fakedb';
import { Link } from 'react-router-dom';
const Job = ({ details }) => {
    const { id, jobDescription, contactInformation, jobResponsibilities, companyName, companyLogo, jobName, jobType, jobLocation, fulltime, ageLimitation, requiredExperience, salary, publishDate, applicationDeadline } = details;
    // console.log(jobResponsibilities);

   const handelAppliedJobs =(id)=>{
        addToDb(id)
   }

    return (
        <div className='flex gap-6 my-6 border-2 max-sm:flex-col-reverse'>
            <div className="text-left lg:p-4 w-full lg:w1/2 md:1/2">
                <p className='my-2'><h4 className='text-lg font-semibold'>Job Description:</h4>{jobDescription}</p>
                <p className='my-4'> <h4 className='text-lg font-semibold'>Job Responsibilities: </h4>{jobResponsibilities}</p>
                <p className='my-2'> <h4 className='text-lg font-semibold'>Experience: </h4> {requiredExperience}</p>
            </div>
            <div className="w-full lg:w1/2 md:1/2 text-left border-2 shadow-lg rounded-e-2xl lg:px-10 md:px-8 px-4 py-4">
                <p className='text-xl font-semibold'>Job Details</p>
                <hr className='bg-gray-400 h-1 mt-2 mb-4' />
                <p className=''><span className='font-bold mr-2'> <CurrencyDollarIcon className='h-6 align-middle text-blue-400 mr-2 inline-block'></CurrencyDollarIcon>Salary:</span> {salary}</p>
                <p className='my-2'><span className='font-bold mr-2'> <BriefcaseIcon className='h-6 align-middle text-blue-400 mr-2 inline-block'></BriefcaseIcon>Job-Title:</span> {jobName}</p>
                <p className='text-xl font-semibold mt-4'>Contact Information</p>
                <hr className='bg-gray-400 h-1 mt-2 mb-4' />
                <p className=''><span className='font-bold mr-2'><DevicePhoneMobileIcon className='h-6 align-middle text-blue-400 mr-2 inline-block'></DevicePhoneMobileIcon>Phone:</span> {contactInformation.phone}</p>
                <p className='my-2'><span className='font-bold mr-2'><AtSymbolIcon className='h-6 align-middle text-blue-400 mr-2 inline-block'></AtSymbolIcon>Email:</span> {contactInformation.email}</p>
                <p className=''><span className='font-bold mr-2'><span><MapPinIcon className='h-6 align-middle text-blue-400 mr-2 inline-block' /></span> Job-Location:</span>{jobLocation}</p>
                <div className="mt-4">
                    <Link to="/appliedJobs">
                    <button onClick={()=>handelAppliedJobs(id)} className='button-blue p-2 w-full'>Apply Now</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Job;