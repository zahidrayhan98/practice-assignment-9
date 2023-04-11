import React, { useContext } from 'react';
import { addToDb } from './utilities/fakedb';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { JobDataContext } from './App';

const ApplyCart = ({ job }) => {
    const { companyLogo, companyName, jobName, salary, fulltime, jobType, jobLocation } = job;
    // console.log(job);

 
    return (
        <div className='lg:w-[70%] md:w-[80%] w-[90%] mx-auto flex max-sm:flex-col max-sm:justify-center lg:justify-between md:justify-between mt-2 mb-7 '>
            <div className="w-30 flex align-middle">
                <img className="h-[40%] my-auto" src={companyLogo} alt="" srcset="" />
            </div>
            <div className=" text-left">
                <h4 className='text-xl font-bold'>{jobName}</h4>
                <p className='text-gray-400 font-bold'>{companyName}</p>
                <div className="flex gap-3">
                    <div className=" p-2 border-[1px] border-slate-400 rounded text-blue-600 uppercase text-base my-2 font-semibold">{jobType}</div>
                    <div className=" p-2 border-[1px] border-slate-400 rounded text-blue-600 uppercase text-base my-2 font-semibold">{fulltime}</div>
                </div>
                <div className="flex gap-6">
                    <p><CurrencyDollarIcon className='h-4 w-4 text-blue-400 mr-2 inline-block'></CurrencyDollarIcon>{salary}</p>
                    <p><MapPinIcon className='h-4 w-4 text-blue-400 mr-2 inline-block'></MapPinIcon>{jobLocation}</p>
                </div>
            </div>
            <div className="my-auto">
                    <button className='button-blue p-2 mt-6 max-sm:w-full'> View Details</button>
            </div>
        </div>
    );
};

export default ApplyCart;