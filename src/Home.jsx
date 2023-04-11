import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import job from "../public/job-recruitment-isometric-hiring-process.json";
import business from './assets/Icons/business 1.png'
import accounts from './assets/Icons/accounts 1.png'
import social from './assets/Icons/social-media 1.png'
import chip from './assets/Icons/chip 1.png'
import { MapPinIcon, BanknotesIcon } from '@heroicons/react/24/solid'
import { Link, NavLink, json, useLoaderData } from 'react-router-dom';
import { JobDataContext } from './App';

const Home = () => {
     const jobData = useContext(JobDataContext)
    // console.log(jobData);
    const handleJobDetails =(data)=>{
        // console.log(data);
        localStorage.setItem('data',JSON.parse(data));
    }
    return (
        <div>
            {/* Header section */}
            <section>
                <div className="flex gap-2">
                    <div className="lg:w-1/2 md:w-1/2 w-full max-sm:text-center m-auto">
                        <h1 className=' my-2 text-5xl uppercase text-left font-bold title-animate'><span className=' text-orange-400'>Make yo</span>ur <br /> dreams <br className='' /> come true</h1>
                        <p className='my-6 text-left'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                            Get Started</p>
                        <div className=" md:text-right lg:text-right lg:mr-[100px] md:mr-[100px] text-left"><button className='button-blue p-2'>Get Started</button></div>
                    </div>
                    <div className="w-1/2 h-[calc(100vh-20vh)] border-2 shadow-lg rounded-xl max-sm:hidden">
                        <Lottie className='h-[80vh]' animationData={job} loop={true} />;
                    </div>
                </div>
            </section>
            {/* body */}
            <section>
                <h1 className='mt-6 font-bold text-4xl uppercase'>Job Category List</h1>
                <p className='my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 lg:mt-10 mt-6 md:text-left lg:text-left border-2">
                    <div className="p-6 bg-sky-200 rounded-xl">
                        <img className='max-sm:mx-auto h-8 w-8 my-2' src={accounts} alt="" srcset="" />
                        <h3 className='my-2 font-semibold text-lg'>Account & Finance</h3>
                        <p className='text-gray-400'>300 Jobs Available</p>
                    </div>
                    <div className="p-6 bg-sky-200 rounded-xl">
                        <img className='max-sm:mx-auto h-8 w-8 my-2' src={business} alt="" srcset="" />
                        <h3 className='my-2 font-semibold text-lg'>Creative Design</h3>
                        <p className='text-gray-400'>100+ Jobs Available</p>
                    </div>
                    <div className="p-6 bg-sky-200 rounded-xl">
                        <img className='max-sm:mx-auto h-8 w-8 my-2' src={social} alt="" srcset="" />
                        <h3 className='my-2 font-semibold text-lg'> Marketing & Sales</h3>
                        <p className='text-gray-400'>150 Jobs Available</p>
                    </div>
                    <div className="p-6 bg-sky-200 rounded-xl">
                        <img className='max-sm:mx-auto h-8 w-8 my-2' src={chip} alt="" srcset="" />
                        <h3 className='my-2 font-semibold text-lg'>Engineering Job</h3>
                        <p className='text-gray-400'>224 Jobs Available</p>
                    </div>
                </div>
            </section>
            {/* Featured Jobs */}
            <section>
                <h1 className='lg:mt-10 md:mt-8 mt-4 font-bold text-4xl uppercase'>Featured Jobs</h1>
                <p className='my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-1 max-sm:text-center md:grid-cols-2 lg:grid-cols-2 gap-4 text-left shadow-lg">
                {
                        jobData.map(job => < div className="mt-6 border-2 px-10 py-2" key={job.id}>
                            <div className=" ">
                                <img className='h-10 w-20 mx-auto md:mx-1 lg:mx-0' src={job.companyLogo} alt="" srcset="" />
                                <h3 className=' font-semibold text-base my-2'>{job.jobName}</h3>
                                <p className='text-gray-400'>{job.companyName}</p>
                                <button className='ex-button-white py-1 px-2 text-blue-600'>{job.jobType}</button> <button className='ex-button-white py-1 px-2 text-blue-600 font-semibold'>Full-Time</button>

                                <div className="flex gap-4 ml-[4%]">
                                    <p className=""> <MapPinIcon className='h-4 w-4 text-blue-400 inline-block'></MapPinIcon> {job.companyLocation}</p>
                                    <p ><BanknotesIcon className='h-4 w-4 text-blue-400 inline-block mx-2'></BanknotesIcon>{job.salary}</p>
                                </div>
                                <Link to={`/jobDetails/${job.id}`}>
                                    <button onClick={()=>handleJobDetails(job.id)} className='button-blue p-2 mt-6'> View Details</button>
                                </Link>
                            </div>

                        </div>
                        )
                    }
                </div>
                <div className="">
                    <button onClick={()=>handelLoadMore()} className='button-blue p-2 mt-2'>See More</button>
                </div>

            </section>

        </div>
    );
};

export default Home;
// https://ibb.co/bXTfL63
// https://ibb.co/fq0kMzg
// https://ibb.co/pJLn67w
// https://ibb.co/QvBV8gT